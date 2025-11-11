const {test} = require('@playwright/test')

test('first playwright test', async ({page})=>
{
await page.goto('https://demo.nopcommerce.com/');

});