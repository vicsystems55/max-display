<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Payment Link Info" subtitle="Sensitive data is present. Manage this page carefully.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">User</b-breadcrumb-item>
          <b-breadcrumb-item active>Payment Link Info</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->




    <!-- Page Content -->
    <div class="content">

      <!-- Basic -->
      <base-block rounded title="Payment Link Info" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="6">
              <b>Identification</b><hr>
              <span style="white-space: nowrap"><b>Status: </b></span><span>Due/Paid/Canceled</span><br>
              <span style="white-space: nowrap"><b>Amount: </b></span><span>$50.00</span><br>
              <span style="white-space: nowrap"><b>Created by user: </b></span><a href="#">Andrew Smith</a><br>
              <span style="white-space: nowrap"><b>Created by Email: </b></span><span>andrewsmith@gmail.com</span><br>
              <span style="white-space: nowrap"><b>Created at: </b></span><span>28.12.2021 14:23:23</span><br>
              <span style="white-space: nowrap"><b>Identifier: </b></span><span>8F8w89152</span><br>
              <span style="white-space: nowrap"><b>Description: </b></span><span>Personal payment to for service.</span><br>
              <hr>
               <b-col sm="6" xl="6">
                       <b-button variant="danger" v-click-ripple>Cancel Payment Link</b-button>
                </b-col>

            </b-col>

            <b-col lg="6" xl="6">
                <b>Payment</b><hr>
                <span style="white-space: nowrap"><b>Paid: </b></span><span>Yes/No</span><br>
                <span style="white-space: nowrap"><b>Paid at: </b></span><span>28.12.2021 14:23:23</span><br>
                <span style="white-space: nowrap"><b>Paid by name: </b></span><span>Andrew Smith</span><br>
                <span style="white-space: nowrap"><b>Paid by email: </b></span><span>payeesmith@gmail.com</span><br>
                <span style="white-space: nowrap"><b>Payment ID: </b></span><a href="#">8F8w89152</a><br>
                 <hr>
            </b-col>
            

          </b-row>



          
        </b-form>
      </base-block>
      <!-- END Basic -->

 


    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select' },
        { value: 1, text: 'Option #1' },
        { value: 2, text: 'Option #2' },
        { value: 3, text: 'Option #3' },
        { value: 4, text: 'Option #4' },
        { value: 5, text: 'Option #5' },
        { value: 6, text: 'Option #6' },
        { value: 7, text: 'Option #7' },
        { value: 8, text: 'Option #8' },
        { value: 9, text: 'Option #9' },
        { value: 10, text: 'Option #10' }
      ],
      selectedMultiple: [],
      optionsMultiple: [
        { value: 1, text: 'Option #1' },
        { value: 2, text: 'Option #2' },
        { value: 3, text: 'Option #3' },
        { value: 4, text: 'Option #4' },
        { value: 5, text: 'Option #5' },
        { value: 6, text: 'Option #6' },
        { value: 7, text: 'Option #7' },
        { value: 8, text: 'Option #8' },
        { value: 9, text: 'Option #9' },
        { value: 10, text: 'Option #10' }
      ],
      optionsCheckboxesPayouts: [
        { value: 1, text: 'Disabled/Enabled' }
      ],
      selectedCheckboxes: [],
      optionsCheckboxes: [
        { value: 1, text: 'Disabled/Enabled' }
      ],
      selectedRadios: [],
      optionsRadios: [
        { value: 1, text: 'Option 1' },
        { value: 2, text: 'Option 2' },
        { value: 3, text: 'Option 3' }
      ]
    }
  }
}
</script>
