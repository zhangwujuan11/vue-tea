<template>
  <div class="about">
    <h1>这是分类</h1>
      <Tabbar></Tabbar>
  </div>
</template>

<script>
	import Tabbar from "@/components/common/Tabbar.vue"
	export default{
		name:"List",
		components: {
    Tabbar,
  }
	};
</script>
