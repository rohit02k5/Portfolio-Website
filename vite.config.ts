import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync, readdirSync, writeFileSync, unlinkSync } from "node:fs";

/**
 * Inlines {{icon:name:size}} tokens in index.html with Lucide SVG markup.
 * Brand icons (github/linkedin) were removed from lucide-static, so their
 * geometry is vendored from lucide-react@0.454 (ISC).
 */
const BRAND_ICONS: Record<string, string> = {
  github:
    '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/>',
  linkedin:
    '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>',
};

function inlineLucide(): Plugin {
  const dir = "node_modules/lucide-static/icons";
  return {
    name: "inline-lucide",
    transformIndexHtml(html) {
      return html.replace(
        /\{\{icon:([a-z0-9-]+)(?::(\d+))?\}\}/g,
        (_m, name: string, size?: string) => {
          let inner = BRAND_ICONS[name];
          if (!inner) {
            const svg = readFileSync(`${dir}/${name}.svg`, "utf8");
            inner = svg.replace(/<svg[^>]*>|<\/svg>/g, "").trim();
          }
          const s = size ?? "18";
          return `<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;
        },
      );
    },
    // Inline the (single) emitted stylesheet into index.html so first paint
    // never waits on a second request — removes render-blocking CSS.
    writeBundle() {
      const htmlPath = "dist/index.html";
      let html = readFileSync(htmlPath, "utf8");
      const m = html.match(
        /<link rel="stylesheet"[^>]*href="\/Portfolio-Website\/(assets\/[^"]+\.css)"[^>]*>/,
      );
      if (!m) return;
      const css = readFileSync(`dist/${m[1]}`, "utf8");
      html = html.replace(m[0], () => `<style>${css}</style>`);
      writeFileSync(htmlPath, html);
      unlinkSync(`dist/${m[1]}`);
      // keep dist/assets clean if the css was its only file
      if (readdirSync("dist/assets").length === 0) return;
    },
  };
}

export default defineConfig({
  base: "/Portfolio-Website/",
  plugins: [react(), tailwindcss(), inlineLucide()],
  build: {
    target: "es2020",
    cssCodeSplit: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
