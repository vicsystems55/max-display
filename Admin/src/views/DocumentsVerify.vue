<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="User Info" subtitle="Sensitive data is present. Manage this page carefully.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">CycoPay</b-breadcrumb-item>
          <b-breadcrumb-item active>Document Info</b-breadcrumb-item>
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
              <span style="white-space: nowrap"><b>Name: </b></span><a href="#">Andrew Smith</a><br>
              <span style="white-space: nowrap"><b>Email: </b></span><span>andrew@gmail.com</span><br>
              <span style="white-space: nowrap"><b>Is ID Verified: </b></span><span>Yes/No/Pending</span><br>
              <span style="white-space: nowrap"><b>Has sent ID: </b></span><span>Yes</span><br>
              <span style="white-space: nowrap"><b>Is Required ID by Stripe: </b></span><span>Yes</span><br>
              <span style="white-space: nowrap"><b>Verification Status: </b></span><span>pending</span><br>
              <span style="white-space: nowrap"><b>Verified At: </b></span><span>28.12.2021/pending</span><br>
              <span style="white-space: nowrap"><b>Reason: </b></span><span>id document name mismatch</span><br><hr>
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
