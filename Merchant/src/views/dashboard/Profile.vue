<template>
  <dashboard-layout :pageName="'Profile'">
    <div class="row">
      <div class="col-xxl-6 col-xl-6 col-lg-6">
        <div class="card welcome-profile">
          <div class="card-body">
            <h4>Welcome, Andrew Smith!</h4>
            <p>
               Follow your To Do List to receive full access to your merchant account.
            </p>
            <ul>
              <li>
                <a href="#"
                  ><span class="verified"><i class="ri-check-line"></i></span
                  >Verify account</a
                >
              </li>
              <li>
                <a href="#"
                  ><span class="not-verified"
                    ><i class="ri-shield-check-line"></i></span
                  >Two-factor authentication (2FA)</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xxl-6 col-xl-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">VERIFY &amp; UPGRADE</h4>
          </div>
          <div class="card-body">
            <h5>
              Account Status: <span class="text-warning"
                >Unverified <i class="icofont-warning"></i
              ></span>
            </h5>
            <p>
              Your account is unverified. Get verified now to enable merchant payments & payouts.
            </p>
            <a href="#" class="btn btn-primary">Get Verified</a>
                        <br><br>
                        <a href="#">Learn more<i class="ri-arrow-right-s-line"></i></a>
          </div>
        </div>
      </div>

      <div class="col-xxl-12">
        <div class="card">
          <div class="card-header flex-row">
            <h4 class="card-title">Information</h4>
            <router-link class="btn btn-primary" to="/settings-profile"
              >View</router-link
            >
          </div>
          <div class="card-body">
            <form class="row">
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div class="user-info">
                  <span>USER ID</span>
                  <h4>818778</h4>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div class="user-info">
                  <span>EMAIL ADDRESS</span>
                  <h4>email@example.com</h4>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div class="user-info">
                  <span>COUNTRY OF RESIDENCE</span>
                  <h4>Bangladesh</h4>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div class="user-info">
                  <span>JOINED SINCE</span>
                  <h4>20/10/2020</h4>
                </div>
              </div>
              <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <div class="user-info">
                  <span>TYPE</span>
                  <h4>Personal</h4>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "../../components/layouts/DashboardLayout";
export default {
  components: { DashboardLayout },
};
</script>
