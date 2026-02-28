/* eslint-disable import-x/no-named-as-default-member */
import type { Linter } from 'eslint';

import reactConfig from '@dephub/eslint-react';
import pluginNext from '@next/eslint-plugin-next';
import { defineConfig } from 'eslint/config';

const nextConfig: Linter.Config[] = defineConfig([
  ...reactConfig,

  {
    files: ['**/*.jsx', '**/*.tsx'],
    name: 'eslint/next',
    plugins: {
      '@next/next': pluginNext,
    },

    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs['core-web-vitals'].rules,
      'safeguard/no-raw-error': 'warn',
    },
  },
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
] as Linter.Config[]);

export default nextConfig;
