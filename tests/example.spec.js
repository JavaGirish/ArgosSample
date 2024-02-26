import { test, expect } from '@playwright/test';
import { argosScreenshot } from "@argos-ci/playwright";


test('Verify landing page', async ({ page }, workerInfo) => {
  await page.goto('/');
  const browserName = workerInfo.project.name;
  const element = page.locator("(//h2[@class='h2 mb-4'])[1]")
  expect(element).toHaveText('The majority our customers do not understand their workflows.')
  await argosScreenshot(page, `homepage-${browserName}`);

});


