module.exports = {
	root: true,
	env: {
		node: true,
		commonjs: true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
	parserOptions: {
		ecmaVersion: 11,
		sourceType: 'module',
		parser: 'babel-eslint',
	},
	plugins: ['prettier', 'vue'],
	rules: {
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'auto',
				tabWidth: 1,
				useTabs: true,
				semi: false,
				singleQuote: true,
				jsxBracketSameLine: true,
				jsxSingleQuote: true,
				printWidth: 100,
				trailingComma: 'all',
			},
		],
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		quotes: ['error', 'single'],
		'vue/no-multiple-template-root': 0,
		'vue/html-closing-bracket-spacing': ['warn', { selfClosingTag: 'always' }],
		'vue/no-unused-components': 'warn',
	},
}
