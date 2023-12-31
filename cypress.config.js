const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9uwh1c',
  e2e: {
    // uncaughtExceptionHandling: false,
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    baseUrl: "http://127.0.0.1:5500",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
