const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://commitquality.com/practice-contact-form',
    setupNodeEvents(on, config) {
    },
  },
});
