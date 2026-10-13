# Lighthouse Audit — AFTER (rebuilt site)

Live URL: https://rohit02k5.github.io/Portfolio-Website/
Audited: production GitHub Pages deployment of the rebuilt Vite + React + TypeScript site.

Note on methodology: the local machine runs Kaspersky Web AV, which injects a
parser-blocking `<script>` into every HTTPS page (requests to
`gc.kis.v2.scr.kaspersky-labs.com`). Lighthouse counted it as ~1.5 s of
render-blocking time. The scores below were taken with
`--blocked-url-patterns="*kaspersky*"` so the audit measures the site itself —
real visitors never see that script. GitHub Pages TTFB on this connection varied
600–1230 ms between runs, so simulated scores fluctuate; representative runs are
reported.

## Mobile (simulated 4× CPU + Slow 4G)

| Metric          | BEFORE (old CRA site) | AFTER (rebuild) |
|-----------------|----------------------:|----------------:|
| Performance     | 33                    | 85–95 (median ~88, best 95) |
| Accessibility   | 97                    | 97              |
| Best Practices  | 96                    | 100             |
| SEO             | 90                    | 100             |
| FCP             | 3.9 s                 | 2.4–3.8 s       |
| LCP             | 4.6 s                 | 2.4–3.8 s (observed real: ~1.2–1.8 s) |
| TBT             | 430 ms                | 30–100 ms       |
| CLS             | 0.658                 | 0.002–0.004     |
| Speed Index     | 20.9 s                | 2.8–4.9 s       |
| Total bytes     | ~355 KiB              | ~278 KiB        |

Best mobile run: Performance 95, LCP 2.4 s, FCP 2.4 s, CLS 0.002, TBT 50 ms,
Speed Index 2.8 s. Observed (unthrottled) on the same run: FCP 1.03 s,
LCP 1.17 s.

## Desktop

| Metric          | BEFORE | AFTER |
|-----------------|-------:|------:|
| Performance     | NO_FCP (page failed to paint in the audit run) | 89 |
| Accessibility   | —      | 97    |
| Best Practices  | —      | 100   |
| SEO             | —      | 90 → 100 |
| FCP / LCP       | —      | 1.4 s / 1.4 s |
| TBT / CLS       | —      | 0 ms / 0.002  |
| Speed Index     | —      | 1.9 s |

## What changed vs the old site

- Static-first paint: navbar, hero, and footer are plain HTML in `index.html`;
  first paint no longer waits on React boot. React hydrates only below-fold
  sections.
- Stylesheet inlined into the HTML at build (Vite plugin `writeBundle`) — zero
  render-blocking requests other than the document.
- Self-hosted woff2 fonts (Inter / Space Grotesk / JetBrains Mono, latin
  subset) with `font-display: swap` — no Google Fonts round trip.
- Initial JS: ~61 KB gzipped total (React chunk ~45 KB + app ~16 KB); project
  modal is a separate lazy chunk (~1.7 KB gzip).
- Animations only transform/opacity via IntersectionObserver reveals; the old
  mousemove-driven gradient blobs, 40 animated particles, shooting stars and
  noise overlay are gone.
- `prefers-reduced-motion` fully respected; mobile gets simplified effects.

## Remaining constraint

GitHub Pages TTFB (~0.6–1.2 s from this network) is the dominant remaining cost
and cannot be improved without changing hosts (not permitted). Everything after
TTFB now paints in ~150–600 ms.
