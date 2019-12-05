<template>
  <div>
    <h1>{{title}}</h1>
    <form-book />
    <nuxt-link v-bind:to="back.to" tag="span">
      <v-btn class="mx-2" fab dark small color="teal">
        <v-icon dark>mdi-format-list-bulleted-square</v-icon>
      </v-btn>
    </nuxt-link>
  </div>
</template>

<script>
import FormBook from "@/components/FormBook.vue";
export default {
  data () {
    return {
      title: "WantBook-Add",
      back: {
        to: "/want_books"
      }
    };
  },
  components: {
    FormBook
  }
};
</script>