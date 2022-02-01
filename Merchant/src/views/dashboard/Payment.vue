<template>
  <dashboard-layout :pageName="'Payments'">
    <div class="row">
      <div class="col-xl-8 col-lg-7">
        <div id="user-activity" class="card" data-aos="fade-up">
          <div class="card-header">
            <h4 class="card-title">Transactions Volume</h4>
          </div>
          <div class="card-body">
            <div class="tab-content" id="myTabContent">
              <div class="chartjs-size-monitor">
                <div class="chartjs-size-monitor-expand">
                  <div class=""></div>
                </div>
                <div class="chartjs-size-monitor-shrink">
                  <div class=""></div>
                </div>
              </div>
              <!-- <canvas id="activityBar"></canvas> -->
              <payments-chart />
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-lg-5">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Overview</h4>
          </div>
          <div class="card-body">
            <div class="unpaid-content">
              <ul>
                <li>
                  <p class="mb-0">Service</p>
                  <h5 class="mb-0">Cards</h5>
                </li>
                <li>
                  <p class="mb-0">Total card transactions</p>
                  <h5 class="mb-0">35</h5>
                </li>
                <li>
                  <p class="mb-0">Card transactions current month</p>
                  <h5 class="mb-0">25</h5>
                </li>
                <li>
                  <p class="mb-0">Total gain value</p>
                  <h5 class="mb-0">$400.00</h5>
                </li>
                <li>
                  <p class="mb-0">Total gain value current month</p>
                  <h5 class="mb-0">$350.00</h5>
                </li>
                <li>
                  <p class="mb-0">Net volume</p>
                  <h5 class="mb-0">$320.00</h5>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Payments</h4>
          </div>
          <div class="card-body">
            <div class="payments-content">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>
                        ID
                      </th>
                      <th>Email</th>
                      <th>Amount</th>
                      <th>Date</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        7Fwp0IrXitpK
                      </td>
                      <td>
                        andrew.smith@gmail.com
                      </td>
                      <td>$25.00</td>
                      <td>25 Jan, 2021</td>
                      <td>
                        <span class="badge px-3 py-2 bg-success">Successful</span>
                      </td>
                    </tr>
                    <tr>
                    <tr>
                      <td>
                        7Fwp0IrXitpK
                      </td>
                      <td>
                        andrew.smith@gmail.com
                      </td>
                      <td>$25.00</td>
                      <td>25 Jan, 2021</td>
                      <td>
                        <span class="badge px-3 py-2 bg-warning">Due</span>
                      </td>
                    </tr>
                    <tr>
                    <tr>
                      <td>
                        7Fwp0IrXitpK
                      </td>
                      <td>
                        andrew.smith@gmail.com
                      </td>
                      <td>$25.00</td>
                      <td>25 Jan, 2021</td>
                      <td>
                        <span class="badge px-3 py-2 bg-danger">Canceled</span>
                      </td>
                    </tr>
                   
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </dashboard-layout>
</template>

<script>
import PaymentsChart from "../../components/charts/PaymentsChart.vue";
import DashboardLayout from "../../components/layouts/DashboardLayout";
export default {
  components: { DashboardLayout, PaymentsChart },
  mounted() {
    const chart = document.querySelector("#bar-chart");
    chart.style.height = "290px";
    chart.style.width = "100%";
    // chart_.style.width = "90px";
  },
};
</script>
