<template>
  <v-container>
    <v-form>
      <v-card max-width="400" class="mx-auto pa-5">
        <v-alert v-if="errorMsg" type="error">{{errorMsg}}</v-alert>
        <v-card-title primary-title>
          <h3 class="mb-3">Sign in</h3>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="name"
            :rules="[() => !!name || 'This field is required']"
            :error-messages="errorMessages"
            label="User ID"
            placeholder="guest"
            clearable
            required
          ></v-text-field>
          <v-text-field
            v-model="passwd"
            :rules="[() => !!passwd || 'This field is required']"
            :error-messages="errorMessages"
            type="password"
            label="Password"
            clearable
            required
          ></v-text-field>
        </v-card-text>
        <v-layout justify-center mt-5>
          <v-btn color="info" @click="signin" :disabled="!name || !passwd">Signin</v-btn>
        </v-layout>
      </v-card>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      passwd: "",
      errorMessages: "",
      errorMsg: ""
    };
  },
  methods: {
    async signin() {
      this.errorMsg = ""
      let req = { id: this.name, password: this.passwd };
      try {
        let res = await this.$axios.$post("/api/login", req);
        console.log("token", res.token);
        if (res.success) {
          this.$store.commit("SET_TOKEN", res.token);
          this.$router.push("/");
        } else {
          this.errorMsg = "サインインできませんでした"
        }
      } catch (error) {
        this.errorMsg = error
      }
    }
  }
};
</script>

<style>
</style>
