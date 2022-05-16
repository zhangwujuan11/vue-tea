<template>
  <div class="home">
	<div class="headers">
		<div class="headers-main">
			<Header></Header>
			<!-- 滑动导航 -->
			<section style="position: fixed;top: 1.173333rem;left: 0;width: 100%;">
				<el-menu
				  class="el-menu-demo" 
				  mode="horizontal" 
				  @select="handleSelect" 
				  text-color="#000000"
				  active-text-color="#b54f4a"
				  >
				  <el-menu-item 
				  v-for='(item,index) in toBar'
				  :key="index"
				  :index="item.id + ''"
				  >
					  {{item.label}}
				  </el-menu-item>
				</el-menu>
			</section>
		</div>
	</div>
	
	<div class="wrapper main-con">
		<div>
			<div 
				v-for="(item,index) in newData"
				:key="index"
			>
				<Swiper 
				v-if="item.type=='swiperList'"
				:swiperList="item.data"
				></Swiper>
				<Icon
				  v-if="item.type=='iconsList'"
				  :iconsList="item.data"
				  ></Icon>
				<Recommend
				  v-if="item.type=='recommendList'"
				  :recommendList="item.data"
				  ></Recommend>
				<Ad
				  v-if="item.type=='adList'"
				  :adList="item.data"
				  ></Ad>
				<Like
				 v-if="item.type=='likeList'"
				 :likeList="item.data"
				 > </Like>
			</div>	
		</div>
	</div>
	<Tabbar></Tabbar> 
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import Swiper from '@/components/home/Swiper.vue'
import Tabbar from '@/components/common/Tabbar.vue'
import Recommend from '@/components/home/Recommend.vue'
import Icon from '@/components/home/Icon.vue'
import Like from '@/components/home/Like.vue'
import Ad from '@/components/home/Ad.vue'
// 引入插件
import BetterScroll from 'better-scroll'
import axios from 'axios'
export default {
  name: "Home",
   data() {
        return {
          toBar:[],
		  newData:[],
		  BetterScroll:'',
		  TbetterScroll:''
        };
      },
	 props:{ index:''} ,
  methods: {
       
	  async	getData(){
			let res= await axios({url:'/api/index_list/0/data/1'});
			
			this.toBar=	Object.freeze(res.data.data.topBar);
			this.newData=Object.freeze(res.data.data.data);
			
			//当dom执行完成再执行
			this.$nextTick(()=>{
			this.BetterScroll =	new BetterScroll('.wrapper', {
				   movable: true,
				   zoom: true
				 })
			})
		},
		async addData(key){
			let res= await axios({url:'/api/index_list/'+key+'/data/1'});
			if(res.data.data.constructor != Array){
				this.newData=res.data.data.data;
			}else{
				this.newData=res.data.data
			}
			//当dom执行完成再执行
		this.TbetterScroll = this.$nextTick(()=>{
				new BetterScroll('.wrapper', {
				   movable: true,
				   zoom: true
				 })
			})
		},
		handleSelect(key, keyPath) {
			this.addData(key)
		},
		
      },
  components:{
	Tabbar,
	Header,
	Swiper,
	Icon,
	Recommend,
	Like,
	Ad
  },
  created(){
	  this.getData()
  },
  mounted(){
	 
  }
};
</script>

<style scoped>
	.home{
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}
.el-menu--horizontal>.el-menu-item{
	height: 1.44rem;
	display: inline-block;
	float: none;
	
}
.el-menu.el-menu--horizontal::-webkit-scrollbar{
	display: none;
	 }
.el-menu{
	overflow-x: auto;
	overflow-y: hidden;
	white-space:nowrap;
	width: auto;
	   }
.headers{
	
	width: 100%;
	height: 2.88rem;
}
.headers-main{
	position: fixed;
	top: 0;
	left: 0;
}
.main-con{
	flex: 1;
	overflow: hidden;
}
</style>