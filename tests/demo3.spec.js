import { test, expect } from '@playwright/test';
test.fixme('Built-in-Locators',async({page , browserName}) =>
    {
browserName=== 'firefox';
        await page.goto('https://www.demoblaze.com/index.html', { waitUntil: 'domcontentloaded', timeout: 60000 });

      await page.locator('#signin2').click();

      await page.locator('.btn.btn-primary').first().click();

       await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
    await page.getByLabel('Username:').fill('mohit');
await page.getByRole('link' ,{name:'About us'}).click();

const playButton = page.getByTitle('Play Video');

await playButton.click();
await page.locator('.nav-link').click();



    } );


