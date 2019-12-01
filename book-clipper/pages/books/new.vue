<template>
  <div>
    <h1>{{title}}</h1>
    <nuxt-link v-bind:to="back.to" >{{back.title}}</nuxt-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "MyBook-Add",
      back: {
        title: "Back",
        to: "/books"
      }
    }
  }
}
</script>