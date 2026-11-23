# sofiamoreno.fr

Bespoke jewellery site for Sofia Moreno, in French (`/`) and English (`/en`). Built only from [`@alfadormx/blocks`](https://github.com/alfadormx/astro.blocks) blocks, customised through props, config layers and token overrides. The site has no components of its own.

## Commands

| Command        | Action                                          |
| -------------- | ----------------------------------------------- |
| `pnpm install` | Install dependencies                            |
| `pnpm dev`     | Dev server                                      |
| `pnpm build`   | Static build to `dist/`                         |
| `pnpm check`   | `astro check` (types) and Prettier              |
| `pnpm format`  | Format everything with Prettier                 |

## What lives where

| Path                          | Purpose                                                                                  |
| ----------------------------- | ---------------------------------------------------------------------------------------- |
| `src/config.yaml`             | Site, languages, metadata (with `localized.en`), analytics. `colorScheme: 'only light'`. |
| `src/styles/global.css`       | Fonts, the brand palette, warm neutrals and the semantic token remap                     |
| `src/copy/home/{fr,en}.yaml`  | Every string on the page, including alt texts, nav and footer. `fr` defines the keys     |
| `src/layouts/Layout.astro`    | Floating header, menu drawer, footer, Vercel analytics                                   |
| `src/pages/[...lang]/index.astro` | The single page, one route per language                                              |
| `src/site.ts`                 | Shared prop presets (section rhythm, headline, mono labels, buttons) and links           |
| `src/assets/images/`          | Photos, resolved by blocks through `findImage()`                                         |
| `public/videos/`              | Hero and Calavera videos                                                                 |

## Colours

The brand families **mexican-pink, brown, honey, coral, gold, sage, turquoise, lavender** (plus peach and slate) are defined in `global.css` with a bare value and shades 50 to 950. Use them as Tailwind utilities, e.g. `bg-honey-200` or `text-turquoise-700`, or as CSS variables (`var(--color-sage-400)`). The `@theme static` block emits every shade, so variables exist even when no class uses them.

Semantic tokens point at the brand:

| Token        | Colour           |
| ------------ | ---------------- |
| `primary`    | mexican-pink     |
| `secondary`  | sage             |
| `tertiary`   | slate            |
| `accent`     | peach            |
| `background` | crust (warm)     |
| `surface`    | mantle (warm)    |

The site is light only. There is no theme toggle and there are no dark overrides.

## Upgrading the library

1. Change the tag in `package.json`: `"@alfadormx/blocks": "github:alfadormx/astro.blocks#vX.Y.Z&path:packages/blocks"`.
2. Run `pnpm install && pnpm build`.
3. Read `packages/blocks/CHANGELOG.md` for the changes.

## Deploy

Vercel's zero-config Astro preset: build `pnpm build`, output `dist/`.
