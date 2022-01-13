var path = require('path')
const PrerenderSPAPlugin = require('prerender-spa-plugin')
const PuppeteerRenderer = PrerenderSPAPlugin.PuppeteerRenderer

module.exports = {
	configureWebpack: {
		devtool: 'source-map',
		plugins: [
			new PrerenderSPAPlugin({
				staticDir: path.join(__dirname, 'dist'), // The path to the folder where index.html is.
				routes: [
					'/',
					'/news',
					'/about',
					'/cutting',
					'/jobs',
					'/partners',
					'/clients',
					'/catalog',
					'/404',
				],
				renderer: new PuppeteerRenderer(),
			}),
		],
	},
	transpileDependencies: ['vue-meta'],
}
