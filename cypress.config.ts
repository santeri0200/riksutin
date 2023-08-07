import { defineConfig } from 'cypress'

export default defineConfig({
  defaultCommandTimeout: 60000,
  viewportWidth: 1280,
  viewportHeight: 720,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
})
