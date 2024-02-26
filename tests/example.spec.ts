import { test, expect } from '@playwright/test';
import { argosScreenshot } from "@argos-ci/playwright";


test('Verify landing page', async ({ page }, workerInfo) => {
  await page.goto('/');
  const browserName = workerInfo.project.name;
  await argosScreenshot(page, `homepage-${browserName}`);

});


