/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'
import colors from 'vuetify/util/colors'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.blueGrey.darken2,
          secondary: colors.blueGrey.lighten3
        }
      },
    },
  },
  defaults: {
    global: {
      ripple: false,
    },
    components: {
      VApp: {
        defaultSlot: 'default',
      },
      VCard: {
        props: {
          flat: Boolean,
        },
      },
      VBtn: {
        class: 'text-none',
      },
    },
  }
})
