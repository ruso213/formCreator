import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      webServerCommands: {
        default: 'nx run awesome-form:serve:development',
        production: 'nx run awesome-form:serve:production',
      },
      ciWebServerCommand: 'nx run awesome-form:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
