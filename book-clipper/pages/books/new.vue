<template>
  <div>
    <page-title :title="title" />
    <book-form :form="form" />
    <back-button :back="back" />
  </div>
</template>

<script>
  import PageTitle from '@/components/ThePageTitle.vue';
  import BookForm from '@/components/BookForm.vue';
  import BackButton from '@/components/BaseBackButton.vue';

  export default {
    data () {
      return {
        title: 'MyBook-Add',
        back: {
          to: '/books'
        },
        form: {
          title: '',
          url: '',
          tag: [],
          is_book: false,
          is_ebook: false,
        }
      };
    },
    components: {
      PageTitle,
      BookForm,
      BackButton
    }
  };
</script>