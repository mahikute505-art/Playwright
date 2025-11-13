import { test, expect } from '@playwright/test';

test('correct login form', async ({ page }) => {
  // Step 1: Go to the login page
  await page.goto('https://www.saucedemo.com/inventory.html"');

  // Step 2: Fill in username and password
  await page.fill('#user-name', 'standard_usr');
  await page.fill('#password', 'secret_sau');

  // Step 3: Click the login button
  await page.click('#login-button');

  // Step 4: Assertion — check if user navigated to dashboard
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
                                
  // Step 5: Assertion — check if logo or product title is visible
  const productsTitle = page.locator('.title');
  await expect(productsTitle).toHaveText('Products');

  console.log('✅ Login successful and dashboard verified');
});

 test('incorrect login form', async ({ page }) => {
  // Step 1: Go to the login page
  await page.goto('https://www.saucedemo.com/inventory.html"') ;

await page.fill('#user-name','wrong_username');
await page.fill('#password', 'wrong_password');
  await page.click('#login-button');

    const errorMessage =  page.locator('[data-test="error"]');
 
 
    await expect (errorMessage).toBeVisible();
  expect(errorMessage).toContainText('Username and password do not match');
  
   });

 