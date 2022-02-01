<template>
  <auth-layout :title="'Verify Your ID'">
    <div class="auth-form card">
      <div class="card-body">
        <p><b>Upload 2 photos: 1 photo of the front of your National ID and 1 photo of the back of your National ID.</b></p>
<form>
  <div class="form-group">
    <label for="exampleFormControlFile1"><b>Front: </b></label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
    <hr>
    <label for="exampleFormControlFile2"><b>Back: </b></label>
    <input type="file" class="form-control-file" id="exampleFormControlFile1">
  </div>
  <hr>
            <div class="d-grid gap-2">
            <button type="submit" class="btn btn-primary">
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
      this.$router.push("/submitid");
    },
  },
};
</script>
