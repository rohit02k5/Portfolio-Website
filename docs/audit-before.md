# Lighthouse audit — BEFORE (legacy CRA site)

Audited the live site `https://rohit02k5.github.io/Portfolio-Website/` on 2026-10-13
with Lighthouse 12 (headless Chrome, mobile emulation + 4× CPU throttling).

## Mobile

| Category | Score |
|---|---|
| Performance | **33** |
| Accessibility | 97 |
| Best Practices | 96 |
| SEO | 90 |

| Metric | Value |
|---|---|
| First Contentful Paint | 3.9 s |
| Speed Index | 20.9 s |
| Largest Contentful Paint | 4.6 s |
| Total Blocking Time | 430 ms |
| Cumulative Layout Shift | 0.658 |
| Time to Interactive | 4.6 s |
| Total transfer | ~355 KiB |
| Unused JavaScript | ~101 KiB |
| Render-blocking resources | ~2.45 s savings possible |

## Desktop

The desktop run failed with `NO_FCP` — the page did not paint any content within
the audit timeout, which is itself consistent with the severity of the site's
main-thread and rendering cost.

## Root causes of the lag

1. **Unthrottled `mousemove` → React state updates** — `GradientBackground`
   re-rendered on every pointer event and rebuilt a full-viewport
   `radial-gradient` spotlight each frame.
2. **~50 individually animated elements** — 40 twinkling particles, 5 shooting
   stars and 4 `blur-[90–120px]` nebula orbs animating infinitely with
   `mix-blend-plus-lighter`, all mounted permanently behind the page.
3. **Create React App / react-scripts** — webpack-era bundle, `react-typed`,
   `react-scroll`, `react-icons`, testing-library deps in the production graph.
4. **Render-blocking Google Fonts** via CSS `@import` and a remote noise texture
   fetched from `grainy-gradients.vercel.app`.
5. **CLS 0.658** — unsized content and reveal effects shifting layout.
6. Generic CRA `index.html` — "React App" title, no meta/OG/structured data.

## Fix strategy

Clean rebuild: Vite + React + TypeScript + Tailwind v4. All animation is
transform/opacity-only CSS; one aurora backdrop (3 blurred blobs, keyframe
transforms, `prefers-reduced-motion` aware); IntersectionObserver reveals;
rAF-throttled scroll/tilt/cursor effects; code-split modal; self-hosted variable
fonts with `font-display: swap`.
