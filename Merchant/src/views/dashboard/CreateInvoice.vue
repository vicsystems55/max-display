<template>
  <dashboard-layout :pageName="'Create a Payment Link'">
    <div class="row">
      <div class="col-xl-12">
<div class="card">
   <div class="card-header">
      <h4 class="card-title">Create a Payment Link</h4>
      <div class="btn-group"></div>
   </div>
   <div class="card-body">
      <form class="invoice-form">
      <form>
         <div class="row">
            <div class="col-xl-3">
               <div class="mb-3"><label class="form-label">Name</label><input type="text" placeholder="Web Service" class="form-control"></div>
               <div class="mb-3"><label class="form-label">Amount (USD)</label><input type="number" placeholder="5.00" class="form-control"></div>
            </div>
            <div class="col-xl-3">
               <div class="mb-3"><label class="form-label">Description</label><input type="text" placeholder="Provided a web service." class="form-control"></div>
            </div>
         </div>
         <hr>
         <div class="row"></div>
         <div class="row">
            <div class="mb-3 col-xl-6"></div>
            <div class="col-1"><span></span></div>
         </div>
         <div class="add-reset d-flex justify-content-between"><button class="btn btn-outline-primary"><span><i class="ri-close-line"></i></span>Empty Fields</button><button class="btn btn-primary"><span><i class="bi bi-plus"></i></span>Create</button></div>
      </form>
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
