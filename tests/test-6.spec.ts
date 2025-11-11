import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
   await page.goto('https://www.demoblaze.com/index.html');
   await page.getByRole('link', { name: 'Contact' }).click();
   page.once('dialog', dialog => {
     console.log(`Dialog message: ${dialog.message()}`);
     dialog.dismiss().catch(() => {});
   });
   await page.getByRole('button', { name: 'Send message' }).click();
   await page.getByRole('link', { name: 'Sign up' }).click();
   page.once('dialog', dialog => {
     console.log(`Dialog message: ${dialog.message()}`);
     dialog.dismiss().catch(() => {});
   });
   await page.getByRole('button', { name: 'Sign up' }).click();
   await page.getByRole('dialog', { name: 'Sign up' }).getByLabel('Close').click();
   await page.getByRole('link', { name: 'Sony vaio i5' }).click();
   await page.getByRole('link', { name: 'PRODUCT STORE' }).click();
   await page.getByRole('link', { name: 'Home (current)' }).click();
   await page.getByRole('link', { name: 'Home (current)' }).click();
   await page.getByRole('link', { name: 'Contact' }).click();
   await page.getByRole('dialog', { name: 'New message' }).getByLabel('Close').click();
   await page.getByRole('link', { name: 'About us' }).click();
   await page.locator('#videoModal').getByText('Close', { exact: true }).click();
   await page.getByRole('link', { name: 'Cart' }).click();
   await page.getByRole('link', { name: 'Log in' }).click();
   await page.getByRole('dialog', { name: 'Log in' }).getByLabel('Close').click();
   await page.getByRole('link', { name: 'Sign up' }).click();
   await page.getByRole('textbox', { name: 'Username:' }).click();
   await page.getByRole('textbox', { name: 'Username:' }).fill('mohitkute01@gmail.com');
   await page.locator('div').filter({ hasText: 'Password:' }).nth(4).click();
   await page.getByRole('textbox', { name: 'Password:' }).click();
   await page.getByRole('textbox', { name: 'Password:' }).fill('123456789');
   page.once('dialog', dialog => {
     console.log(`Dialog message: ${dialog.message()}`);
     dialog.dismiss().catch(() => {});
   });
   await page.getByRole('button', { name: 'Sign up' }).click();
   await page.getByRole('button', { name: 'Sign up' }).click();
   await page.locator('#loginusername').fill('mohitkute01@gmail.com');
   await page.locator('#loginpassword').click();
   await page.locator('#loginpassword').fill('123456789');
   await page.getByRole('button', { name: 'Log in' }).click();
   await page.getByRole('link', { name: 'Home (current)' }).click();
   await page.getByRole('link').filter({ hasText: /^$/ }).nth(3).click();
   page.once('dialog', dialog => {
     console.log(`Dialog message: ${dialog.message()}`);
     dialog.dismiss().catch(() => {});
   });
   await page.getByRole('link', { name: 'Add to cart' }).click();
   page.once('dialog', dialog => {
     console.log(`Dialog message: ${dialog.message()}`);
     dialog.dismiss().catch(() => {});
   });
   await page.getByRole('link', { name: 'Add to cart' }).click();
   await page.getByRole('listitem').filter({ hasText: 'Cart' }).click();
   await page.getByRole('button', { name: 'Place Order' }).click();
   await page.getByRole('textbox', { name: 'Total: 1600 Name:' }).click();
   await page.getByRole('textbox', { name: 'Total: 1600 Name:' }).fill('mohit');
   await page.getByRole('textbox', { name: 'Country:' }).click();
   await page.getByRole('textbox', { name: 'Country:' }).fill('indea');
   await page.getByRole('textbox', { name: 'City:' }).click();
   await page.getByRole('textbox', { name: 'City:' }).fill('pune');
   await page.getByRole('textbox', { name: 'Credit card:' }).click();
   await page.getByRole('textbox', { name: 'Credit card:' }).fill('flwnfekrn');
   await page.getByRole('textbox', { name: 'Month:' }).click();
   await page.getByRole('textbox', { name: 'Month:' }).fill('11');
   await page.locator('div').filter({ hasText: 'Year:' }).nth(4).click();
   await page.getByRole('textbox', { name: 'Year:' }).click();
   await page.getByRole('textbox', { name: 'Year:' }).fill('2026');
   await page.getByRole('dialog', { name: 'Place order' }).click();
   await page.locator('div:nth-child(8)').first().click();
   await page.locator('div:nth-child(8)').first().click();
   await page.getByRole('dialog', { name: 'Place order' }).getByLabel('Close').click();
   await page.getByRole('button', { name: 'Place Order' }).click();
   await page.getByText('Place order ×').click();
   await page.getByRole('dialog', { name: 'Place order' }).getByLabel('Close').click();
   await page.getByRole('button', { name: 'Place Order' }).click();
   await page.getByRole('dialog', { name: 'Place order' }).click();
   await page.getByRole('dialog', { name: 'Place order' }).click();
   await page.getByRole('dialog', { name: 'Place order' }).getByLabel('Close').click();
   await page.getByRole('link', { name: 'Contact' }).click();
   await page.getByLabel('New message').getByText('Close').click();
});