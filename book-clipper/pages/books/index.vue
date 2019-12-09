<template>
  <div>
    <h1>{{title}}</h1>
    
    <v-container fluid>
      <v-row dense>
        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="6"
        >
          <v-card>
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
                v-for="(tag, i) in item.tag"
                :key="i"
              >
                {{tag}}
              </v-chip>

              <v-spacer></v-spacer>

              <nuxt-link to="/books/edit" tag="span">
                <v-btn icon>
                  <v-icon>mdi-pencil-outline</v-icon>
                </v-btn>
              </nuxt-link>
    
              <v-dialog v-model="dialog" persistent max-width="290">
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
                    <v-btn color="error" text @click="dialog = false">Disagree</v-btn>
                    <nuxt-link v-bind:to="add.to" tag="span">
                      <v-btn color="success" text @click="dialog = true">Agree</v-btn>
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
        </v-col>
      </v-row>
    </v-container>
    
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
      items: [
        {
          title: "Nuxtjsビギナーズガイド",
          url: "https://www.amazon.co.jp/Nuxt-js%E3%83%93%E3%82%AE%E3%83%8A%E3%83%BC%E3%82%BA%E3%82%AC%E3%82%A4%E3%83%89%E2%80%95Vue-js-%E3%83%99%E3%83%BC%E3%82%B9%E3%81%AE%E3%83%95%E3%83%AC%E3%83%BC%E3%83%A0%E3%83%AF%E3%83%BC%E3%82%AF%E3%81%AB%E3%82%88%E3%82%8B%E3%82%B7%E3%83%B3%E3%82%B0%E3%83%AB%E3%83%9A%E3%83%BC%E3%82%B8%E3%82%A2%E3%83%97%E3%83%AA%E3%82%B1%E3%83%BC%E3%82%B7%E3%83%A7%E3%83%B3%E9%96%8B%E7%99%BA-%E8%8A%B1%E8%B0%B7-%E6%8B%93%E7%A3%A8/dp/4863542569/ref=sr_1_1?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&keywords=nuxtjs&qid=1575734082&sr=8-1",
          tag: ["Vue", "Nuxt"],
          is_book: true,
          is_ebook: false,
        },
        {
          title: "哲学的やーつ",
          url: "",
          tag: [],
          is_book: false,
          is_ebook: false,
        },
        {
          title: "Docker実践ガイド",
          url: "",
          tag: ["Docker"],
          is_book: false,
          is_ebook: true,
        },
        {
          title: "AWS SA教科書",
          url: "",
          tag: ["AWS", "資格"],
          is_book: true,
          is_ebook: true,
        }
      ],
      dialog: false,
      add: {
        to: "/books/new"
      }
    };
  }
};
</script>