<template>
  <v-container>
    <v-row>
      <v-col sm="12" class="text-sm-center pt-5" v-if="loading">
        <v-progress-circular
          :size="100"
          :width="4"
          color="purple"
          indeterminate
        />
      </v-col>

      <v-col
        sm="12"
        md="6"
        offset-md="3"
        v-else-if="!loading && orders.length !== 0"
      >
        <h1 class="text--secondary mb-3">Orders</h1>

          <v-list
            two-line
            flat
          >
            <v-list-item
              v-for="order in orders"
              :key="order.id"
            >
              <v-list-item-action>
                <v-checkbox
                  color="success"
                  :input-value="order.done"
                  @change="markDone(order)"
                />
              </v-list-item-action>

              <v-list-item-content>
                <v-list-item-title>{{ order.name }}</v-list-item-title>
                <v-list-item-subtitle>{{ order.phone }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn
                  class="primary"
                  :to="'/ad/' + order.adId"
                >Open</v-btn>
              </v-list-item-action>
            </v-list-item>
          </v-list>
      </v-col>

      <v-col sm="12" class="text-sm-center" v-else>
        <h1 class="text--secondary">You have no orders</h1>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  // data () {
  //   return {
  //     orders: [
  //       {
  //         id: 'fds3',
  //         name: 'Alex',
  //         phone: '4-234-123-45-67',
  //         adId: '123',
  //         done: false
  //       }
  //     ]
  //   }
  // },

  computed: {
    loading () {
      return this.$store.getters.loading
    },
    orders () {
      return this.$store.getters.orders
    }
  },

  methods: {
    markDone (order) {
      this.$store.dispatch('markOrderDone', order.id)
        .then(() => {
          order.done = true
        })
        .catch(() => {})
    }
  },

  created () {
    this.$store.dispatch('fetchOrders')
  }
}
</script>

<style scoped>

</style>
