import { defineConfig, globalIgnores } from "eslint/config";
import path from "node:path";
import globals from 'globals';
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";
import nextConfig from "eslint-config-next";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([
    globalIgnores(["**/*.config.js"]),
    js.configs.recommended,
    ...nextConfig,
    ...compat.extends("plugin:storybook/recommended"),
    ...tseslint.configs.recommended,
    {
        files: ["**/*.test.ts", "**/*.test.tsx", "**/*.test.js", "**/*.cy.ts"],
        languageOptions: {
            globals: {
                ...globals.jest,
                ...globals.browser,
                cy: "readonly",
            },
        },
    },
    {
        files: ["**/*.tsx", "**/*.jsx"],
        languageOptions: {
            parserOptions: {
                jsxPragmaFragment: "React",
            },
            globals: {
                React: "readonly",
            },
        },
    },
    {
        files: ["**/*.ts", "**/*.tsx"],
        ignores: [".storybook/**", "cypress/**"],
        languageOptions: {
            parser: tseslint.parser,
        },
        rules: {
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    args: "after-used",
                    argsIgnorePattern: "^_",
                    ignoreRestSiblings: true,
                },
            ],
        },
    },
]);
