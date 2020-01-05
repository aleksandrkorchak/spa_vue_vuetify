<template>
  <v-container>
    <v-row>
      <v-col sm="12" md="6" offset-md="3">
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form v-model="valid" ref="form"  class="mb-3">
          <v-text-field
            label="Ad title"
            name="title"
            type="text"
            v-model="title"
            required
            :rules="[v => !!v || 'Title is required']"
          />

          <v-textarea
            label="Ad description"
            name="description"
            type="text"
            v-model="description"
            :rules="[v => !!v || 'Description is required']"
          />
        </v-form>
        <v-row>
          <v-col sm="12">
            <v-btn
              class="mb-3 white--text warning"
            >
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
            <v-img src="https://cdn.vuetifyjs.com/images/carousel/planet.jpg" height="100px"/>
            <v-switch
              color="primary"
              v-model="promo"
              label="Add to promo?"
            />

            <v-spacer/>
            <v-btn
              :disabled="!valid"
              class="success"
              @click="createAd"
            >Create ad</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: '',
      description: '',
      promo: false,
      valid: false
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate()) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo
        }
        console.log(ad)
      }
    }
  }
}
</script>

<style scoped>

</style>
