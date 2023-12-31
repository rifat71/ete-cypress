const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '9uwh1c',
  e2e: {
    defaultCommandTimeout: 10000,
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
