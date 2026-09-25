// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',
  retries : 1,
  timeout : 40 * 1000,
  expect : {timeout : 30 * 1000},
  reporter: 'html',
  
  use: {
    headless : false,
    trace : 'retain-on-failure',
    baseURL: 'https://eventhub.rahulshettyacademy.com',
  },
 
  projects: [
    { 
      name: 'chromium', 
      use: { ...devices['Desktop Chrome'] } 
    },
    { 
      name: 'firefox',  
      use: { ...devices['Desktop Firefox'] } 
    },
  ],

});

