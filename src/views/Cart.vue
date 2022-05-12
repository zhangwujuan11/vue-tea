<template>
  <div class="about">
    <h1>这是购物车</h1>
      <Tabbar></Tabbar>
  </div>
</template>
<script>
	import Tabbar from "@/components/common/Tabbar.vue"
	export default{
		name:"Cart",
		components: {
    Tabbar,
  }
	};
</script>