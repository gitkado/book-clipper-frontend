<template>
  <span>
    <v-chip class="mx-1" v-if="tags.length > 0" v-for="tag in tags" :key="tag">
      {{tag}}
    </v-chip>
  </span>
</template>

<script>
  export default {
    props: [
      'tags'
    ]
  };
</script>