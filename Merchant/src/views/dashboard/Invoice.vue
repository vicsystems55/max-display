<template>
  <dashboard-layout :pageName="'Payment Links'">
    <div class="row">
      <div class="col-xl-3 col-sm-6">
        <div class="stat-widget d-flex align-items-center bg-white">
          <div class="widget-icon me-3 bg-primary">
            <span><i class="ri-file-copy-2-line"></i></span>
          </div>
          <div class="widget-content">
            <h3>483</h3>
            <p>Total Payment Links</p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6">
        <div class="stat-widget d-flex align-items-center bg-white">
          <div class="widget-icon me-3 bg-success">
            <span><i class="ri-file-list-3-line"></i></span>
          </div>
          <div class="widget-content">
            <h3>273</h3>
            <p>Paid Payment Links</p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6">
        <div class="stat-widget d-flex align-items-center bg-white">
          <div class="widget-icon me-3 bg-warning">
            <span><i class="ri-file-paper-line"></i></span>
          </div>
          <div class="widget-content">
            <h3>121</h3>
            <p>Unpaid Payment Links</p>
          </div>
        </div>
      </div>
      <div class="col-xl-3 col-sm-6">
        <div class="stat-widget d-flex align-items-center bg-white">
          <div class="widget-icon me-3 bg-danger">
            <span><i class="ri-file-paper-2-line"></i></span>
          </div>
          <div class="widget-content">
            <h3>89</h3>
            <p>Canceled Payment Links</p>
          </div>
        </div>
      </div>
      <div class="col-xl-12">
        <div class="card">
          <div class="card-header flex-row">
            <h4 class="card-title">Payment Links</h4>
            <router-link class="btn btn-primary" to="/create-invoice"
              ><span><i class="bi bi-plus"></i></span>Create Payment Link</router-link
            >
          </div>
          <div class="card-body">
            <div class="invoice-table">
              <div class="table-responsive">
                <table class="table">
                  <thead>
                    <tr>
                      <th>
                      </th>
                      <th>ID</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Created</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                          <a href="#" class=""><i class="ri-file-copy-fill"></i> Copy</a>
                      </td>
                      <td>7Fwp0IrXitpK</td>
                      <td>$254.00</td>
                      <td>
                        <span class="badge px-3 py-2 bg-danger">Canceled</span>
                      </td>
                      <td>January 21, 2022</td>
                    </tr>
                    <tr>
                      <td>
                          <a href="#" class=""><i class="ri-file-copy-fill"></i> Copy</a>
                      </td>
                      <td>7Fwp0IrXitpK</td>
                      <td>$254.00</td>
                      <td>
                        <span class="badge px-3 py-2 bg-success">Paid</span>
                      </td>
                      <td>January 21, 2022</td>
                    </tr>
                      <tr>
                      <td>
                          <a href="#" class=""><i class="ri-file-copy-fill"></i> Copy</a>
                      </td>
                      <td>7Fwp0IrXitpK</td>
                      <td>$254.00</td>
                      <td>
                        <span class="badge px-3 py-2 bg-success">Paid</span>
                      </td>
                      <td>January 21, 2022</td>
                    </tr>
                    <tr>
                      <td>
                          <a href="#" class=""><i class="ri-file-copy-fill"></i> Copy</a>
                      </td>
                      <td>7Fwp0IrXitpK</td>
                      <td>$254.00</td>
                      <td>
                        <span class="badge px-3 py-2 bg-warning">Due</span>
                      </td>
                      <td>January 21, 2022</td>
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
import DashboardLayout from "../../components/layouts/DashboardLayout";
export default {
  components: { DashboardLayout },
};
</script>
