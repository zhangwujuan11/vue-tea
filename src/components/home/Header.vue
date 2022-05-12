<template>
	<header>
		<h1><img src="@/assets/imge/logo.gif" alt=""></h1>
		<div class="serch">
			<i class="iconfont icon-fangdajing"></i>
			<span>搜你喜欢的…</span>
		</div>
		<div class="kefu">
			<i class="iconfont icon-kefu"></i>
		</div>
	</header>
</template>

<script>
</script>

<style scoped>
	header{
		display: flex;
		justify-content: space-around;
		align-items: center;
		width: 100%;
		height: 1.157895rem;
		background-color: #b0352f;
		position: fixed;
		top: 0;
		left: 0;
	}
	header h1{
		width:2.266667rem;
		height: 1.8666rem;
	}
	header h1 img{
		width: 100%;
		height: 100%;
	}
	.serch{
		width: 6.56rem;
		height: 0.8rem;
		background-color: white;
		border-radius: 12px;
		font-size: 14px;
		display: flex;
		align-items: center;
		padding: 0 0.266667rem;
	}
	.kefu i{
		font-size: 0.64rem;
		color: white;
	}
	.serch i{
		font-size: 0.426667rem;
		margin-right: 0.08rem;
	}
</style>