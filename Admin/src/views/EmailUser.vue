<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Email User" subtitle="Email a user that's registered on the platform.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">CycoPay</b-breadcrumb-item>
          <b-breadcrumb-item active>Email User</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <base-block rounded title="Email Form">
        <b-form @submit.stop.prevent="onSubmit">
          <!-- Regular -->
          <h2 class="content-heading border-bottom mb-4 pb-2">Subject</h2>
          <b-row class="items-push">
            <b-col lg="8" xl="12">
              <b-form-group label-for="subject">
                <template #label>
                  Subject <span class="text-danger">*</span>
                </template>
                <b-form-input id="subject" name="subject" placeholder="Marketing title here..." v-model="$v.form.subject.$model" :state="$v.form.subject.$dirty ? !$v.form.subject.$error : null" aria-describedby="subject-feedback"></b-form-input>
                <b-form-invalid-feedback id="subject-feedback">
                  Your subject must consist of at least 8 characters
                </b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label-for="email">
                <template #label>
                  Email <span class="text-danger">*</span>
                </template>
                <b-form-input type="email" id="email" name="email" placeholder="User's email.." v-model="$v.form.email.$model" :state="$v.form.email.$dirty ? !$v.form.email.$error : null" aria-describedby="email-feedback"></b-form-input>
                <b-form-invalid-feedback id="username-feedback">
                  Please enter a valid email address
                </b-form-invalid-feedback>
              </b-form-group>

            </b-col>
          </b-row>
          <!-- END Regular -->

          <!-- Advanced -->
          <h2 class="content-heading border-bottom mb-4 pb-2">Body</h2>
          <b-row class="items-push">
            <b-col lg="8" xl="12">
              <b-form-group label-for="emailbody">
                <template #label>
                  Email Body <span class="text-danger">*</span>
                </template>
                <b-form-textarea id="emailbody" name="emailbody" rows="12" placeholder="<html> contents here" v-model="$v.form.emailbody.$model" :state="$v.form.emailbody.$dirty ? !$v.form.emailbody.$error : null" aria-describedby="emailbody-feedback"></b-form-textarea>
                <b-form-invalid-feedback id="emailbody-feedback">
                  Your email body must consist of at least 25 characters
                </b-form-invalid-feedback>
              </b-form-group>
            </b-col>
                      <b-row class="items-push">
            <b-col lg="7" offset-lg="4">
              <b-button type="submit" variant="alt-primary">Submit</b-button>
            </b-col>
          </b-row>
          </b-row>

          <!-- END Advanced -->

          <!-- Submit -->
          <!-- END Submit -->
        </b-form>
      </base-block>
    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
// Vuelidate, for more info and examples you can check out https://github.com/vuelidate/vuelidate
import { validationMixin } from 'vuelidate'
import { required, email, minLength} from 'vuelidate/lib/validators'

export default {
  mixins: [validationMixin],
  data () {
    return {
      form: {
        subject: null,
        emailbody: null,
        email: null,
      }
    }
  },
  validations: {
    form: {
      subject: {
        required,
        minLength: minLength(8)
      },
      email: {
        required,
        email
      },
      emailbody: {
        required,
        minLength: minLength(25)
      }
    }
  },
  methods: {
    onSubmit () {
      this.$v.form.$touch()

      if (this.$v.form.$anyError) {
        return
      }

      // Form submit logic
    }
  }
}
</script>
