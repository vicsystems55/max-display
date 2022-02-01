<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Payment Info" subtitle="Sensitive data is present. Manage this page carefully.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">User</b-breadcrumb-item>
          <b-breadcrumb-item active>Payment Info</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->




    <!-- Page Content -->
    <div class="content">

      <!-- Basic -->
      <base-block rounded title="Payment Info" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <b>Payment</b><hr>
              <span style="white-space: nowrap"><b>Status: </b></span><span>Successful</span><br>
              <span style="white-space: nowrap"><b>Risk Score: </b></span><span>4</span><br>
              <span style="white-space: nowrap"><b>Amount: </b></span><span>$100.00</span><br>
              <span style="white-space: nowrap"><b>Net profit: </b></span><span>$3.1</span><br>
              <span style="white-space: nowrap"><b>Identifier: </b></span><span>8F8w89152</span><br>
            
              <hr>
               <b-col sm="6" xl="6" style="float:center;">
                       <b-button variant="danger" v-click-ripple>Refund</b-button>
                </b-col>

            </b-col>

            <b-col lg="4" xl="4">
                <b>Transaction</b><hr>
                <span style="white-space: nowrap"><b>Early Fraud Warning: </b></span><span>Yes/No</span><br>
                <span style="white-space: nowrap"><b>Stripe Transaction ID: </b></span><span>pi_916092369</span><br>
                <span style="white-space: nowrap"><b>Stripe Charge ID: </b></span><span>ch_91296021</span><br>
                <span style="white-space: nowrap"><b>Platform Transaction ID: </b></span><span>8F8w89152</span><br>
                <span style="white-space: nowrap"><b>Processor Response: </b></span><span>Approved</span><br>
                <span style="white-space: nowrap"><b>Risk Score: </b></span><span>4</span><br>
                <span style="white-space: nowrap"><b>Date: </b></span><span>28 Jan 2022, 14:23:23</span><br>
                <span style="white-space: nowrap"><b>Payment Link ID: </b></span><a href="#">8F8w89152</a><br>
                <span style="white-space: nowrap"><b>3DS Response: </b></span><span>Pass</span><br>
                <span style="white-space: nowrap"><b>CVC Check: </b></span><span>Pass</span><br>
                <span style="white-space: nowrap"><b>Street/ZIP/AVS Check: </b></span><span>Pass</span><br>
                 <hr>
            </b-col>

            <b-col lg="4" xl="4">
                <b>Customer</b><hr>
                <span style="white-space: nowrap"><b>Customer Name: </b></span><span>Andrew Smith</span><br>
                <span style="white-space: nowrap"><b>Customer Email: </b></span><span>payeesmith@gmail.com</span><br>
                <span style="white-space: nowrap"><b>Address: </b></span><span>5th Ave</span><br>
                <span style="white-space: nowrap"><b>ZIP: </b></span><span>10010</span><br>
                <span style="white-space: nowrap"><b>Country: </b></span><span>United States</span><br>
                <span style="white-space: nowrap"><b>Phone Number: </b></span><span>+1 (914)-482-2323</span><br>
                <span style="white-space: nowrap"><b>Is Number VOIP: </b></span><span>Yes/No</span><br>
                <span style="white-space: nowrap"><b>IP Address: </b></span><span>127.0.0.1</span><br>
                <span style="white-space: nowrap"><b>Is IP Address Proxy: </b></span><span>Yes/No</span><br>
                <span style="white-space: nowrap"><b>Platform: </b></span><span>Chrome/Opera/Firefox</span><br>
                 <hr>
            </b-col>
            

             <b-col lg="4" xl="4">
                <b>Source</b><hr>
                <span style="white-space: nowrap"><b>Stripe Card ID: </b></span><span>pm_1KJeXWD604blleD6W6qeG5</span><br>
                <span style="white-space: nowrap"><b>Card Last 4: </b></span><span>0127</span><br>
                <span style="white-space: nowrap"><b>Expires: </b></span><span>08/25</span><br>
                <span style="white-space: nowrap"><b>Type(stripe): </b></span><span>Visa card</span><br>
                <span style="white-space: nowrap"><b>Issuer(stripe): </b></span><span>Bank of America</span><br>
                <span style="white-space: nowrap"><b>Origin: </b></span><span>United States</span><br>
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
