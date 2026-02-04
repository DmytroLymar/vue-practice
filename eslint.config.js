import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import tseslint from 'typescript-eslint'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfig([
  /* ===== Files ===== */
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx,ts,tsx}'],
  },

  /* ===== Ignores ===== */
  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  /* ===== Base language options ===== */
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  /* ===== JS recommended ===== */
  js.configs.recommended,

  /* ===== Vue ===== */
  ...pluginVue.configs['flat/essential'],

  /* ===== TypeScript ===== */
  ...tseslint.configs.recommended,

  /* ===== Vue + TS inside <script setup> ===== */
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue'],
      },
    },
  },

  /* ===== Prettier ===== */
  skipFormatting,
])
