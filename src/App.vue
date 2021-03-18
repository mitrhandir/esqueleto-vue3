<template>
  <div>
    App Vue 3
    IP: {{ ip }}
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue'
import { useStore } from 'vuex'
import { StateMutation } from './store/mutations'

export default defineComponent({
  
  setup() {

    const store = useStore();

    const ip = computed(() => store.getters.ip)

    onMounted(() => {
      store.commit(StateMutation.SET_IP, '192.168.0.1')
      setTimeout(() => store.commit(StateMutation.SET_IP, '192.168.0.2'), 5000)
    })

    return {
      ip
    }

  }

})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>