import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    headless: true,
    baseURL: "http://wemovies-qa.s3-website.us-east-2.amazonaws.com/"
  }
});
