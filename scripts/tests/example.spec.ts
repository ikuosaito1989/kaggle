import { test, expect } from "@playwright/test";

test("kaggle", async ({ page }) => {
  await page.goto("https://www.kaggle.com/");
});
