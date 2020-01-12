<template>
  <v-container>
    <v-row v-if="!loading && myAds.length !== 0">
      <v-col sm="8" offset-sm="2" md="8" offset-md="3">
        <h1 class="text--secondary mb-3">My ads</h1>

        <v-card
          elevation="10"
          class="mb-5"
          v-for="ad of myAds"
          :key="ad.id"
        >
          <v-row>
            <v-col sm="4" class="pt-0 pb-0">
              <v-img
                :src="ad.imageSrc"
                height="170px"
              />
            </v-col>
            <v-col sm="8">
              <v-card-text>
                <h2 class="text--primary">{{ ad.title }}</h2>
                <p>{{ ad.description }}</p>
              </v-card-text>
              <v-card-actions>
                <v-spacer/>
                <v-btn
                  color="info"
                  :to="'/ad/' + ad.id"
                >Open</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-else-if="!loading && myAds.length === 0">
      <v-col sm="12" class="text-sm-center">
        <h1 class="text--primary">You have no ads</h1>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col sm="12" class="text-sm-center">
        <v-progress-circular
          :size="100"
          :width="4"
          color="purple"
          indeterminate
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>

</style>
