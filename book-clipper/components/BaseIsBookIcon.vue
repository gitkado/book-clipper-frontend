<template>
  <v-icon v-if="is_book" class="ml-1">mdi-book-open-variant</v-icon>
</template>

<script>
  export default {
    props: [
      'is_book'
    ]
  };
</script>