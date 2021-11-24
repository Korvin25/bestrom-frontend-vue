<template>
	<metainfo>
		<template #title="{ content }">{{ content }}</template>
	</metainfo>
	<app-nav-menu></app-nav-menu>
	<router-view></router-view>
</template>

<script>
import appNavMenu from '@/components/appNavMenu.vue'
import { useMeta } from 'vue-meta'

export default {
	components: {
		appNavMenu,
	},
	setup() {
		useMeta({
			title: 'БЕСТРОМ',
			htmlAttrs: { lang: 'ru', amp: true },
		})
	},
}
</script>
