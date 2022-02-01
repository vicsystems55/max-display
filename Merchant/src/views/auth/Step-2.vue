<template>
  <auth-layout :title="'Confirm by SMS code'" :alert="true">
    <div class="auth-form card">
      <div class="card-body">
        <p class="text-center mb-3">
          Enter the verification code sent to your phone ending in 60.
        </p>
        <form @submit.prevent="formSubmit" class="row g-3">
          <div class="col-12">
            <div class="input-group">
              <div class="input-group-prepend">
                <span class="input-group-text">
                  <i class="ri-smartphone-line"></i>
                </span>
              </div>
              <input
                type="text"
                class="form-control"
                placeholder="123456"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="text-center">
              <button type="submit" class="btn btn-primary btn-block">
                Submit
              </button>
            </div>
          </div>

        </form>
        <div class="new-account mt-3">
          <p>
            Didn't get a code?
            <router-link class="text-primary" to="otp-1">Resend</router-link>
          </p>
        </div>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import AuthLayout from "../../components/layouts/AuthLayouts";

export default {
  components: { AuthLayout },
  methods: {
    formSubmit() {
      this.$router.push("/merchantkyc");
    },
  },
};
</script>
