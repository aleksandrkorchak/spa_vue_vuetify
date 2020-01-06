<template>
  <v-container>
    <v-row>
      <v-col sm="12">
        <v-card>
          <v-img
            src="https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
            height="300px"
          ></v-img>
          <v-card-text>
            <h1 class="text--primary">lorem</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, quam.</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn class="warning" depressed>Edit</v-btn>
            <v-btn class="success">Buy</v-btn>
          </v-card-actions>
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
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
