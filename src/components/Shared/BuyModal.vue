<template>
  <v-dialog width="500px" v-model="modal">
    <template v-slot:activator="{ on }">
      <v-btn class="primary margin" v-on="on">Buy</v-btn>
    </template>

    <v-card>
      <v-container>
        <v-row>
          <v-col sm="12">
            <v-card-title>
              <h1 class="text--primary">Do you wan't to buy it?</h1>
            </v-card-title>
          </v-col>
        </v-row>
        <v-divider/>
        <v-row>
          <v-col sm="12">
            <v-card-text>
              <v-text-field
                label="Your name"
                name="name"
                type="text"
                v-model="name"
              />
              <v-textarea
                label="Your phone"
                name="phone"
                v-model="phone"
              />
            </v-card-text>
          </v-col>
        </v-row>
        <v-divider/>
        <v-row>
          <v-col sm="12">
            <v-card-actions>
              <v-spacer/>
              <v-btn
                text
                @click="onClose"
                :disabled="localLoading"
              >
                Close
              </v-btn>
              <v-btn
                class="success"
                text
                @click="onSave"
                :disabled="localLoading"
                :loading="localLoading"
              >
                Buy it!
              </v-btn>
            </v-card-actions>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['ad'],
  data () {
    return {
      modal: false,
      name: '',
      phone: '',
      localLoading: false
    }
  },
  methods: {
    onClose () {
      this.name = ''
      this.phone = ''
      this.modal = false
    },
    onSave () {
      if (this.name !== '' && this.phone !== '') {
        this.localLoading = true
        this.$store.dispatch('createOrder', {
          name: this.name,
          phone: this.phone,
          adId: this.ad.id,
          ownerId: this.ad.ownerId
        })
          .finally(() => {
            this.name = ''
            this.phone = ''
            this.localLoading = false
            this.modal = false
          })
      }
    }
  }
}
</script>

<style scoped>
  .margin {
    margin-left: 5px;
  }
</style>
