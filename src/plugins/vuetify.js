import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
// import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#03A9F4',
        secondary: '#607d8b',
        accent: '#009688',
        error: '#f44336',
        warning: '#795548',
        info: '#2196f3',
        success: '#8bc34a'
        // primary: colors.red.darken1 // #E53935
        // secondary: colors.red.lighten4, // #FFCDD2
        // accent: colors.indigo.base // #3F51B5
      }
    }
  }
})
