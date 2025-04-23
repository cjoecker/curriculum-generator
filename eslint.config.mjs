import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

import eslintPluginUnicorn from "eslint-plugin-unicorn";

import jsxA11Y from "eslint-plugin-jsx-a11y";
import unusedImports from "eslint-plugin-unused-imports";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	...compat.extends("next/core-web-vitals", "next/typescript"),
	eslintPluginUnicorn.configs.recommended,
	...compat.extends(
		"plugin:jsx-a11y/recommended",
		"plugin:react-hooks/recommended",
	),
	{
		plugins: {
			"unused-imports": unusedImports,
			"jsx-a11y": jsxA11Y,
		},
		rules: {
			"import/order": [
				"warn",
				{
					"newlines-between": "always",
					alphabetize: {
						order: "asc",
						caseInsensitive: true,
					},
				},
			], // auto sort imports

			"no-console": ["error", { allow: ["warn", "error", "info"] }], // don't allow console.log

			"max-params": ["warn", 5], // prevent functions with too many parameters
			"import/no-unresolved": "off", // IDE is recognizing it already
			"unicorn/number-literal-case": "off", // prettier and unicorn collide here.
			"react/jsx-uses-react": "error", // necessary to remove unused imports
			"react/jsx-uses-vars": "error", // necessary to remove unused imports
			"arrow-body-style": ["error", "always"], // always have a return in functions
			"unused-imports/no-unused-imports": "error", // necessary to remove unused imports
			"testing-library/render-result-naming-convention": "off", // conflicting with args variable from setup function on tests
			"@typescript-eslint/require-await": "error", // avoid async functions without await
			"@typescript-eslint/no-unused-vars": [
				"error",
				{ argsIgnorePattern: "^_" },
			],
			"unused-imports/no-unused-vars": [
				"warn",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_",
				},
			],

			"unicorn/prevent-abbreviations": "off", // abbreviations like props or fn are wanted
			"unicorn/prefer-ternary": "off", // ternary is not always better
			"unicorn/no-useless-undefined": "off", // not working properly
			"unicorn/no-null": "off", // not working properly
			"unicorn/prefer-module": "off", // __dirname is not working with import.meta.url
			"unicorn/consistent-function-scoping": "off", // makes code less readable
			"unicorn/no-array-for-each": "off", // performance should only be improved until it causes problems
			"unicorn/better-regex": "off", // more efficient regex may be less clear to read
			"unicorn/prefer-query-selector": "off", // automatic fix breaks some queries
			"unicorn/text-encoding-identifier-case": "off", // it is colliding with TypeScript types
			"@typescript-eslint/restrict-template-expressions": "off", // not useful always
			"@typescript-eslint/unbound-method": "off", //conflict with remix-validated form
			quotes: [
				"error",
				"double",
				{
					allowTemplateLiterals: false,
					avoidEscape: true,
				},
			], // don't allow backticks if it's not a template literal

			"react/react-in-jsx-scope": "off", // not necessary on React 18
			"testing-library/no-await-sync-events": "off", // userEvents without async are not always working
			"jest/no-export": "off", // export necessary for files with dynamic imports for mocks
			"unicorn/prefer-node-protocol": "off", // not working with remix
			"jest/no-mocks-import": "off", // necessary for prisma client
			"unicorn/filename-case": [
				"error",
				{
					case: "kebabCase",
					ignore: [/\.\$[a-z]/], // ignore files with URL variables .$var - they need to be in camelCase for Remix
				},
			],
			"@typescript-eslint/prefer-nullish-coalescing": [
				"error",
				{
					ignoreConditionalTests: true,
					ignoreMixedLogicalExpressions: true,
				},
			], // ?? is different from || when the value is 0 or false
		},
	},
	{
		languageOptions: {
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
	},
];

export default eslintConfig;
