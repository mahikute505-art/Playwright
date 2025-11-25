import { test, expect } from '@playwright/test';
//Fixture Demo (context and browserName)
//test ('test fixture demo', async ({ page, browserName, context }) => {

// //const pagee1 = await context.newPage();
// const pagee2 = await context.newPage();

// await pagee1.goto('https://www.demoblaze.com/index.html');
// await pagee2.goto('https://www.demoblaze.com/index.html');


// });
// test('example', async ({ page }) => {
//   await page.goto('https://google.com');
// });

// test('example 2', async ({ browser }) => {

//     const context = browser.newContext();
//   const page=  (await context).newPage();
// await page.goto('https://google.com');
// });

test('Create user', async ({ request }) => {
  const response = await request.post('https://www.demoblaze.com/index.html', {
    data: {
      name: 'Mohit',
      age: 24
    }
  });

  console.log(await response.text());
});
