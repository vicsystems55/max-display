<template>
  <dashboard-layout :pageName="'Wallet'">
    <div class="row">
      <div class="col-xxl-6 col-xl-6 col-lg-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Balance Details</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-12">
                <div class="total-balance">
                  <p>Available Balance</p>
                  <h2>$10.00</h2>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="balance-stats active">
                  <p>Last Month</p>
                  <h3>$300.00</h3>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="balance-stats">
                  <p>Transactions</p>
                  <h3>$1,798.00</h3>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="balance-stats">
                  <p>Paid in fees</p>
                  <h3>$255.25</h3>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="balance-stats">
                  <p>Pending Balance</p>
                  <h3>$365,478.00</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">My Invoices</h4>
            <router-link to="#">See More</router-link>
          </div>
          <div class="card-body">
            <div class="bills-widget">
              <div
                class="bills-widget-content d-flex justify-content-between align-items-center active"
              >
                <div>
                  <p class="text-success">Success Payout #1</p>
                  <h4>$11.00</h4>
                </div>
                <div>
                  <router-link to="#" class="btn btn-primary"
                    >Download</router-link
                  >
                </div>
              </div>
              <div
                class="bills-widget-content d-flex justify-content-between align-items-center"
              >
                <div>
                  <p class="text-success">Success Payout #2</p>
                  <h4>$11.00</h4>
                </div>
                <div>
                  <router-link to="#" class="btn btn-primary"
                    >Download</router-link
                  >
                </div>
              </div>
              <div
                class="bills-widget-content d-flex justify-content-between align-items-center"
              >
                <div>
                  <p class="text-success">Success Payout #3</p>
                  <h4>$11.00</h4>
                </div>
                <div>
                  <router-link to="#" class="btn btn-primary"
                    >Download</router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Payouts</h4>
          </div>
          <div class="card-body">
            <div class="unpaid-content">
              <ul>
                <li>
                  <p class="mb-0">Payout Method</p>
                  <h5 class="mb-0">Debit Card</h5>
                </li>
                <li>
                  <p class="mb-0">Future Payouts</p>
                  <h5 class="mb-0">$25.00</h5>
                </li>
                <li>
                  <p class="mb-0">Available Payouts</p>
                  <h5 class="mb-0">$3.00</h5>
                </li>
                <li>
                  <p class="mb-0">Total Paid</p>
                  <h5 class="mb-0">$100.00</h5>
                </li>
                <li>
                  <p class="mb-0">Next payout</p>
                  <h5 class="mb-0">8 days from today</h5>
                </li>
                <li>
                  <p class="mb-0">Request</p>
                  <a href="/balance" class="btncustom1 btn-primary router-link-exact-active router-link-active" aria-current="page">Request Payout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class=" col-xxl-6 col-xl-6 col-lg-6">
        <div class="row">
          <div class="col-xxl-12 col-xl-12 col-lg-12">
            <div class="credit-card visa">
              <div class="type-brand">
                <h4>Debit Card</h4>
                <img src="../../assets/images/cc/visa.png" alt="" />
              </div>
              <div class="cc-number">
                <h6>****</h6>
                <h6>****</h6>
                <h6>****</h6>
                <h6>9875</h6>
              </div>
              <div class="cc-holder-exp">
                <h5>Andrew Smith</h5>
                
              </div>
              <div class="cc-info">
                <div class="row justify-content-between align-items-center">
                  <div class="col-5">
                    <div class="d-flex">
                      <p class="me-3">Status</p>
                      <p><strong>Active</strong></p>
                    </div>
                    <div class="d-flex">
                      <p class="me-3">Currency</p>
                      <p><strong>USD</strong></p>
                    </div>
                  </div>
                  <div class="col-xl-7">
                    <div class="d-flex justify-content-between">
                      <div class="ms-3">
                        <p>Credit Limit</p>
                        <p><strong>2000 USD</strong></p>
                      </div>
                      <div id="circle1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xxl-12 col-xl-12 col-lg-12">

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
  mounted() {
    const chart = document.querySelector("#line-chart");
    chart.style.height = "297px";
    chart.style.width = "100%";
  },
};
</script>
