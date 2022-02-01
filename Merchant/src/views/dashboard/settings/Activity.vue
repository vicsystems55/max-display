<template>
  <dashboard-layout :pageName="'Activity'" :settings="true" :activeSetting="4">
    <div class="row">
      <div class="col-xxl-12">


        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Web Sessions</h4>
            <small
              >Current active sessions</small
            >
          </div>
          <div class="card-body">
            <div class="table-responsive table-icon">
              <table class="table">
                <thead>
                  <tr>
                    <th>Signed In</th>
                    <th>Browser</th>
                    <th>IP Address</th>
                    <th>Near</th>
                    <th>Current</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1 day ago</td>
                    <td>Chrome (Windows)</td>
                    <td>250.364.239.254</td>
                    <td>Bangladesh, Dhaka</td>
                    <td>
                      <span
                        ><i class="ri-check-line text-success me-1"></i></span
                      ><span><i class="ri-close-line text-danger"></i></span>
                    </td>
                  </tr>
                  <tr>
                    <td>1 day ago</td>
                    <td>Chrome (Windows)</td>
                    <td>250.364.239.254</td>
                    <td>Bangladesh, Dhaka</td>
                    <td>
                      <span
                        ><i class="ri-check-line text-success me-1"></i></span
                      ><span><i class="ri-close-line text-danger"></i></span>
                    </td>
                  </tr>
                  <tr>
                    <td>1 day ago</td>
                    <td>Chrome (Windows)</td>
                    <td>250.364.239.254</td>
                    <td>Bangladesh, Dhaka</td>
                    <td>
                      <span
                        ><i class="ri-check-line text-success me-1"></i></span
                      ><span><i class="ri-close-line text-danger"></i></span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Account Activity</h4>
            <small>Latest activity on your account</small>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table">
                <thead>
                  <tr>
                    <th>Action</th>
                    <th>Source</th>
                    <th>IP Address</th>
                    <th>Location</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                   <tr>
                    <td>Request Payout</td>
                    <td>Web</td>
                    <td>157.119.239.254</td>
                    <td>Bangladesh</td>
                    <td><router-link to="#">25 Jan 2022, 15:35:25 GMT+1</router-link></td>
                  </tr>
                  <tr>
                    <td>Create Order</td>
                    <td>API</td>
                    <td>157.119.239.254</td>
                    <td>Bangladesh</td>
                    <td><router-link to="#">25 Jan 2022, 15:35:25 GMT+1</router-link></td>
                  </tr>
                  <tr>
                    <td>Sign In</td>
                    <td>Web</td>
                    <td>157.119.239.214</td>
                    <td>Bangladesh</td>
                    <td><router-link to="#">25 Jan 2022, 15:35:25 GMT+1</router-link></td>
                  </tr>
                  <tr>
                    <td>Sign Out</td>
                    <td>Web</td>
                    <td>157.119.239.214</td>
                    <td>Bangladesh</td>
                    <td><router-link to="#">25 Jan 2022, 15:35:25 GMT+1</router-link></td>
                  </tr>
                  <tr>
                    <td>Sign In</td>
                    <td>Web</td>
                    <td>157.119.239.214</td>
                    <td>Bangladesh</td>
                    <td><router-link to="#">25 Jan 2022, 15:35:25 GMT+1</router-link></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="card transparent">
          <div class="card-header">
            <h4 class="card-title">Close Account</h4>
          </div>
          <div class="card-body">
            <p>
              Create an account close request -
              <span class="text-danger">this cannot be undone</span>
            </p>
            <router-link to="#" class="btn btn-danger"
              >Close Account</router-link
            >
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
