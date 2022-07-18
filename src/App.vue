<template>
  <div class="app">
    <button @click="add">add</button>
    <p>count {{ store.state.count }}</p>
    <p>double {{ store.getters.double }}</p>
  </div>
</template>

<script setup>
import { useStore } from '@/vuex'

const store = useStore()

function add() {
  store.dispatch('asyncAddCount')
}
</script>

<style scoped>
.app {
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
button {
  width: 80px;
  height: 32px;
}
p {
  min-width: 76px;
  text-align: right;
  line-height: 22px;
  margin: 0 !important;
  margin-top: 22px !important;
}
</style>
