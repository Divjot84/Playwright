import { test, expect } from '@playwright/test';

test('radio button full test', async ({ page }) => {
  await page.goto('https://demoqa.com/radio-button');

  // Step 1: Select "Impressive"
  const impressiveRadio = page.getByRole('radio', { name: 'Impressive' });
  await impressiveRadio.check();

  // Verify it is checked
  await expect(impressiveRadio).toBeChecked();

  // Step 2: Verify result text
  const resultText = page.locator('.text-success');
  await expect(resultText).toHaveText('Impressive');
  
  // Step 3: Switch selection to "Yes"
  const yesRadio = page.getByRole('radio', { name: 'Yes' });
  await yesRadio.check();

  // Verify "Yes" is checked
  await expect(yesRadio).toBeChecked();

  // Verify "Impressive" is NOT checked
  await expect(impressiveRadio).not.toBeChecked();

  // Verify result text updated
  await expect(resultText).toHaveText('Yes');

  // Step 4: Check "No" is disabled
  const noRadio = page.getByRole('radio', { name: 'No' });
  await expect(noRadio).toBeDisabled();
});