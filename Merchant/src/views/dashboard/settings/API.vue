<template>
  <dashboard-layout :pageName="'API'" :settings="true" :activeSetting="6">
    <div class="row">
      <div class="col-xxl-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Create API Key</h4>
          </div>
          <div class="card-body">
            <form @submit.prevent="" action="#">
              <div class="row g-3">
                <div class="col-xl-6 col-md-6">
                  <label class="form-label">Generate New Key</label>
                  <input
                    type="text"
                    name="usd_amount"
                    class="form-control"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div class="col-xl-6 col-md-6">
                  <label class="form-label">Confirm Passphrase</label>
                  <input
                    type="text"
                    name="usd_amount"
                    class="form-control"
                    placeholder="Re-enter Your Password"
                  />
                </div>
                <div class="col-auto">
                  <button class="btn btn-primary">Create API Key</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-xl-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Your API Keys</h4>
          </div>
          <div class="card-body">
            <div class="table-responsive api-table">
              <table class="table">
                <thead>
                  <tr>
                    <th>Key</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                    <td>
                      <div class="form-check form-switch">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          checked=""
                        />
                      </div>
                    </td>
                    <td>
                      <span><i class="ri-delete-bin-line"></i></span>
                    </td>
                  </tr>
                  <tr>


                  <tr>
                    <td>69e387f1-31c3-45ad-9c68-5a51e5e78b43</td>
                    <td>
                      <div class="form-check form-switch">
                        <input type="checkbox" class="form-check-input" />
                      </div>
                    </td>
                    <td>
                      <span><i class="ri-delete-bin-line"></i></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "../../../components/layouts/DashboardLayout";
export default {
  components: { DashboardLayout },
};
</script>
