<template>
  <v-dialog v-model="dialogs[i]" persistent max-width="290" :key="i">
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-delete-outline</v-icon>
      </v-btn>
    </template>

    <v-card>
      <v-card-title class="headline">Delete?</v-card-title>
      <v-card-text>{{item.title}}</v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="error" text @click="cancel(i)">Disagree</v-btn>
        <nuxt-link v-bind:to="add.to" tag="span">
          <v-btn color="success" text @click="agree(i)">Agree</v-btn>
        </nuxt-link>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    data () {
      return {
        dialogs: {},
      };
    },
    props: [
      'add',
      'item',
      'i'
    ],
    methods: {
      agree(i) {
        this.dialogs[i] = false;
      },
      cancel(i) {
        this.dialogs[i] = false;
      }
    }
  };
</script>