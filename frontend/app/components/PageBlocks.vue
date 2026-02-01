<template>
	<div class="page-blocks">
		<section v-for="block in blocks" :key="block.id || block.name" class="page-block card-shadow">
			<h3>{{ language === 'RU' ? block.title || block.name : block.title_en || block.name_en || block.name }}</h3>
			<div class="page-block-contents">
				<div v-for="content in block.contents || []" :key="content.id" class="page-block-content">
					<div class="page-block-text">
						<h4>{{ language === 'RU' ? content.name : content.name_en || content.name }}</h4>
						<p v-html="language === 'RU' ? content.text : content.text_en || content.text" />
					</div>
					<NuxtImg
						v-if="content.file"
						class="page-block-image"
						:src="resolveImage(content.file)"
						:alt="language === 'RU' ? content.name : content.name_en || content.name"
						width="640"
						height="420"
						loading="lazy" />
				</div>
			</div>
		</section>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	blocks: any[]
	language: 'RU' | 'EN'
	mediaBase: string
}>()

const resolveImage = (src: unknown) => {
	if (!src || typeof src !== 'string') return ''
	if (src.startsWith('http')) return src
	return `${props.mediaBase}${src.replace(/^\//, '')}`
}
</script>

<style scoped>
.page-blocks {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}
.page-block {
	padding: 1.5rem;
}
.page-block-contents {
	display: flex;
	flex-direction: column;
	gap: 1.5rem;
}
.page-block-content {
	display: grid;
	grid-template-columns: 1.2fr 1fr;
	gap: 1.5rem;
	align-items: center;
}
.page-block-image {
	width: 100%;
	height: auto;
	border-radius: 12px;
}
@media (max-width: 980px) {
	.page-block-content {
		grid-template-columns: 1fr;
	}
}
</style>
