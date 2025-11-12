import { test, expect } from '@playwright/test';

test('insert from', async ({ page }) => {

   await page.goto('https://practice.expandtesting.com/inputs');
await page.locator('#input-number').fill('8080496083');
await page.locator('#input-text').fill('mohit');
await page.locator('#input-password').fill('mk010230');


//await page.locator('#input-date').fill('11-11-2000');
await page.locator('#btn-display-inputs').click();

await page.waitForTimeout(5000);

await page.locator('#btn-clear-inputs').click();

});
 test ('login page', async({page}) =>
{ 
await page.goto('https://practice.expandtesting.com/login');

await page.locator('#username').fill('practice');
await page.locator('#password').fill('SuperSecretPassword!');

await page.waitForTimeout(5000);
await page.locator('#submit-login').click();

await page.waitForTimeout(5000);

await page.locator('.icon-2x.icon-signout').click();

});

test ('register form', async ({page}) =>
{
await  page.goto('https://demo.automationtesting.in/Register.html');

await page.getByPlaceholder('First Name').fill('mohit');
await page.getByPlaceholder('Last Name').fill('kute');


//const locator = page.locator('textarea[ng-model="Dress"]');

 //await page.locator('#type=email').fill('mohitkute01@gmail.com');

});

test ('file submit', async ({page}) =>  
{

   await page.goto('https://practice.expandtesting.com/upload');
await page.locator("#fileInput").setInputFiles("./tests/files/1.png");
await page.locator('#fileSubmit').click();

});
