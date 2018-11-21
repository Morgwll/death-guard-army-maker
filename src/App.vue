<template>
  <div id="app">
    <app-main-menu></app-main-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import appMainMenu from './components/menus/MainMenu.vue'

export default {
  name: 'app',
  components: {
    appMainMenu,
  }
}
</script>

<style lang="scss">

</style>
 