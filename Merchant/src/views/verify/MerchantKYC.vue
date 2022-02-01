<template>
  <auth-layout :title="'Verify Your Account'">
    <div class="auth-form card">
         
      <div class="card-body">
         <p>To be able to approve your account automatically we need additional information.</p>
        <form
          method="post"
          name="myform"
          class="signin_validate row g-3"
          @submit.prevent="formSubmit"
        >
          <div class="col-6">
            <label class="form-label">Full Name</label>
            <input
              type="text"
              class="form-control"
              placeholder=""
              name="name"
            />
          </div>

                     <div class="col-6 ">
            <label class="form-label">Date of Birth</label>
            <input
              type="text"
              class="form-control"
              placeholder="dd/mm/yyyy"
              name="dob"
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



           <div class="col-6 ">
            <label class="form-label">Address</label>
            <input
              type="text"
              class="form-control"
              placeholder=""
              name="address"
            />
          </div>

           <div class="col-6 ">
            <label class="form-label">City</label>
            <input
              type="text"
              class="form-control"
              placeholder=""
              name="city"
            />
          </div>

           <div class="col-6 ">
            <label class="form-label">State (optional)</label>
            <input
              type="text"
              class="form-control"
              placeholder=""
              name="state"
            />
          </div>


           <div class="col-6 ">
            <label class="form-label">Postal Code</label>
            <input
              type="text"
              class="form-control"
              placeholder=""
              name="zipcode"
            />
          </div>





           <div class="col-6 ">
              <label class="form-label">Business Type</label>
<select class="form-select" aria-label="Individual">
  <option selected>Individual</option>
</select>
          </div>


           <div class="col-6 ">
              <label class="form-label">Business URL</label>
<div class="input-group flex-nowrap">
  <input type="text" name="businessurl" class="form-control" placeholder="" aria-label="businessurl" aria-describedby="addon-wrapping">
</div>
          </div>

                     <div class="col-12">
              <label class="form-label">Business Description</label>
<div class="form-floating">
  <textarea class="form-control" placeholder="Write a description of your business." id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Write a description of your business</label>
</div>
          </div>





          <div class="col-6">
            <label class="form-label">Phone Number</label>

  <vue-tel-input v-model="phone" v-bind="props"
  :autoFormat="true"
  ></vue-tel-input>
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
              <label class="form-label">Payout Method</label>
<div class="form-floating">
  <textarea class="form-control" placeholder="Write a description of your business." id="floatingTextarea2" style="height: 50px;"></textarea>
  <label for="floatingTextarea2">Add stripe elements here.</label>
  <p><u>We only accept Visa or MasterCard Debit Cards.</u> </p>
</div>
          </div>

          <div class="col-12">
            <div class="form-check form-switch">
              <input
                class="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                I certify that I have read and agree to the
                <a href="#" class="text-primary">User Agreement</a> and
                <a href="#" class="text-primary">Terms of Service</a>.
              </label>
            </div>
          </div>

          <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
              Verify me
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
      this.$router.push("/");
    },
  },
};
</script>
