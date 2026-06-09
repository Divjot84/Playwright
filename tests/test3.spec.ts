import {test,expect} from '@playwright/test'

test('search test',async({page})=>{
    await page.goto('https://playwright.dev/');

    await page.getByRole('button',{name:'Search'}).click();

    await page.getByPlaceholder('Search docs').fill('test');

    await expect(page.getByText('Writing tests')).toBeVisible();  


    //test 4

    await page.getByText('Writing tests').click();

    await expect(page).toHaveURL(/writing-tests/);

    await expect(page.getByRole('heading', { name: 'Writing tests' })).toBeVisible();
})