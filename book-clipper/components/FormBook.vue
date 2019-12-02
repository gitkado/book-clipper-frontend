<template>
  <form>
    <v-text-field
      v-validate="'required|max:10'"
      v-model="title"
      :counter="10"
      label="Title"
      data-vv-name="title"
      required
    ></v-text-field>

    <v-text-field
      v-validate=""
      v-model="url"
      :counter="10"
      label="URL"
      data-vv-name="url"
      required
    ></v-text-field>

    <v-combobox
      v-model="tags"
      :items="tag_items"
      :search-input.sync="search"
      hide-selected
      hint="Maximum of 5 tags"
      label="Tags"
      multiple
      persistent-hint
      small-chips
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

    <v-container fluid>
      <v-btn @click="submit">submit</v-btn>
      <v-btn @click="clear">clear</v-btn>
    </v-container>
  </form>
</template>

<script>
  export default {
    data: () => ({
      // 選択肢
      tag_items: ['Vue', 'Go', 'AWS'],
      // 選択済み
      // tags: [''],
      search: null,
    }),

    watch: {
      model (val) {
        if (val.length > 5) {
          this.$nextTick(() => this.model.pop())
        }
      },
    },
  }
</script>