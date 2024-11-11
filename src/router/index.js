import { createRouter, createWebHistory } from 'vue-router'
import appPage404 from '../views/appPage404'
import appPageAbout from '../views/appPageAbout'
import appPageAboutHistory from '../views/appPageAboutHistory'
import appPageCatalog from '../views/appPageCatalog'
import appPageCatalogId from '../views/appPageCatalogId'
import appPageClients from '../views/appPageClients'
import appPageCutting from '../views/appPageCutting'
import appPageJobId from '../views/appPageJobId'
import appPageJobs from '../views/appPageJobs'
import appPageMain from '../views/appPageMain'
import appPageNews from '../views/appPageNews'
import appPageNewsId from '../views/appPageNewsId'
import appPagePartners from '../views/appPagePartners'
import appPageUniqueCutting from '../views/appPageUniqueCutting'

export default createRouter({
	mode: 'history',

	history: createWebHistory(process.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'appPageMain',
			component: appPageMain,
		},
		{
			path: '/about',
			name: 'appPageAbout',
			component: appPageAbout,
		},
		{
			path: '/about/history',
			name: 'appPageAboutHistory',
			component: appPageAboutHistory,
		},
		{
			path: '/news',
			name: 'appPageNews',
			component: appPageNews,
		},
		{
			path: '/news/:newsId',
			name: 'appPageNewsId',
			component: appPageNewsId,
		},
		{
			path: '/cutting',
			name: 'appPageCutting',
			component: appPageCutting,
		},
		{
			path: '/cutting/:packetId',
			name: 'appPageUniqueCutting',
			component: appPageUniqueCutting,
		},
		{
			path: '/jobs',
			name: 'appPageJobs',
			component: appPageJobs,
		},
		{
			path: '/jobs/:jobId',
			name: 'appPageJobId',
			component: appPageJobId,
		},
		{
			path: '/partners',
			name: 'appPagePartners',
			component: appPagePartners,
		},
		{
			path: '/clients',
			name: 'appPageClients',
			component: appPageClients,
		},
		{
			path: '/catalog',
			name: 'appPageCatalog',
			component: appPageCatalog,
		},
		{
			path: '/catalog/type/:radioId/:filtersId',
			name: 'appPageCatalogType',
			component: appPageCatalog,
		},
		{
			path: '/catalog/machine/:catalogId',
			name: 'appPageCatalogId',
			component: appPageCatalogId,
		},
		{
			path: '/404',
			name: '404',
			component: appPage404,
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: '/404',
		},
	],
})
