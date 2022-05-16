<template>
	<div class="tabbar">
		<ul>
			<li
				v-for="(item,index) in routerList" :key=index
				@click="changeload(item.path)"
			>
			
				<img :src="$route.path.includes(item.path) ? item.select : item.active"/>
				<span :class="$route.path.includes(item.path) ? 'selectfont' : 'font'">{{item.title}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:"Tabbar",
		data(){
			return{
				routerList:[
					{
						title:"首页",
						path:"/home",
						active:"/images/goapply_qq.png",
						select:"/images/collection_true.png"
					},
					{
						title:"分类",
						path:"/list",
						active:"/images/goapply_qq.png",
						select:"./images/collection_true.png"
					},
					{
						title:"购物车",
						path:"/cart",
						active:"/images/goapply_qq.png",
						select:"/images/collection_true.png"
					},
					{
						title:"我的",
						path:"/my",
						active:"/images/goapply_qq.png",
						select:"/images/collection_true.png"
					},
					
				]
			}
		},
		methods:{
			changeload(path){
				// 判断
				if(this.$route.path == path){
					return false
					
				}else{
					this.$router.replace(path);
				}
				
			}
		}
	}
</script>

<style scoped>
	.tabbar{
		width: 100%;
		height:2.1875rem;
		background-color:white;
	}
	.tabbar ul{
		display: flex;
		justify-content: space-around;
		width: 100%;
		height: 100%;
		align-items: center;
	}
	.tabbar ul li{
		display: flex;
		flex-direction: column;
		align-items: center;
	} 
	.tabbar ul li img{
		width: 0.82666rem;
		height: 0.82666rem;
	}
	.tabbar ul li span{
		font-size: 0.422rem;
	}
	.selectfont{
		color: #8bc34a;
	}
	.font{
		color: black;
	}
</style>