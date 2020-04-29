<template>
  <v-hover>
    <template v-slot="{ hover }">
      <nuxt-link v-bind:to="back.to" tag="span">
        <v-btn class="mx-2" fab dark small color="teal" :elevation="hover ? 8 : 2">
          <v-icon dark>mdi-format-list-bulleted-square</v-icon>
        </v-btn>
      </nuxt-link>
    </template>
  </v-hover>
</template>

<script>
  export default {
    props: [
      'back'
    ]
  };
</script>