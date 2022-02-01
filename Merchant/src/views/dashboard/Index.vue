<template>
  <dashboard-layout :pageName="'Your Dashboard'">
  
    <div class="row">
      <div class="col-xl-6 col-lg-6">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Current Statistics</h4>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="stat-widget d-flex align-items-center">
                  <div class="widget-icon me-3 bg-primary">
                    <span><i class="ri-wallet-line"></i></span>
                  </div>
                  <div class="widget-content">
                    <h3>$3.00</h3>
                    <p>Available Balance</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="stat-widget d-flex align-items-center">
                  <div class="widget-icon me-3 bg-secondary">
                    <span><i class="ri-wallet-2-line"></i></span>
                  </div>
                  <div class="widget-content">
                    <h3>$25.00</h3>
                    <p>Pending Balance</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="stat-widget d-flex align-items-center">
                  <div class="widget-icon me-3 bg-success">
                    <span><i class="ri-wallet-3-line"></i></span>
                  </div>
                  <div class="widget-content">
                    <h3>7%</h3>
                    <p>Charge Fee</p>
                  </div>
                </div>
              </div>
              <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                <div class="stat-widget d-flex align-items-center">
                  <div class="widget-icon me-3 bg-danger">
                    <span><i class="ri-wallet-3-line"></i></span>
                  </div>
                  <div class="widget-content">
                    <h3>25</h3>
                    <p>Number of Transactions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-6 col-xl-6 col-lg-6">
        <div id="user-activity" class="card" data-aos="fade-up">
          <div class="card-header">
            <h4 class="card-title">Transactions Volume</h4>
          </div>
          <div class="card-body">
            <div class="chartjs-size-monitor">
              <div class="chartjs-size-monitor-expand">
                <div class=""></div>
              </div>
              <div class="chartjs-size-monitor-shrink">
                <div class=""></div>
              </div>
            </div>
            <!-- <canvas id="activity"></canvas> -->
            <div id="activity">
              <activity-chart />
            </div>
          </div>
        </div>
      </div>
      <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-12">
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
      <div class="col-xxl-4 col-xl-4 col-lg-6 col-md-12">
        <div class="row">
          <div class="col-xl-12 col-lg-12">
            <div class="credit-card visa">
              <div class="type-brand">
                <h4>Debit Card</h4>
                <img src="../../assets/images/cc/mastercard.png" alt="" />
                <!-- <img src="../../assets/images/cc/visa.png" alt="" /> -->
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
            </div>
          </div>
          <div class="col-xl-12 col-lg-12">

        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Transactions History</h4>
            <a href="#">See more</a>
          </div>
          <div class="card-body">
            <perfect-scrollbar class="invoice-content" style="height:90px;">
              <ul>
                <li class="d-flex justify-content-between active">
                  <div class="d-flex align-items-center">
                    <div class="invoice-user-img me-3">
                      <img
                        src="../../assets/images/avatar/1.jpg"
                        alt=""
                        width="50"
                      />
                    </div>

                    <div class="invoice-info">
                      <h5 class="mb-0">Terry P. Camacho</h5>
                      <p>5 january 2021 at 10.15 pm</p>
                    </div>
                  </div>
                  <div class="text-end">
                    <h5 class="mb-2">+450.00</h5>
                    <span class=" text-white bg-success">Success</span>
                  </div>
                </li>
                <li class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="invoice-user-img me-3">
                      <img
                        src="../../assets/images/avatar/2.jpg"
                        alt=""
                        width="50"
                      />
                    </div>

                    <div class="invoice-info">
                      <h5 class="mb-0">John L. Foster</h5>
                      <p>5 january 2021 at 10.15 pm</p>
                    </div>
                  </div>
                  <div class="text-end">
                    <h5 class="mb-2">+450.00</h5>
                    <span class=" text-white bg-dark">Canceled</span>
                  </div>
                </li>
                <li class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="invoice-user-img me-3">
                      <img
                        src="../../assets/images/avatar/3.jpg"
                        alt=""
                        width="50"
                      />
                    </div>

                    <div class="invoice-info">
                      <h5 class="mb-0">John C. Adams</h5>
                      <p>5 january 2021 at 10.15 pm</p>
                    </div>
                  </div>
                  <div class="text-end">
                    <h5 class="mb-2">+450.00</h5>
                    <span class=" text-white bg-danger">Failed</span>
                  </div>
                </li>
                <li class="d-flex justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="invoice-user-img me-3">
                      <img
                        src="../../assets/images/avatar/4.jpg"
                        alt=""
                        width="50"
                      />
                    </div>

                    <div class="invoice-info">
                      <h5 class="mb-0">Weston P. Thomas</h5>
                      <p>5 january 2021 at 10.15 pm</p>
                    </div>
                  </div>
                  <div class="text-end">
                    <h5 class="mb-2">+450.00</h5>
                    <span class=" text-white bg-success">Paid</span>
                  </div>
                </li>
              </ul>
            </perfect-scrollbar>
          </div>
        </div>

            <!-- <div class="credit-card payoneer">
              <div class="type-brand">
                <h4>Debit Card</h4>
                <img src="../../assets/images/cc/payoneer.png" alt="" />
              </div>
              <div class="cc-number">
                <h6>1234</h6>
                <h6>5678</h6>
                <h6>7890</h6>
                <h6>9875</h6>
              </div>
              <div class="cc-holder-exp">
                <h5>Saiful Islam</h5>
                <div class="exp"><span>EXP:</span><strong>12/21</strong></div>
              </div>
            </div>-->
          </div>
        </div>
      </div>
      <div class=" col-xxl-4 col-xl-4 col-lg-6 col-md-12">
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



    </div>
  </dashboard-layout>
</template>

<script>
import ActivityChart from "../../components/charts/ActivityChart.vue";
import DashboardLayout from "../../components/layouts/DashboardLayout";
export default {
  components: { DashboardLayout, ActivityChart},
  mounted() {
    const chart = document.querySelector("#line-chart");
    chart.style.height = "245px";
    chart.style.width = "100%";
    const chart_ = document.querySelector("#doughnut-chart");
    chart_.style.height = "300px";
    // chart_.style.width = "90px";
  },
};
</script>
