<template>
  <div id="app">
    <NavMenu></NavMenu>
    <LeftAside/>
    <router-view/>
  </div>
</template>


<script>
import NavMenu from "@/views/NavMenu.vue";
// import LeftAside from "@/views/LeftAside";
export default {
  components:{NavMenu}

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
