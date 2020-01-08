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
              @click="triggerUpload"
            >
              Upload
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
            <input
              ref="fileInput"
              type="file"
              style="display: none;"
              accept="image/*"
              @change="onFileChange"
            >
            <v-img
              v-if="imageSrc"
              :src="imageSrc"
              height="100px"
            />
            <v-switch
              color="primary"
              v-model="promo"
              label="Add to promo?"
            />

            <v-spacer/>
            <v-btn
              :disabled="!valid || !image || loading"
              :loading="loading"
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
      valid: false,
      image: null,
      imageSrc: ''
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    }
  },
  methods: {
    createAd () {
      if (this.$refs.form.validate() && this.image) {
        const ad = {
          title: this.title,
          description: this.description,
          promo: this.promo,
          image: this.image
        }

        this.$store.dispatch('createAd', ad)
          .then(() => {
            this.$router.push('/list')
          })
          .catch(() => {})
      }
    },

    triggerUpload () {
      this.$refs.fileInput.click()
    },

    onFileChange (event) {
      const file = event.target.files[0]

      const reader = new FileReader()
      reader.onload = e => {
        this.imageSrc = reader.result
      }
      reader.readAsDataURL(file)
      this.image = file
    }
  }
}
</script>

<style scoped>

</style>
