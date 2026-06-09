import {test,expect} from '@playwright/test';

test('test checkbox',async({page})=>{
    await page.goto('https://demoqa.com/checkbox');

    const expandBtn = page.locator('.rct-icon-expand-close').first();


    await expandBtn.waitFor({ state: 'visible' });


    await expandBtn.click();    await page.getByText('Desktop', { exact: true }).click();



    await expect(page.locator('#result')).toContainText('desktop');


})