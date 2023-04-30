import codeCoverageTask from '@cypress/code-coverage/task';
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    video: false,
    baseUrl: 'http://localhost:3000',

    setupNodeEvents(on, config) {
      codeCoverageTask(on, config);

      return config;
    },
  },
});
