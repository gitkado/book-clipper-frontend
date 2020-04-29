<template>
  <transition name="fade-transition">
    <v-alert v-if="successMessage" type="success">
      {{ successMessage }}
    </v-alert>
  </transition>
</template>

<style scoped>
.v-alert {
  margin-bottom: 0px;
}
</style>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    ...mapState("message", ["successMessage"])
  },
};
</script>