<template>
  <div class="d-flex justify-content-center">
      <h1 class="align-self-center">No hay nada seleccionado</h1>
  </div>
  <fab-vue />
</template>

<script>
import { defineAsyncComponent } from "vue";
import FabVue from '../components/FabVue.vue';

export default {
  components: { FabVue },
    FabVue: defineAsyncComponent(() => import('../components/FabVue.vue'))
}
</script>

<style lang="scss" scoped>
    div{
        height: 100%;
    }
</style>