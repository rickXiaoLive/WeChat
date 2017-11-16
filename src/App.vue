<template>
  <div id="app">
    <transition
      appear
      name="change-page"
      enter-active-class="animated fadeInRight"
      leave-active-class="animated fadeOutLeft"
      mode="out-in"
      :duration="{ enter: 800, leave: 500 }"
    >
    <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style scoped>
</style>
