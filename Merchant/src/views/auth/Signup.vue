<template>
  <auth-layout :title="'Create your account'">
    <div class="auth-form card">
      <div class="card-body">
        <form
          method="post"
          name="myform"
          class="signin_validate row g-3"
          @submit.prevent="formSubmit"
        >
          <div class="col-12">
            <label class="form-label">Full Name</label>
            <input
              type="text"
              class="form-control"
              placeholder=""
              name="name"
            />
          </div>
          <div class="col-12 ">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              placeholder=""
              name="email"
            />
          </div>
          <div class="col-12">
            <label class="form-label">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder=""
              name="password"
            />
          </div>
                          <div class="col-xxl-6 col-xl-6 col-lg-6">
                  <label class="form-label">Country </label>
                  <select class="form-select" name="country">
                  
                    <option value="">Select</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Belgium">Belgium</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Cyprus">Cyprus</option>
<option value="Czech Republic">Czech Republic</option>
<option value="Denmark">Denmark</option>
<option value="Estonia">Estonia</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="Germany">Germany</option>
<option value="Greece">Greece</option>
<option value="Hong Kong">Hong Kong</option>
<option value="Hungary">Hungary</option>
<option value="India">India</option>
<option value="Ireland">Ireland</option>
<option value="Italy">Italy</option>
<option value="Japan">Japan</option>
<option value="Latvia">Latvia</option>
<option value="Lithuania">Lithuania</option>
<option value="Luxembourg">Luxembourg</option>
<option value="Malaysia">Malaysia</option>
<option value="Malta">Malta</option>
<option value="Mexico">Mexico</option>
<option value="Netherlands">Netherlands</option>
<option value="New Zealand">New Zealand</option>
<option value="Norway">Norway</option>
<option value="Poland">Poland</option>
<option value="Portugal">Portugal</option>
<option value="Romania">Romania</option>
<option value="Singapore">Singapore</option>
<option value="Slovakia">Slovakia</option>
<option value="Slovenia">Slovenia</option>
<option value="Spain">Spain</option>
<option value="Sweden">Sweden</option>
<option value="Switzerland">Switzerland</option>
<option value="United Arab Emirates">United Arab Emirates</option>
<option value="United Kingdom">United Kingdom</option>

                  </select>
                </div>
          <div class="col-12">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                I certify that I will comply with the
                <a href="#" class="text-primary">User Agreement</a> and
                <a href="#" class="text-primary">Terms of Service</a>.
              </label>
            </div>
          </div>

          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Create an account with us
            </button>
          </div>
        </form>
        <div class="text-center">
          <p class="mt-3 mb-0">
            <router-link class="text-primary" to="signin">Sign in</router-link>
            to your account
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
      this.$router.push("/verify-email");
    },
  },
};
</script>
