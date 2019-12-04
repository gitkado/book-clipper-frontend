<template>
  <div>
    <h1>{{title}}</h1>
    <nuxt-link v-bind:to="add.to" tag="span">
      <v-btn class="ma-2" fab dark small color="indigo">
        <v-icon dark>mdi-plus</v-icon>
      </v-btn>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: "MyBooks",
      add: {
        to: "/books/new"
      }
    };
  }
};
</script>