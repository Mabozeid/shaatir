// plugins/vuetify.js
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

// Styles
import 'vuetify/styles'; // Ensure this is imported

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    theme: {
      defaultTheme: 'light', // You can customize this
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
