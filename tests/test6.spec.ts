import {test,expect} from '@playwright/test';

test('fill input and submit', async({page})=>{
    await page.goto('https://demoqa.com/text-box');

    await page.fill('#userName','Divjot');
    await page.fill('#userEmail','divjot@gmail.com');
    await page.fill('#currentAddress','Ludhiana');
    await page.fill('#permanentAddress','Punjab');

    await page.click('#submit');

    await expect(page.locator('#output')).toBeVisible();

    await expect(page.locator('#name')).toContainText('Divjot');

});
