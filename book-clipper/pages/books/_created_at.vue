<template>
  <div>
    <page-title :title="title" />
    <book-form :form="form" />
    <back-button :back="back" />
  </div>
</template>

<script>
import axios from 'axios'

import PageTitle from '@/components/ThePageTitle.vue';
import BookForm from '@/components/BookForm.vue';
import BackButton from '@/components/BaseBackButton.vue';

export default {
  data () {
    return {
      title: 'MyBook-Edit',
      back: {
        to: '/books'
      },
      form: {}
    };
  },
  asyncData ({ params }) {
    return axios
      .get(`/Prod/books/${params.created_at}`)
      .then((response) => {
        return { form: response.data }
      })
  },
  components: {
    PageTitle,
    BookForm,
    BackButton
  }
};
</script>