<template>
  <!--begin::Wrapper-->
  <div class="bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
    <!--begin::Form-->
    <Form
      class="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
      novalidate="novalidate"
      @submit="onSubmitRegister"
      id="kt_login_signup_form"
      :validation-schema="registration"
    >
      <!--begin::Heading-->
      <div class="mb-10 text-center">
        <!--begin::Title-->
        <h1 class="text-dark mb-3">USD 50.00</h1>
        <!--end::Title-->

        <!--begin::Link-->
        <div class="text-gray-400 fw-bold fs-4">
          Powered by

          <router-link to="/" class="link-primary fw-bolder">
            CycoPay
          </router-link>
        </div>
        <!--end::Link-->
      </div>
      <!--end::Heading-->


      <!--begin::Separator-->
      <div class="d-flex align-items-center mb-10">
        <div class="border-bottom border-gray-300 mw-50 w-100"></div>
        <div class="border-bottom border-gray-300 mw-50 w-100"></div>
      </div>
      <!--end::Separator-->

      <!--begin::Input group-->
      <div class="row fv-row mb-7">
        <!--begin::Col-->
        <div class="col-xl-12">
          <label class="form-label fw-bolder text-dark fs-6">Card Information (use stripe elements v3)</label>
          <Field
            class="form-control form-control-lg form-control-solid"
            type="text"
            placeholder=""
            name="name"
            autocomplete="off"
          />
          <div class="fv-plugins-message-container">
            <div class="fv-help-block">
              <ErrorMessage name="name" />
            </div>
          </div>
        </div>
        <!--end::Col-->

        <!--begin::Col-->

        <!--end::Col-->
      </div>
      <!--end::Input group-->

      <!--begin::Input group-->

      <!--end::Input group-->

      <!--begin::Input group-->

      <!--end::Input group--->

      <!--begin::Input group-->


      <!--end::Input group-->


      <!--begin::Actions-->
      <div class="text-center">
        <button
          id="kt_sign_up_submit"
          ref="submitButton"
          type="submit"
          class="btn btn-lg btn-primary"
        >
          <span class="indicator-label"> Confirm Payment </span>
          <span class="indicator-progress">
            Please wait...
            <span
              class="spinner-border spinner-border-sm align-middle ms-2"
            ></span>
          </span>
        </button>
      </div>
      <!--end::Actions-->
    </Form>
    <!--end::Form-->
  </div>
  <!--end::Wrapper-->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";
import * as Yup from "yup";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Actions } from "@/store/enums/StoreEnums";
import Swal from "sweetalert2/dist/sweetalert2.min.js";

export default defineComponent({
  name: "payment",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  setup() {
    const store = useStore();
    const router = useRouter();

    const submitButton = ref<HTMLElement | null>(null);

    const registration = Yup.object().shape({
      name: Yup.string().required().label("Full Name"),
      address: Yup.string().required().label("Address Line"),
      zipcode: Yup.string().required().label("ZIP"),
      phonenumber: Yup.string().min(5).required().label("Phone Number"),
      email: Yup.string().min(4).required().email().label("Email"),

    });

    const onSubmitRegister = (values) => {
      // Clear existing errors
      store.dispatch(Actions.LOGOUT);

      // Activate indicator
      submitButton.value?.setAttribute("data-kt-indicator", "on");

      // Dummy delay
      setTimeout(() => {
        // Send login request
        store
          .dispatch(Actions.REGISTER, values)
          .then(() => {
            Swal.fire({
              text: "All is cool! Now you submit this form",
              icon: "success",
              buttonsStyling: false,
              confirmButtonText: "Ok, got it!",
              customClass: {
                confirmButton: "btn fw-bold btn-light-primary",
              },
            }).then(function () {
              // Go to page after successfully login
              router.push({ name: "enterotp" });
            });
          })
          .catch(() => {
            router.push({ name: "enterotp" });
          });

        submitButton.value?.removeAttribute("data-kt-indicator");
      }, 2000);
    };

    return {
      registration,
      onSubmitRegister,
      submitButton,
    };
  },
});
</script>
