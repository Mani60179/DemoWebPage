const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {

  await preprocessor.addCucumberPreprocessorPlugin(on, config);
    on("file:preprocessor", browserify.default(config))
    require('cypress-mochawesome-reporter/plugin')(on);
    
  return config;
        
}



module.exports = defineConfig({

  defaultCommandTimeout: 6000,
  env: {
    url: "https://demowebshop.tricentis.com/"
  },
  retries: {
    runMode: 1,
  },
  e2e: {
    setupNodeEvents,
    specPattern: 'cypress/e2e/*.feature'
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportFileName: 'Report-[datetime]',
    timestamp: 'mm/dd/yyyy_HH/MM/SS',
    overwrite: false,
    reportPageTitle: 'Demoshop Report',
    embeddedScreenshots: true,
    inlineAssets: true
  }
});

