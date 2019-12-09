<template>
  <div>
    <h1>{{title}}</h1>
    <form-book :form="form" />
    <v-hover>
      <template v-slot="{ hover }">
        <nuxt-link v-bind:to="back.to" tag="span">
          <v-btn class="mx-2" fab dark small color="teal" :elevation="hover ? 8 : 2">
            <v-icon dark>mdi-format-list-bulleted-square</v-icon>
          </v-btn>
        </nuxt-link>
      </template>
    </v-hover>
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