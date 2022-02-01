<template>
  <auth-layout :title="'Reset your password'" :colXl4="true">
    <div class="auth-form card">
      <div class="card-body">
        <form @submit.prevent="formSubmit" class="row g-3">
          <div class="col-12">
            <label class="form-label">Enter Email</label>

            <input
              type="email"
              class="form-control"
              placeholder=""
            />
          </div>
          <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary btn-block">
              Submit
            </button>
          </div>
        </form>
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
      this.$router.push("/");
    },
  },
};
</script>
