<template>
  <div>
    <h1>{{title}}</h1>

    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          sm=6
          cols=12
        >
          <v-hover>
            <template v-slot="{ hover }">
              <v-card :elevation="hover ? 8 : 4">
                <v-card-title>
                  <span class="mx-2">
                    {{item.title}}
                  </span>
                  <v-icon v-if="item.is_book" class="ml-1">mdi-book-open-variant</v-icon>
                  <v-icon v-if="item.is_ebook" class="ml-1">mdi-cloud-print-outline</v-icon>
                </v-card-title>
    
                <v-card-actions>
                  <v-chip
                    class="mx-1"
                    v-if="item.tag.length > 0"
                    v-for="tag in item.tag"
                    :key="tag"
                  >
                    {{tag}}
                  </v-chip>
    
                  <v-spacer></v-spacer>

                  <nuxt-link :to="{name: 'books-title', params: item }" tag="span">
                    <v-btn icon>
                      <v-icon>mdi-pencil-outline</v-icon>
                    </v-btn>
                  </nuxt-link>

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

                  <a v-if="item.url != ''" v-bind:href="item.url" target="_blank" style="text-decoration: none;">
                    <v-btn icon>
                      <v-icon>mdi-share</v-icon>
                    </v-btn>
                  </a>
                  <v-btn v-else icon disabled class="ml-0">
                    <v-icon>mdi-share-off</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>

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
  import axios from 'axios'

  export default {
    data () {
      return {
        title: 'MyBooks',
        add: {
          to: '/books/new'
        },
        dialogs: {},
        items: []
      };
    },
    asyncData ({ params }) {
      return axios
        .get("/Prod/books")
        .then((response) => {
            return { items: response.data }
        })
    },
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