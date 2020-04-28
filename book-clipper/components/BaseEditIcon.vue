<template>
  <nuxt-link :to="{name: 'books-created_at', params: {created_at: item}}" tag="span">
    <v-btn icon>
      <v-icon>mdi-pencil-outline</v-icon>
    </v-btn>
  </nuxt-link>
</template>

<script>
  export default {
    props: [
      'item'
    ]
  };
</script>