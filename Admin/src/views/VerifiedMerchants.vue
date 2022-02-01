<template>
  <div>
    <!-- Hero -->
    <base-page-heading title="Verified Merchants" subtitle="View all Verified Merchants Information.">
      <template #extra>
        <b-breadcrumb class="breadcrumb-alt">
          <b-breadcrumb-item href="javascript:void(0)">CycoPay</b-breadcrumb-item>
          <b-breadcrumb-item active>Verified Merchants</b-breadcrumb-item>
        </b-breadcrumb>
      </template>
    </base-page-heading>
    <!-- END Hero -->

    <!-- Page Content -->
    <div class="content">
      <b-row>
        <b-col xl="12">
          <!-- Hover Table -->
          <base-block rounded title="VERIFIED MERCHANTS TABLE">
            <template #options>
              <div class="block-options-item">
                <code></code>
              </div>
            </template>
            <b-table-simple responsive hover table-class="table-vcenter">
              <b-thead>
                <b-tr>
                  <b-th class="text-center" style="width: 50px;">UID</b-th>
                  <b-th class="text-center" style="width: 150px;">ID Required</b-th>
                  <b-th class="text-center" style="width: 250px;">ID Documents Sent</b-th>
                  <b-th class="text-center" style="width: 150px;">ID Verified</b-th>
                  <b-th style="width: 200px;">Name</b-th>
                  <b-th>Email</b-th>
                  <b-th style="width: 200px;">Phone Number</b-th>
                  <b-th style="width: 250px;">Verified at</b-th>
                  <b-th class="text-center" style="width: 100px;">Actions</b-th>
                </b-tr>
              </b-thead>
              <b-tbody>
                <b-tr v-for="user in users.slice(0, 6)" :key="user.id">
                  <b-td class="text-center">
                    {{ user.id }}
                  </b-td>
                  <b-td class="text-center">
                    {{ user.stripeidrequired }}
                  </b-td>
                  <b-td class="text-center">
                     {{ user.hassentdocuments }}
                  </b-td>

                  <b-td class="text-center">
                     {{ user.isidverified }}
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
                     {{ user.phonenumber }}
                  </b-td>


                  <b-td>
                     {{ user.verifiedat }}
                  </b-td>


    
                  <b-td class="text-center">
                    <b-button-group>
                      <b-button size="sm" variant="light">
                        <i class="fa fa-fw fa-pencil-alt"></i>
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
          id: 1,
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          phonenumber: '+1 (914)-484-6222',
          registeredat: '28.01.2022 14:23:23',
          verifiedat: '28.01.2022 15:23:23',
          href: 'javascript:void(0)',
          hassentdocuments: 'Yes',
          isidverified: 'Yes',
          stripeidrequired: 'Yes',
          rowVariant: 'secondary'
        },
        {
          id: 2,
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          phonenumber: '+1 (914)-484-6222',
          registeredat: '28.01.2022 14:23:23',
          verifiedat: '28.01.2022 15:23:23',
          href: 'javascript:void(0)',
          hassentdocuments: 'Yes',
          isidverified: 'Yes',
          stripeidrequired: 'Yes',
          rowVariant: 'secondary'
        },
        {
          id: 3,
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          phonenumber: '+1 (914)-484-6222',
          registeredat: '28.01.2022 14:23:23',
          verifiedat: '28.01.2022 15:23:23',
          href: 'javascript:void(0)',
          hassentdocuments: 'Yes',
          isidverified: 'Yes',
          stripeidrequired: 'Yes',
          rowVariant: 'secondary'
        },
        {
          id: 4,
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          phonenumber: '+1 (914)-484-6222',
          registeredat: '28.01.2022 14:23:23',
          verifiedat: '28.01.2022 15:23:23',
          href: 'javascript:void(0)',
          hassentdocuments: 'Yes',
          isidverified: 'Yes',
          stripeidrequired: 'Yes',
          rowVariant: 'secondary'
        },
        {
          id: 5,
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          phonenumber: '+1 (914)-484-6222',
          registeredat: '28.01.2022 14:23:23',
          verifiedat: '28.01.2022 15:23:23',
          href: 'javascript:void(0)',
          hassentdocuments: 'Yes',
          isidverified: 'Yes',
          stripeidrequired: 'Yes',
          rowVariant: 'secondary'
        },
        {
          id: 6,
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          phonenumber: '+1 (914)-484-6222',
          registeredat: '28.01.2022 14:23:23',
          verifiedat: '28.01.2022 15:23:23',
          href: 'javascript:void(0)',
          hassentdocuments: 'Yes',
          isidverified: 'Yes',
          stripeidrequired: 'Yes',
          rowVariant: 'secondary'
        },
        {
          id: 7,
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          phonenumber: '+1 (914)-484-6222',
          registeredat: '28.01.2022 14:23:23',
          verifiedat: '28.01.2022 15:23:23',
          href: 'javascript:void(0)',
          hassentdocuments: 'Yes',
          isidverified: 'Yes',
          stripeidrequired: 'Yes',
          rowVariant: 'secondary'
        },
        {
          id: 8,
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          phonenumber: '+1 (914)-484-6222',
          registeredat: '28.01.2022 14:23:23',
          verifiedat: '28.01.2022 15:23:23',
          href: 'javascript:void(0)',
          hassentdocuments: 'Yes',
          isidverified: 'Yes',
          stripeidrequired: 'Yes',
          rowVariant: 'secondary'
        },
        {
          id: 9,
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          phonenumber: '+1 (914)-484-6222',
          registeredat: '28.01.2022 14:23:23',
          verifiedat: '28.01.2022 15:23:23',
          href: 'javascript:void(0)',
          hassentdocuments: 'Yes',
          isidverified: 'Yes',
          stripeidrequired: 'Yes',
          rowVariant: 'secondary'
        },
        {
          id: 10,
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          phonenumber: '+1 (914)-484-6222',
          registeredat: '28.01.2022 14:23:23',
          verifiedat: '28.01.2022 15:23:23',
          href: 'javascript:void(0)',
          hassentdocuments: 'Yes',
          isidverified: 'Yes',
          stripeidrequired: 'Yes',
          rowVariant: 'secondary'
        },
        {
          id: 11,
          name: 'Andrew Smith',
          email: 'andrew.smith@gmail.com',
          phonenumber: '+1 (914)-484-6222',
          registeredat: '28.01.2022 14:23:23',
          verifiedat: '28.01.2022 15:23:23',
          href: 'javascript:void(0)',
          hassentdocuments: 'Yes',
          isidverified: 'Yes',
          stripeidrequired: 'Yes',
          rowVariant: 'secondary'
        }
      ]
    }
  }
}
</script>