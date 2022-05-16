<template>
	<div class="serach">
		<Header></Header>
		<section></section>
		<Tabbar></Tabbar>
	</div>
</template>

<script>
	import Tabbar from "@/components/common/Tabbar.vue"
	import Header from "@/components/search/Header.vue"
	export default{
		components:{
			Tabbar,
			Header
		}
	}
</script>

<style scoped>
	.serach{
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
	section{
		flex: 1;
		overflow: hidden;
	}
</style>