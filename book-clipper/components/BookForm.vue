<template>
  <validation-observer ref="observer" v-slot="{ handleSubmit, invalid }">
    <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="onReset">
      <validation-provider name="Title" rules="required|max:20" v-slot="{ invalid, errors }">
        <v-text-field
          v-model="form.title"
          :error-messages="errors"
          :counter="20"
          label="Title"
          data-vv-name="title"
        ></v-text-field>
      </validation-provider>

      <validation-provider name="URL" v-slot="{ invalid, errors }">
        <v-text-field
          v-model="form.url"
          label="URL"
          data-vv-name="url"
        ></v-text-field>
      </validation-provider>

      <validation-provider name="Tag" v-slot="{ invalid, errors }">
        <v-combobox
          v-model="form.tag"
          :items="tags.tag_items"
          :search-input.sync="tags.search"
          hide-selected
          label="Tag"
          multiple
          chips
        >
          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  No results matching "<strong>{{ tags.search }}</strong>". Press <kbd>enter</kbd> to create a new one
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-combobox>
      </validation-provider>

      <v-row justify="space-around">
        <validation-provider name="Book" rules="required" v-slot="{ invalid, errors }">
          <v-switch v-model="form.is_book" class="mx-2" label="Book" color="indigo"></v-switch>
        </validation-provider>
  
        <validation-provider name="e-Book" rules="required" v-slot="{ invalid, errors }">
          <v-switch v-model="form.is_ebook" class="mx-2" label="e-Book" color="indigo"></v-switch>
        </validation-provider>
      </v-row>

      <v-container fluid>
        <v-btn type="reset" class="ma-2" tile outlined color="warning">
          Reset
        </v-btn>
        <v-btn :disabled="invalid" type="submit" class="ma-2" tile outlined color="success">
          Submit
        </v-btn>
      </v-container>
    </form>
  </validation-observer>
</template>

<script>
  import axios from 'axios'

  export default {
    data () {
      return {
        tags: {
          // TODO: tag_items api?
          tag_items: ['Vue', 'Go', 'Ruby', 'AWS'],
          search: null,
        },
      };
    },
    props: [
      'form'
    ],
    methods: {
      onSubmit () {
        // TODO: 初回登録と更新でsubmit処理が異なる
        return axios
          .post("/Prod/books", {
            book: this.form
          })
          .then(response => {
            if (response.status === 200) {
              this.$store.dispatch('message/flashSuccessMessage', 'Book created !');
              this.$router.push('/books');
            } else {
              throw new Error('レスポンスエラー');
            }
          });
      },
      onReset () {
        this.form.title = '';
        this.form.url = '';
        this.form.tag = [];
        requestAnimationFrame(() => {
          this.$refs.observer.reset();
        });
      },
    },
  };
</script>