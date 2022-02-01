<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Payout Info" subtitle="Approve or deny a payout.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">User</b-breadcrumb-item>
          <b-breadcrumb-item active>Payout Info</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->




    <!-- Page Content -->
    <div class="content">

      <!-- Basic -->
      <base-block rounded title="Payout Info" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="6">
              <b>Identification</b><hr>
              <span style="white-space: nowrap"><b>Status: </b></span><span>Requested/Approved/Rejected</span><br>
              <span style="white-space: nowrap"><b>Initial Amount: </b></span><span>$100.00</span><br>
              <span style="white-space: nowrap"><b>Receiving amount: </b></span><span>$90.00</span><br>
              <span style="white-space: nowrap"><b>Requested by user: </b></span><a href="#">Andrew Smith</a><br>
              <span style="white-space: nowrap"><b>Requested by Email: </b></span><span>andrewsmith@gmail.com</span><br>
              <span style="white-space: nowrap"><b>Requested at: </b></span><span>28.12.2021 14:23:23</span><br>
              <span style="white-space: nowrap"><b>Reference: </b></span><span>152525</span><br>
              <span style="white-space: nowrap"><b>Method: </b></span><span>Card</span><br>
              <span style="white-space: nowrap"><b>Card last 4: </b></span><span>5829</span><br>

                <span style="white-space: nowrap"><b>Has received payouts before: </b></span><span>Yes / No</span><br>
                <span style="white-space: nowrap"><b>Total number received payouts: </b></span><span>5</span><br>
                <span style="white-space: nowrap"><b>Total revenue payouts: </b></span><span>$100.00</span><br>
                <span style="white-space: nowrap"><b>Available balance(for payout): </b></span><span>$100.00</span><br>
                <span style="white-space: nowrap"><b>Pending balance: </b></span><span>$40.00</span><br>

              <hr>
               <b-col sm="6" xl="6" style="float:right;">
                       <b-button variant="success" v-click-ripple>Approve Payout</b-button>
                </b-col>

               <b-col sm="6" xl="6">
                       <b-button variant="danger" v-click-ripple>Reject Payout</b-button>
                </b-col>

            </b-col>

            <b-col lg="6" xl="6">
                <b>Payout Funding</b><hr>
                <span style="white-space: nowrap"><b>Paid out: </b></span><span>Yes/No</span><br>
                <span style="white-space: nowrap"><b>Deposit at: </b></span><span>28.12.2021 14:23:23</span><br>
                <span style="white-space: nowrap"><b>Stripe Deposit ID: </b></span><span>deposit_1252163267</span><br>
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
