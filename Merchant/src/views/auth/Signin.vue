<template>
  <auth-layout :title="'Sign in to CycoPay'">
    <div class="auth-form card">
      <div class="card-body">
        <form
          method="post"
          name="myform"
          class="signin_validate row g-3"
          @submit.prevent="formSubmit"
        >
          <div class="col-12">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder="hello@example.com"
              name="email"
            />
          </div>
          <div class="col-12">
            <label class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              name="password"
            />
          </div>
          <div class="col-6">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault"
                >Remember me</label
              >
            </div>
          </div>
          <div class="col-6 text-end">
            <router-link to="reset">Forgot Password?</router-link>
          </div>
          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">Sign in</button>
          </div>
        </form>
        <p class="mt-3 mb-0">
          Don't have an account?
          <router-link class="text-primary" to="signup">Sign up</router-link>
        </p>
      </div>
    </div>
    <div class="privacy-link">
      <router-link to="signup"
        >Can't find your account?</router-link
      >
      <br />
      <router-link to="signup">Privacy Policy</router-link>
    </div>
  </auth-layout>
</template>

<script>
import AuthLayout from "../../components/layouts/AuthLayouts";

export default {
  components: { AuthLayout },
  methods: {
    formSubmit() {
      this.$router.push("/otp-2");
    },
  },
};
</script>
