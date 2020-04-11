<template>
  <div>
    <page-title :title="title" />
    <book-list :items="items" :add="add" />
    <add-button :add="add" />
  </div>
</template>

<script>
  import axios from 'axios'

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
    components: {
      PageTitle,
      BookList,
      AddButton
    }
  };
</script>