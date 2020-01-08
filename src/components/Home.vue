<template>
  <div v-if="!loading">
  <v-container fluid>
    <v-row>
      <v-col sm="12">
        <v-carousel>
          <v-carousel-item
            v-for="ad in promoAds"
            :key="ad.id"
            :src="ad.imageSrc"
            reverse-transition="fade-transition"
            transition="fade-transition"
          >
            <div class="car-link">
              <v-btn class="error" :to="'/ad/' + ad.id">{{ ad.title }}</v-btn>
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row justify-sm="center">
      <v-col
        sm="6"
        md="4"
        lg="3"
        v-for="ad in ads"
        :key="ad.id"
      >
        <v-card
          class="mx-auto"
          max-width="344"
        >
          <v-img
            :src="ad.imageSrc"
            height="200px"
          />

          <v-card-title>
            {{ ad.title }}
          </v-card-title>

          <v-card-subtitle>
            {{ ad.description }}
          </v-card-subtitle>

          <v-card-actions>
            <v-spacer/>
            <v-btn
              text
              :to="'/ad/' + ad.id"
            >Open</v-btn>

            <v-btn
              class="primary"
            >
              Buy
            </v-btn>

          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  </div>
  <div v-else>
    <v-container>
      <v-row>
        <v-col sm="12" class="text-sm-center pt-5">
          <v-progress-circular
            :size="100"
            :width="4"
            color="purple"
            indeterminate
          />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  computed: {
    promoAds () {
      return this.$store.getters.promoAds
    },
    ads () {
      return this.$store.getters.ads
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style scoped>
  .car-link {
    position: absolute;
    bottom: 50px;
    left: 50%;
    background: rgba(0, 0, 0, .3);
    transform: translate(-50%, 0);
    padding: 10px 20px;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
</style>
