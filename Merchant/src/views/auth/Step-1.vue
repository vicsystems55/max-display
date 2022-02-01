<template>
  <auth-layout :title="'Phone Verification'">
    <div class="auth-form card">
      <div class="card-body">
        <p class="text-center mb-3">
            Enter your phone number to continue.
        </p>
        <form @submit.prevent="formSubmit" class="row g-3">
          <div class="col-12">
            <label class="form-label">Your Phone Number</label>

  <vue-tel-input v-model="phone" v-bind="props"
  
  :autoFormat="true"
  
  
  
  
  
  
  
  
  
  
  
  
  ></vue-tel-input>

          </div>
          <div class="alert-text">
            <small
              >A confirmation code will be sent to your phone number.</small
            >
          </div>
          <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary btn-block">
              Send Code
            </button>
          </div>
        </form>

        <div class="new-account mt-3">
          <small>
            If your country is not displayed, then we do not support it for our platform's registration.
          </small>
        </div>
      </div>
    </div>
  </auth-layout>
</template>

<script>
import AuthLayout from "../../components/layouts/AuthLayouts";

export default {
  data() {
  return {
    phone: "",
props: {
    

      mode: "international",
      defaultCountry: "GB",
      //autoDefaultCountry: true,
      //disabledFetchingCountry: false,
      
      disabledFormatting: false,
      placeholder: "Enter a phone number",
      required: true,
      enabledCountryCode: true,
      enabledFlags: true,
      preferredCountries: [],
      onlyCountries: ["AU","AT","BE","BG","CZ","DK","EE","FI","FR","DE","HK","HU","IN","IE","IT","JP","LV","LT","LU","MY","MT","MX","NL","NO","PL","PT","RO","SG","SK","SI","ES","SE","CH","AE","GB"],
      ignoredCountries: ["US","BR"],
      autocomplete: "off",
      name: "telephone",
      maxLen: 25,
      wrapperClasses: "",
      inputClasses: "",
      
      dropdownOptions: {
        showFlags: true,
        width: "350px",
        showDialCodeInList: true,
      },
      inputOptions: {
        showDialCode: true
      }
          
},



    }
  },
  components: { AuthLayout },
    onUpdate: function(payload) {
    this.phoneDetails = payload;
  },
  methods: {
    formSubmit() {
      this.$router.push("/otp-2");
    },
  },
};
</script>
