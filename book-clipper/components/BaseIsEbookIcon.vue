<template>
  <v-icon v-if="is_ebook" class="ml-1">mdi-cloud-print-outline</v-icon>
</template>

<script>
  export default {
    props: [
      'is_ebook'
    ]
  };
</script>