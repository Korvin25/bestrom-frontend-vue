<template>
	<app-nav-menu></app-nav-menu>
	<router-view></router-view>
</template>

<script>
import appNavMenu from '@/components/appNavMenu.vue'

export default {
	components: {
		appNavMenu,
	},
}
</script>
