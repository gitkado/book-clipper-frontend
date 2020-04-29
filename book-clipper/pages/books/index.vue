<template>
  <div>
    <page-title :title="title" />
    <book-list />
    <add-button :add="add" />
  </div>
</template>

<script>
import PageTitle from '@/components/ThePageTitle.vue';
import BookList from '@/components/BookList.vue';
import AddButton from '@/components/BaseAddButton.vue';

export default {
  data () {
    return {
      title: 'MyBooks',
      add: {
        to: '/books/new'
      },
    };
  },
  asyncData ({ store }) {
    store.dispatch('book/getBooks');
  },
  components: {
    PageTitle,
    BookList,
    AddButton
  }
};
</script>