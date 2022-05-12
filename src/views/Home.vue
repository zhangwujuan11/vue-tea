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
		  collapse-transition="false"
		  >
		  <el-menu-item index="1">处理中心</el-menu-item>
		  <el-menu-item index="2">222</el-menu-item>
		  <el-menu-item index="3" >消息中心</el-menu-item>
		  <el-menu-item index="4">444</el-menu-item>
		  <el-menu-item index="5">444</el-menu-item>
		  <el-menu-item index="6">444</el-menu-item>
		  <el-menu-item index="7">444</el-menu-item>
		  <el-menu-item index="8">444</el-menu-item>
		</el-menu>
	</section>
		
		
	
	<Tabbar></Tabbar> 
  </div>
</template>

<script>
import Header from '@/components/home/Header.vue'
// import Swiper from '@/components/home/Swiper.vue'
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