import {test,expect} from '@playwright/test';

test('simple test', async ({page})=>{
    await page.goto('https://playwright.dev/');

    await page.getByRole('link',{name: 'Docs'}).click();

    await expect(page).toHaveURL(/docs/);

    await expect(page).toHaveTitle(/Playwright/);

    await expect(page.getByRole('heading',{name : 'Installation'})).toBeVisible();
})

