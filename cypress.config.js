const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    baseUrl: 'https://www.saucedemo.com',
    setupNodeEvents(on, config) {},
  },
});
