<template>
  <div>
    <h1>{{title}}</h1>
    <form-book :form="form" />
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
      form: {
        title: "",
        url: "",
        tag: [],
        is_book: false,
        is_ebook: false,
        tag_items: ['Vue', 'Go', 'Ruby', 'AWS'],
        search: null,
      },
      title: "MyBook-Add",
      back: {
        to: "/books"
      }
    };
  },
  components: {
    FormBook
  }
};
</script>