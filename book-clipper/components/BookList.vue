<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="(item, i) in books" :key="i" sm=6 cols=12>
        <v-hover>
          <template v-slot="{ hover }">
            <v-card :elevation="hover ? 8 : 4">
              <v-card-title>
                <span class="mx-2">
                  {{item.title}}
                </span>
                <is-book-icon :is_book="item.is_book" />
                <is-ebook-icon :is_ebook="item.is_ebook" />
              </v-card-title>

              <v-card-actions>
                <tag-chip :tags="item.tag" />
                <v-spacer></v-spacer>
                <edit-icon :item="item.created_at" />
                <delete-icon :item="item" :i="i" />
                <share-icon :item="item" />
              </v-card-actions>
            </v-card>
          </template>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'

import IsBookIcon from '@/components/BaseIsBookIcon.vue';
import IsEbookIcon from '@/components/BaseIsEbookIcon.vue';
import TagChip from '@/components/BaseTagChip.vue';
import EditIcon from '@/components/BaseEditIcon.vue';
import DeleteIcon from '@/components/BaseDeleteIcon.vue';
import ShareIcon from '@/components/BaseShareIcon.vue';

export default {
  computed: {
    ...mapState('book', ['books'])
  },
  components: {
    IsBookIcon,
    IsEbookIcon,
    TagChip,
    EditIcon,
    DeleteIcon,
    ShareIcon
  }
};
</script>