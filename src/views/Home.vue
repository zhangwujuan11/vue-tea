<template>
  <div class="home">
	<Header></Header>
	<!-- 滑动导航 -->
	<section style="position: fixed;top: 1.173333rem;left: 0;width: 100%;">
		<el-menu
		 :default-active="activeIndex"
		  class="el-menu-demo" 
		  mode="horizontal" 
		  @select="handleSelect"
		  text-color="#000000"
		  active-text-color="#b54f4a"
		  
		  >
		  <el-menu-item index="1">推荐</el-menu-item>
		  <el-menu-item index="2">大红袍</el-menu-item>
		  <el-menu-item index="3" >绿茶</el-menu-item>
		  <el-menu-item index="4">铁观音</el-menu-item>
		  <el-menu-item index="5">普洱</el-menu-item>
		   <el-menu-item index="6">花茶</el-menu-item>
		  <el-menu-item index="7">茶具</el-menu-item>
		</el-menu>
	</section>
	<!-- 轮播 -->
		<Swiper></Swiper>

		
		
	
	<Tabbar></Tabbar> 
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
import Swiper from '@/components/home/Swiper.vue'
import Tabbar from '@/components/common/Tabbar.vue'
export default {
  name: "Home",
   data() {
        return {
          activeIndex: '1',
          activeIndex2: '1'
        };
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(key, keyPath);
        }
      },
  components:{
	Tabbar,
	Header,
	Swiper
  }
};
</script>

<style scoped>
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
</style>