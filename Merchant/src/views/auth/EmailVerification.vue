<template>
  <auth-layout :title="'Verify your Email'">
    <div class="auth-form card">
      <div class="card-body">
        <form @submit.prevent="formSubmit" class="identity-upload">
          <div class="identity-content">
            <span class="icon"><i class="ri-mail-check-line"></i></span>
            <p>
              We sent a verification email to
              <strong class="text-dark">example@email.com</strong>. Click the
              link inside to get started!
            </p>
            <!--<router-link to="/">Go to Dashboard</router-link>-->
          </div>
        </form>
      </div>
      <div class="card-footer text-center">
        <router-link to="#">Resend Email</router-link>
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
      this.$router.push("/verify-step-2");
    },
  },
};
</script>
