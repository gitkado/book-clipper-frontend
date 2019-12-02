<template>
  <div>
    <h1>{{title}}</h1>
    <form-book />
    <nuxt-link v-bind:to="back.to" >{{back.title}}</nuxt-link>
  </div>
</template>

<script>
import FormBook from "@/components/FormBook.vue"
export default {
  data () {
    return {
      title: "MyBook-Add",
      back: {
        title: "Back",
        to: "/books"
      }
    }
  },
  components: {
    FormBook
  }
}
</script>