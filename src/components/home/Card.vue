<template>
	<div class="title">
		<slot>
			<span>火爆推荐</span>
		</slot>
	</div>
</template>

<script>
</script>

<style scoped>
	.title{
		width: 100%;
		text-align: center;
		
		padding: 0.266667rem 0;
	}
	.title span{
		font-size: 0.426667rem;
		position: relative;
	}
	.title span::after{
		content: "";
		position: absolute;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		display: block;
		background: #d4c0a7;
		top: 50%;
		margin-top: -4px;
		right: -0.5rem;
	}
	.title span::before{
		content: "";
		position: absolute;
		width: 8px;
		height: 8px;
		border-radius: 50%;
		display: block;
		background: #d4c0a7;
		top: 50%;
		margin-top: -4px;
		left: -0.5rem;
	}
</style>