import { defineConfig, devices } from '@playwright/experimental-ct-svelte'
import { svelte, vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { resolve } from 'path'

export default defineConfig({
  testDir: 'src',
  testMatch: /(.+\.)?comp(onent)?\.(test|spec)\.[cm]?[jt]s/,
  snapshotDir: './__snapshots__',
  workers: 1,
  timeout: 20000,
  fullyParallel: true,
  reporter: 'html',

  use: {
    headless: false,
    trace: 'on-first-retry',
    ctViteConfig: {
      assetsInclude: ['**/*.svg', '**/*.png'],
      plugins: [
        svelte({
          preprocess: [vitePreprocess()]
        })
      ],
      resolve: {
        alias: {},
        preserveSymlinks: true
      }
    }
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] }
    }
  ]
})
