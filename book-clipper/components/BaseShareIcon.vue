<template>
  <a v-if="item.url != ''" v-bind:href="item.url" target="_blank" style="text-decoration: none;">
    <v-btn icon>
      <v-icon>mdi-share</v-icon>
    </v-btn>
  </a>
  <v-btn v-else icon disabled class="ml-0">
    <v-icon>mdi-share-off</v-icon>
  </v-btn>
</template>

<script>
  export default {
    props: [
      'item'
    ]
  };
</script>