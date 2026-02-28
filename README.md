# @dephub/eslint-next ▲

> Opinionated modern ESLint configuration for Next.js projects, built on top of `@dephub/eslint-react`.

[![NPM version](https://img.shields.io/npm/v/@dephub/eslint-next.svg?style=flat)](https://npmjs.org/package/@dephub/eslint-next)
[![ESM-only](https://img.shields.io/badge/ESM-only-brightgreen?style=flat)](https://nodejs.org/)

---

## Features ✨

- ▲ Extends `@dephub/eslint-react` for full React + TS support
- 🚀 Next.js core web vitals rules included
- ⚛️ React and Hooks best practices
- 🔀 Import sorting and unused import handling
- 🧹 Prettier-compatible formatting rules

---

## Installation 📦

- npm: `npm install -D eslint @dephub/eslint-next`
- pnpm: `pnpm add -D eslint @dephub/eslint-next`
- yarn: `yarn add -D eslint @dephub/eslint-next`
- bun: `bun add -D eslint @dephub/eslint-next`

> Since this config extends `@dephub/eslint-react`, your project should already support React and TypeScript.

---

## Usage 🎯

### API 🧩

Create an `eslint.config.mjs` file:

```ts id="nextcfg"
import { defineConfig } from 'eslint/config';
import nextConfig from '@dephub/eslint-next';

export default defineConfig([...nextConfig]);
```

You don’t need to manually include `@dephub/eslint-react` or `@dephub/eslint-ts` — they are extended internally.

### Extending the configuration

```ts id="nextext"
import { defineConfig } from 'eslint/config';
import nextConfig from '@dephub/eslint-next';

export default defineConfig([
  ...nextConfig,
  {
    rules: {
      '@next/next/no-html-link-for-pages': 'off',
    },
  },
]);
```

Then run ESLint normally:

```bash id="nextrun"
npx eslint .
```

---

## License 📄

MIT License – see [LICENSE](LICENSE) for details.

**Author:** Estarlin R ([estarlincito.com](https://estarlincito.com))
