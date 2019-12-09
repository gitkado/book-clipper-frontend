<template>
  <div>
    <h1>{{title}}</h1>
    <v-hover>
      <template v-slot="{ hover }">
        <nuxt-link v-bind:to="add.to" tag="span">
          <v-btn class="ma-2" fab dark small color="indigo" :elevation="hover ? 8 : 2">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        </nuxt-link>
      </template>
    </v-hover>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: 'WantBooks',
        add: {
          to: '/want_books/new'
        }
      };
    }
  };
</script>