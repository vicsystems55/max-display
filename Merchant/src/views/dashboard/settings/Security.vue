<template>
  <dashboard-layout :pageName="'Security'" :settings="true" :activeSetting="3">
    <div class="row">

      <div class="col-xxl-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Identity verification</h4>
          </div>
          <div class="card-body">
            <div class="verify-content">
              <div class="d-flex align-items-center">
                <span class="me-3 icon-circle bg-primary text-white"
                  ><i class="ri-profile-fill"></i></span>
                <div class="primary-number">
                  <p class="mb-0"></p>
                  <small>ID Document</small>
                  <br />
                  <span class="text-success">Verified</span>
                </div>
              </div>
              <b-button
                v-b-modal.idCardModal
                class="btn btn-primary"
                variant="primary"
              >
                Manage
              </b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <upload />
    <success />
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import Upload from "../../../components/popup/Upload";
import Success from "../../../components/popup/Success.vue";
export default {
  components: { DashboardLayout, Upload, Success },
};
</script>
