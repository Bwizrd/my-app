<template>
  <div>
    <h2 v-text="title" />

    <ul>
      <li v-for="name in names" :key="name  ">
        {{ name }}
      </li>
    </ul>

      <input
        v-model="name">
        <h1>{{ name }}</h1>

        <button @click="onClick" >Add</button>
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
      name: ''
    }),
    computed: {
      names() {
        return this.$store.state.names
      }
    },
    methods: {
      onClick(){
        // this.$store.commit('addName', this.name);
        this.$store.dispatch('slowAddName', this.name);
      }
    }
  }

</script>
