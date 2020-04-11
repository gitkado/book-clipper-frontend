<template>
  <div>
    <v-card>
      <v-card-title class="font-weight-bold">{{title}}</v-card-title>
    </v-card>

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
  import FormBook from '@/components/FormBook.vue';
  export default {
    data () {
      return {
        title: 'MyBook-Edit',
        back: {
          to: '/books'
        },
        // TODO: データ取得APIをコールして値セットする
        form: {
          title: this.$route.params.title,
          url: this.$route.params.url,
          tag: this.$route.params.tag,
          is_book: this.$route.params.is_book,
          is_ebook: this.$route.params.is_ebook,
        }
      };
    },
    components: {
      FormBook
    }
  };
</script>