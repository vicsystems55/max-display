<template>
  <div class="authincation section-padding">
    <div class="container h-100">
      <div class="row justify-content-center h-100 align-items-center">
        <div :class="colXl4 ? 'col-xl-4 col-md-5' : 'col-xl-5 col-md-6'">
          <div
            class="alert alert-success  fade show d-flex justify-content-between"
            role="alert"
            v-if="alert"
          >
            <span>Enter the verification token sent to your device to continue.</span>
            <span class="c-pointer" data-dismiss="alert">
              <i class="icofont-close-line"></i>
            </span>
          </div>
          <div class="mini-logo text-center my-4">
            <router-link to="/"
              ><img src="../../assets/images/logo.png" alt=""
            /></router-link>
            <h4 class="card-title mt-5">{{ title }}</h4>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthLayout",
  props: {
    title: String,
    colXl4: Boolean,
    alert: Boolean,
  },
};
</script>
