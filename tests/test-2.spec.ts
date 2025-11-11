import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');
await page.getByRole('link', { name: 'Samsung galaxy s7' }).click();
await page.getByRole('link', { name: 'Contact' }).click();
await page.locator('#recipient-email').click();
await page.locator('#recipient-email').fill('mohit');
await page.getByRole('textbox', { name: 'Contact Email: Contact Name:' }).click();
await page.getByRole('textbox', { name: 'Contact Email: Contact Name:' }).fill('8080');
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: 'Send message' }).click();
page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
});