<template>
  <div>
    <h2 v-text="title" />
      {{ nameIsGreat }}
      <input
        v-model="name">
  </div>

</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: 'Default Title',
      }
    },
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
