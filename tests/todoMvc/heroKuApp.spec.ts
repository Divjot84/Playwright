import { test, expect } from '@playwright/test';

test('Login page successful', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/login');

  await page.fill('#username', 'tomsmith');
  await page.fill('#password', 'SuperSecretPassword!');

  await page.getByRole('button', { name: 'Login' }).click();

  // Verify URL
  await expect(page).toHaveURL(/secure/);

  // Verify success message
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');


  //logout 
  await page.getByRole('link', {name: 'Logout'}).click();

  await expect(page).toHaveURL(/login/);
  await expect(page.locator('#flash')).toContainText('You logged out');
}); 