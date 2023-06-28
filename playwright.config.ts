import { defineConfig } from '@playwright/test';
import {} from './techUtils/global-setup'
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  globalSetup: require.resolve('./techUtils/global-setup.ts'),
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'Chrome',
      use: {  launchOptions: {
        channel: 'chrome',
        headless: true,
    },
    storageState: 'techUtils/storageState/cloud/adminStorageStateCloud.json',
  },
    },
  
  ],
});
