import {test,expect} from '@playwright/test';

test('select from dropdown', async({page})=>{
    await page.goto('https://demoqa.com/select-menu');

    await page.click('#withOptGroup');
    await page.getByText('Group 1, option 1').click();

    await expect(page.locator('#withOptGroup')).toContainText('Group 1, option 1');

});