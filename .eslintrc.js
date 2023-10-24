module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	parser: "vue-eslint-parser",
	extends: [
		"standard-with-typescript",
		"plugin:vue/vue3-essential",
		"plugin:prettier/recommended",
	],
	overrides: [
		{
			env: {
				node: true
			},
			files: [
				".eslintrc.{js,cjs}"
			],
			parserOptions: {
				sourceType: "script"
			}
		}
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		parser: '@typescript-eslint/parser',
	},
	plugins: [
		"@typescript-eslint"
	],
	rules: {
	}
}
