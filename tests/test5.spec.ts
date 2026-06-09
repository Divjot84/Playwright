import {test,expect} from '@playwright/test';

test('search no results task',async({page})=>{
    await page.goto('https://playwright.dev/');

    await page.getByRole('button', {name:'Search'}).click();

    await page.getByPlaceholder('Search docs').fill('asddfwfnw');

    await expect(page.getByText('No results')).toBeVisible();
})