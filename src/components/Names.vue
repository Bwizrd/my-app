<template>
  <div>
    <h2>A List of Names</h2>
      {{ nameIsGreat }}
      <input
        v-model="name">
  </div>

</template>

<script>
  export default {

    name: 'Names',
    data: () => ({
      name: 'Paul',
      names: ['Paul', 'Andy', 'Stuart']
    }),
    computed: {
      nameIsGreat() {
        return this.name + ' is Great'
      }
    }
  }

</script>
