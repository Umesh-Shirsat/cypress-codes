const { defineConfig } = require("cypress");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");
const excelToJson = require("convert-excel-to-json");
const fs = require("fs");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);
  on("file:preprocessor", preprocessor(config));

  on("task", {
    excelToJsonConverter(filepath) {
      const result = excelToJson({
        source: fs.readFileSync(filepath),
      });
      return result;
    },
  });
}

module.exports = defineConfig({
  projectId: "471f2x",
  e2e: {
    setupNodeEvents,
    env: {
      url: "https://rahulshettyacademy.com",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg2NjhjMGFlMmFmZDRjMGIxNmY4YTQiLCJ1c2VyRW1haWwiOiJydXNzaWFuQGdtYWlsLmNvbSIsInVzZXJNb2JpbGUiOjEyMzQ1Njc4OTAsInVzZXJSb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MjAwODUwNjYsImV4cCI6MTc1MTY0MjY2Nn0.M-t3mb8IuEo-HTfeLhKxvtRZdLTBF7DbiDVLEMWhNEI",
    },
    viewportWidth: 1280,
    viewportHeight: 720,
    // specPattern: "cypress/e2e/alerts.cy.js",
  },
});
