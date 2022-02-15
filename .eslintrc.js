module.exports = {
	root: true,
	env: {
		browser: true,
		es2021: true,
		node: true,
		'vue/setup-compiler-macros': true,
	},
	extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
	parserOptions: {
		ecmaVersion: 12,
		sourceType: 'module',
	},
	plugins: ['vue'],
	rules: {
		quotes: ['error', 'single'],
		'vue/no-v-html': 0,
		'vue/no-multiple-template-root': 0,
		'vue/html-closing-bracket-spacing': ['warn', { selfClosingTag: 'always' }],
		'vue/no-unused-components': 'warn',
	},
}
