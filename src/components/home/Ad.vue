<template>
	<div class="ad">
		
		<img :src="adList[0].imgUrl" alt="">
	</div>
</template>

<script>
	export default{
		props:{
			adList:''
		}
	}
</script>

<style scoped>
	.ad p{
		width: 100%;
		height: 2.98666rem;
	}
	.ad img{
		width: 100%;
		height: 100%;
	}
</style>