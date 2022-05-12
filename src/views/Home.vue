<template>
  <div class="home">
  首页
  <Tabbar></Tabbar>
  </div>
</template>

<script>
// @ is an alias to /src
import Tabbar from "@/components/common/Tabbar.vue"

export default {
  name: 'Home',
  components: {
    Tabbar,
  }
}
</script>
