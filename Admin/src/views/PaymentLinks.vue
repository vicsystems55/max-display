<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Payment Links" subtitle="View all payment links.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">CycoPay</b-breadcrumb-item>
          <b-breadcrumb-item active>Payment Links</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <b-row>
        <b-col xl="12">
          <!-- Hover Table -->
          <base-block rounded title="Payment Links">
            <template #options>
              <div class="block-options-item">
                <code></code>
              </div>
            </template>
            <b-table-simple responsive hover table-class="table-vcenter">
              <b-thead>
                <b-tr>
                  <b-th class="text-center" style="width: 50px;">ID</b-th>
                  <b-th class="text-center" style="width: 100px;">Amount</b-th>
                  <b-th class="text-center" style="width: 150px;">Status</b-th>
                  <b-th style="width: 200px;">Name</b-th>
                  <b-th>Email</b-th>
                  <b-th style="width: 200px;">Created at</b-th>
                  <b-th style="width: 200px;">Paid At</b-th>
                  <b-th class="text-center" style="width: 100px;">Actions</b-th>
                  <b-th class="text-center" style="width: 200px;">Quick Action</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="user in users.slice(0, 6)" :key="user.id">
                  <b-td class="text-center">
                    {{ user.paymentlinkid }}
                  </b-td>
                  <b-td class="text-center">
                    {{ user.amount }}
                  </b-td>
                  <b-td class="text-center">
                     {{ user.status }}
                  </b-td>

                  <b-td class="font-w600 font-size-sm">
                    <a :href="`${user.href}`">
                      {{ user.name }}
                    </a>
                  </b-td>

                  <b-td>
                     {{ user.email }}
                  </b-td>

                  
                  <b-td>
                     {{ user.createdat }}
                  </b-td>
                   <b-td>
                     {{ user.paidat }}
                  </b-td>

    
                  <b-td class="text-center">
                    <b-button-group>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-pencil-alt"></i>
                      </b-button>
                    </b-button-group>
                  </b-td>

                  <b-td class="text-center">
                    <b-button-group>
                      <b-button size="sm" variant="light">
                        <i class="fas fa-trash"></i>
                      </b-button>
                    </b-button-group>
                  </b-td>

                </b-tr>
              </b-tbody>
            </b-table-simple>
          </base-block>
          <!-- END Hover Table -->
        </b-col>

      </b-row>

             <div class="mb-3">
              <b-button-group size="sm" style="float:right;">
                <b-button variant="primary">Previous page</b-button>
                <b-button variant="secondary">1</b-button>
                <b-button variant="primary">Next page</b-button>
              </b-button-group>
            </div>

    </div>
    <!-- END Page Content -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      users: [
        {
          paymentlinkid: '8F8w89152',
          amount: '$'+'50.00',
          status: 'Due',
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          createdat: '28.01.2022 14:23:23',
          paidat: '',
          href: 'javascript:void(0)',
          rowVariant: 'secondary'
        },
        {
          paymentlinkid: '8F8w89152',
          amount: '$'+'50.00',
          status: 'Due',
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          createdat: '28.01.2022 14:23:23',
          paidat: '',
          href: 'javascript:void(0)',
          rowVariant: 'secondary'
        },
        {
          paymentlinkid: '8F8w89152',
          amount: '$'+'50.00',
          status: 'Paid',
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          createdat: '28.01.2022 14:23:23',
          paidat: '28.01.2022 15:23:23',
          href: 'javascript:void(0)',
          rowVariant: 'secondary'
        },
        {
          paymentlinkid: '8F8w89152',
          amount: '$'+'50.00',
          status: 'Due',
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          createdat: '28.01.2022 14:23:23',
          paidat: '',
          href: 'javascript:void(0)',
          rowVariant: 'secondary'
        },
        {
          paymentlinkid: '8F8w89152',
          amount: '$'+'50.00',
          status: 'Canceled',
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          createdat: '28.01.2022 14:23:23',
          paidat: '',
          href: 'javascript:void(0)',
          rowVariant: 'secondary'
        },
        {
          paymentlinkid: '8F8w89152',
          amount: '$'+'50.00',
          status: 'Due',
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          createdat: '28.01.2022 14:23:23',
          paidat: '',
          href: 'javascript:void(0)',
          rowVariant: 'secondary'
        },
        {
          paymentlinkid: '8F8w89152',
          amount: '$'+'50.00',
          status: 'Due',
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          createdat: '28.01.2022 14:23:23',
          paidat: '',
          href: 'javascript:void(0)',
          rowVariant: 'secondary'
        },
        {
          paymentlinkid: '8F8w89152',
          amount: '$'+'50.00',
          status: 'Due',
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          createdat: '28.01.2022 14:23:23',
          paidat: '',
          href: 'javascript:void(0)',
          rowVariant: 'secondary'
        },
        {
          paymentlinkid: '8F8w89152',
          amount: '$'+'50.00',
          status: 'Due',
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          createdat: '28.01.2022 14:23:23',
          paidat: '',
          href: 'javascript:void(0)',
          rowVariant: 'secondary'
        },
        {
          paymentlinkid: '8F8w89152',
          amount: '$'+'50.00',
          status: 'Due',
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          createdat: '28.01.2022 14:23:23',
          paidat: '',
          href: 'javascript:void(0)',
          rowVariant: 'secondary'
        },
        {
          paymentlinkid: '8F8w89152',
          amount: '$'+'50.00',
          status: 'Due',
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          createdat: '28.01.2022 14:23:23',
          paidat: '',
          href: 'javascript:void(0)',
          rowVariant: 'secondary'
        }
      ]
    }
  }
}
</script>