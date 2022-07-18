<template>
  <div class="app">
    <button @click="handleAddCount">add</button>
    <p>count {{ store.state.count }}</p>
    <p>double {{ store.getters.double }}</p>
  </div>
</template>

<script setup>
import { useStore } from '@/vuex'

const store = useStore()

function handleAddCount() {
  store.dispatch('asyncAddCount', 1)
}
</script>
