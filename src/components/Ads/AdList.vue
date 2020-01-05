<template>
  <v-container>
    <v-row>
      <v-col sm="8" offset-sm="2" md="8" offset-md="3">
        <h1 class="text--secondary mb-3">My ads</h1>

        <v-card
          elevation="10"
          class="mb-5"
          v-for="ad of ads"
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
  data () {
    return {
      ads: [
        {
          title: 'First ad',
          description: 'Hello I am description',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          id: '123'
        },
        {
          title: 'Second ad',
          description: 'Hello I am description',
          promo: true,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          id: '1234'
        },
        {
          title: 'Third ad',
          description: 'Hello I am description',
          promo: true,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          id: '12345'
        },
        {
          title: 'Fourth ad',
          description: 'Hello I am description',
          promo: false,
          imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          id: '123456'
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
