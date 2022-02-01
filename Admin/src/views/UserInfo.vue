<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="User Info" subtitle="Sensitive data is present. Manage this page carefully.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">User</b-breadcrumb-item>
          <b-breadcrumb-item active>User Info</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->




    <!-- Page Content -->
    <div class="content">

      <base-block rounded title="Verification" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <b>ID Verification</b><hr>
                   <span style="white-space: nowrap"><b>Is ID Verified: </b></span><span>Yes/No/Pending</span><br>
              <span style="white-space: nowrap"><b>Has sent ID: </b></span><span>Yes</span><br>
              <span style="white-space: nowrap"><b>Is Required ID by Stripe: </b></span><span>Yes</span><br>
              <span style="white-space: nowrap"><b>Verification Status: </b></span><span>pending</span><br>
              <span style="white-space: nowrap"><b>Verified At: </b></span><span>28.12.2021/pending</span><br><hr>
              <button type="button" class="btn btn-primary" style="overflow: hidden; position: relative; z-index: 1;"><span class="click-ripple animate" style=""></span>Request ID Documents</button>
              <br><br>

            </b-col>

            <b-col lg="4" xl="4">
                <b>Front</b><hr>
            </b-col>

            <b-col lg="4" xl="4">
                <b>Back</b><hr>
            </b-col>

          </b-row>
        </b-form>
      </base-block>

      <!-- Basic -->
      <base-block rounded title="Account Information" content-full>
        <b-form>
          <b-row class="push">
            <b-col lg="4">
              <b>Account</b><hr>
              <span style="white-space: nowrap"><b>Status: </b></span><span>Active</span><br>
              <span style="white-space: nowrap"><b>Type: </b></span><span>Merchant</span><br>
              <span style="white-space: nowrap"><b>UID: </b></span><span>100</span><br>
              <span style="white-space: nowrap"><b>Identifier (Merchant ID): </b></span><span>82902</span><br>
              <span style="white-space: nowrap"><b>Is Phone Number VOIP: </b></span><span>Yes/No</span><br>
              <b-form-group label="Current Statement Descriptor" label-for="example-text-normal-sm">
                <b-form-input id="example-text-input-normal" placeholder="CYCOPAY* 82902"></b-form-input>
              </b-form-group>
              <hr>
              <span style="white-space: nowrap"><b>Stripe Account ID: </b></span><span>acct_zyu69fxmmb910</span><br>
              <span style="white-space: nowrap"><b>Stripe Account Card Payments: </b></span><span>Active / Restricted</span><br>
              <span style="white-space: nowrap"><b>Stripe Account Card Payouts: </b></span><span>Active / Restricted</span><br>
              <hr>
              <b-form-group label="Full Name" label-for="example-disabled-input">
                <b-form-input id="example-disabled-input" placeholder="Andrew Smith" disabled></b-form-input>
              </b-form-group>
            <b-form-group label="Email" label-for="example-disabled-input">
                <b-form-input id="example-disabled-input" placeholder="andrewsmith@gmail.com" disabled></b-form-input>
              </b-form-group>
                <b-form-group label="Address" label-for="example-disabled-input">
                <b-form-input id="example-disabled-input" placeholder="5th Avenue" disabled></b-form-input>
              </b-form-group>
              <b-form-group label="City" label-for="example-disabled-input">
                <b-form-input id="example-disabled-input" placeholder="London" disabled></b-form-input>
              </b-form-group>

              <b-form-group label="Phone Number" label-for="example-disabled-input">
                <b-form-input id="example-disabled-input" placeholder="+1 (914)-484-6214" disabled></b-form-input>
              </b-form-group>


              <b-form-group label="Country" label-for="example-disabled-input">
                <b-form-input id="example-disabled-input" placeholder="United Kingdom" disabled></b-form-input>
              </b-form-group>


            </b-col>

            <b-col lg="4" xl="4">
                <b>Card Data</b><hr>
                <span style="white-space: nowrap"><b>Card Linked: </b></span><span>Yes</span><br>
                <span style="white-space: nowrap"><b>Card last 4: </b></span><span>5479</span><br>
                <span style="white-space: nowrap"><b>Card Type: </b></span><span>Visa/Mastercard</span><br>
                <span style="white-space: nowrap"><b>Card Bin Info(stripe): </b></span><span>Visa Debit Classic | Great Britain</span><br>
                 <hr>
               <span style="white-space: nowrap"><b>Verified At: </b></span><span>28.12.2021</span><br>
                <span style="white-space: nowrap"><b>Registered At: </b></span><span>28.12.2021</span><br>
                <span style="white-space: nowrap"><b>Registered IP: </b></span><span>127.0.0.1</span><br>
                <span style="white-space: nowrap"><b>Is registered ip proxy: </b></span><span>Yes/No</span><br>
                <span style="white-space: nowrap"><b>Last Login IP: </b></span><span>149.0.0.1</span><br>
                <span style="white-space: nowrap"><b>Last Login Date: </b></span><span>27.JANUARY.2021 14:23:23</span><br>
                <span style="white-space: nowrap"><b>Last login ip proxy: </b></span><span>Yes/No</span><br>
                <hr>
                <span style="white-space: nowrap"><b>Total Received payments: </b></span><span>10</span><br>
                <span style="white-space: nowrap"><b>Total Received worth: </b></span><span>10$</span><br>
                <span style="white-space: nowrap"><b>Current Month Received payments: </b></span><span>5</span><br>
                <span style="white-space: nowrap"><b>Current Month Received worth: </b></span><span>5$</span><br>
                <hr>
                <span style="white-space: nowrap"><b>Payment Links Count: </b></span><span>25</span><br><hr>
                               <b-col sm="6" xl="4" style="float:right;">
                      <b-button variant="success" v-click-ripple>Unsuspend Account</b-button>
                </b-col>
                <b-col sm="6" xl="4">
                       <b-button variant="warning" v-click-ripple>Suspend Account</b-button>
                </b-col>
            </b-col>
            

                        <b-col lg="4" xl="4">
                <b>Sensitive level 3</b><hr>
                <span style="white-space: nowrap"><b>Payouts: </b></span><span>Active/Paused</span><br>
              <b-form-group label="Payouts Change Status" label-class="font-w600">
                <b-form-checkbox-group v-model="selectedCheckboxes" :options="optionsCheckboxesPayouts" switches stacked></b-form-checkbox-group>
              </b-form-group>
                <span style="white-space: nowrap"><b>Has received payouts before: </b></span><span>Yes / No</span><br>
                <span style="white-space: nowrap"><b>Total number received payouts: </b></span><span>5</span><br>
                <span style="white-space: nowrap"><b>Total revenue payouts: </b></span><span>$90.00</span><br>
                <span style="white-space: nowrap"><b>Available balance(for payout): </b></span><span>$0.00</span><br>
                <span style="white-space: nowrap"><b>Pending balance: </b></span><span>$40.00</span><br>
                <span style="white-space: nowrap"><b>Has requested payout: </b></span><span>Yes / No</span><br>
                          <b-col sm="6" xl="6" style="float:right;">
                   <b-button variant="info" v-click-ripple>Approve Payout</b-button>
                 </b-col>
                                           <b-col sm="6" xl="6">
                   <b-button variant="primary" v-click-ripple>Deny Payout</b-button>
                 </b-col>
                 <hr>
                <span style="white-space: nowrap"><b>API Status: </b></span><span>Enabled/Disabled</span><br>
              <b-form-group label="API Change Status" label-class="font-w600">
                <b-form-checkbox-group v-model="selectedCheckboxes" :options="optionsCheckboxes" switches stacked></b-form-checkbox-group>
              </b-form-group>
                <span style="white-space: nowrap"><b>API Key: </b></span><span>2938525-125152-152352</span><br>
                <span style="white-space: nowrap"><b>Last Login IP: </b></span><span>149.0.0.1</span><br>
                <span style="white-space: nowrap"><b>Last Login Date: </b></span><span>27.JANUARY.2021 14:23:23</span><br>
                <span style="white-space: nowrap"><b>Last login ip proxy: </b></span><span>Yes/No</span><br>
                <hr>
                <span style="white-space: nowrap"><b>Total Received payments: </b></span><span>10</span><br>
                <span style="white-space: nowrap"><b>Total Received worth: </b></span><span>10$</span><br>
                <span style="white-space: nowrap"><b>Current Month Received payments: </b></span><span>5</span><br>
                <span style="white-space: nowrap"><b>Current Month Received worth: </b></span><span>5$</span><br>
                
            </b-col>
          </b-row>



          <button type="button" class="btn btn-alt-primary" style="overflow: hidden; position: relative; z-index: 1;"><span class="click-ripple animate" style=""></span>Save</button>
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
