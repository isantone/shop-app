// eslint-disable-next-line import/no-extraneous-dependencies
import { nxE2EPreset } from '@nrwl/cypress/plugins/cypress-preset';
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: nxE2EPreset(__dirname),
});
