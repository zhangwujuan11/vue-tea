<template>
	<header>
		<div class="search-return">
			<i class="iconfont icon-fanhui"></i>
		</div>
		<div class="search-main" onsubmit="return false">
			<i class="iconfont icon-Fangdajing"></i>
			<form action="" onsubmit="return false">
				<input type="search" placeholder="搜索你喜欢的产品">
			</form>
		</div>
		<div class="search-btn">搜索</div>
	</header>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	header{
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		height: 1.173333rem;
		background-color: #b0352f;
		color: #fff;
	}
	.search-return,.search-btn{
		padding: 0 0.266667rem;
	}
	.search-return i{
		font-size: 0.746667rem;
	}
	.search-btn{
		font-size: 0.426667rem;
	}
	.search-main{
		border-radius: 0.32rem;
		background-color: #fff;
		display: flex;
		align-items: center;
		width:6.933333rem;
		height: 0.8rem;
	}
	.search-main i{
		color: #666;
		padding: 0 0.266667rem;
	}
	.search-main form{
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}
	.search-main form input{
		width: 100%;
	}
</style>