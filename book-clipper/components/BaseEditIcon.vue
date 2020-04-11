<template>
  <nuxt-link :to="{name: 'books-title', params: item }" tag="span">
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