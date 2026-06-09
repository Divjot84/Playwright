import { test, expect } from '@playwright/test';

test('select radio button', async ({ page }) => {
  await page.goto('https://demoqa.com/radio-button');

  await page.getByLabel('Yes').check();

  await expect(page.locator('.text-success')).toHaveText('Yes');
});

    