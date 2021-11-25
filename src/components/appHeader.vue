<template>
	<header class="header flex-row">
		<router-link class="header-title" to="/">
			<img class="logo-img" src="../assets/bestrom_logo.png" alt="bestrom logo" />
			<h1>БЕСТРОМ</h1>
		</router-link>
		<!-- <p class="desktop-language language">EN</p>
		<div class="mobile-language flex-row">
			<img src="../assets/language-world.png" alt="language-world" />
			<p class="language">Rus</p>
			<img src="../assets/language-arrow.png" alt="language-arrow" />
		</div> -->
	</header>
</template>

<script>
export default {
	name: 'AppHeader',
}
</script>

<style scoped>
.header {
	justify-content: center;
	align-items: center;
	background-color: white;
	box-shadow: 0 0 9px rgba(0, 0, 0, 0.25);
	border-radius: 20px;
	position: fixed;
	z-index: 9997;
	top: 0;
	right: 100px;
	left: calc(71px + 170px + 100px);
}
.header-title {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-left: 2rem;
}
.header-title h1 {
	font-weight: bold;
	font-size: 24px;
	line-height: 142%;
	display: flex;
	align-items: center;
	text-align: center;
	letter-spacing: 0.005em;
	font-feature-settings: 'tnum' on, 'lnum' on;
	color: #2fc1ff;
}
.desktop-language {
	display: block;
}
.mobile-language {
	display: none;
}
.logo-img {
	max-width: 2rem;
	margin-right: 0.3rem;
}
.language {
	margin: 0 1rem;
}
@media (max-width: 980px) {
	.header {
		right: 0;
		left: 0;
	}
	.header-title {
		width: auto;
		justify-content: space-between;
		margin-left: 1rem;
	}
	.desktop-language {
		display: none;
	}
	.mobile-language {
		display: flex;
		align-items: center;
		margin-right: 2rem;
	}
	.header {
		justify-content: space-between;
		box-shadow: 0 -1px 9px rgba(0, 0, 0, 0.25);
		border-radius: 0 0 40px 40px;
	}
	.language {
		color: #2fc1ff;
		font-weight: bold;
		margin: 0 0.4rem;
	}
}
</style>
