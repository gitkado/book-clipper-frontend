<template>
  <validation-observer ref="observer" v-slot="{ handleSubmit, valid }">
    <form @submit.prevent="handleSubmit(onSubmit)" @reset.prevent="onReset">

      <validation-provider name="Title" rules="required|max:20" v-slot="{ valid, errors }">
        <v-text-field
          v-model="title"
          :error-messages="errors"
          :counter="20"
          label="Title"
          data-vv-name="title"
        ></v-text-field>
      </validation-provider>

      <validation-provider name="URL" v-slot="{ valid, errors }">
        <v-text-field
          v-model="url"
          label="URL"
          data-vv-name="url"
        ></v-text-field>
      </validation-provider>

      <validation-provider name="Tag" v-slot="{ valid, errors }">
        <v-combobox
          v-model="tag"
          :items="tag_items"
          :search-input.sync="search"
          hide-selected
          label="Tag"
          multiple
          chips
        >
          <template v-slot:no-data>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>
                  No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-combobox>
      </validation-provider>

      <v-container fluid>
        <v-btn :disabled="!valid" type="submit" class="ma-2" tile outlined color="success">
          <v-icon left>mdi-pencil</v-icon> Create
        </v-btn>

        <v-btn type="reset" class="ma-2" tile outlined color="warning">
          <v-icon left>mdi-pencil</v-icon> Reset
        </v-btn>
      </v-container>

    </form>
  </validation-observer>
</template>

<script>
  export default {
    data: () => ({
      title: "",
      url: "",
      // 選択肢
      tag_items: ['Vue', 'Go', 'AWS'],
      // 選択済み
      tag: [],
      search: null,
    }),

    methods: {
      onSubmit () {
        alert('Form has been submitted!');
      },
      onReset () {
        this.title = '';
        this.url = '';
        this.tag = [];
        this.$refs.observer.reset();
      },
    },
  };
</script>