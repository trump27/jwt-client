<template>
  <v-layout>
    <v-flex class="text-center">
      <img
        src="/v.png"
        alt="Vuetify.js"
        class="mb-5"
      >
      <blockquote class="blockquote">
        &#8220;First, solve the problem. Then, write the code.&#8221;
        <footer>
          <small>
            <em>&mdash;John Johnson</em>
          </small>
        </footer>
      </blockquote>
      <v-btn @click="callapi">Call</v-btn>
      {{res}}
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  middleware: 'authenticated',
  data() {
    return {
      res: null
    }
  },
  methods: {
    async callapi() {
      this.res = await this.$axios.$get("/api/myinfo");
    }
  }
}
</script>
