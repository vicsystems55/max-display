<template>
  <dashboard-layout
    :pageName="'Payment Method(s)'"
    :settings="true"
    :activeSetting="5"
  >
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-header">
            <h4 class="card-title">Linked Payment Method(s)</h4>
          </div>
          <div class="card-body">

           
            <div class="verify-content">
              <div class="d-flex align-items-center">
                <span class="me-3 icon-circle bg-primary text-white"
                  ><i class="ri-mastercard-line"></i
                ></span>
                <div class="primary-number">
                  <h5 class="mb-0">MasterCard</h5>
                  <small>Debit Card *********9758</small>
                  <br />
                  <span class="text-success">Verified</span>
                </div>
              </div>
             <!-- <button class=" btn btn-outline-primary">Manage</button>-->
            </div>


          </div>
        </div>
      </div>
    </div>
    <add-card />
    <add-bank />
    <success />
  </dashboard-layout>
</template>

<script>
import DashboardLayout from "../../../components/layouts/DashboardLayout";
import AddBank from "../../../components/popup/AddBank.vue";
import AddCard from "../../../components/popup/AddCard.vue";
import Success from "../../../components/popup/Success.vue";
export default {
  components: { DashboardLayout, AddCard, Success, AddBank },
};
</script>
