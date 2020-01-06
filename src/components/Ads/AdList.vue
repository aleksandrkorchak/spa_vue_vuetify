<template>
  <v-container>
    <v-row>
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
  </v-container>
</template>

<script>
export default {
  computed: {
    myAds () {
      return this.$store.getters.myAds
    }
  }
}
</script>

<style scoped>

</style>
