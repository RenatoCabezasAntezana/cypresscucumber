const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  viewportWidth: 1600,
  viewportHeight: 960,
  fixturesFolder: 'cypress/fixtures',

  e2e: {
    "specPattern": "**/*.feature",
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
    },
    baseUrl: "https://restful-booker.herokuapp.com/"
  },
});
