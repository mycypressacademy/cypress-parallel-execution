const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:"http://cypresstesting7-001-site1.jtempurl.com/",
    projectId:kwuf95,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
