import { test, expect } from '@playwright/test';

test.use ({ 
        viewport: { width: 600, height: 800 },
        locale: 'de-DE',
        timezoneId: 'Europe/London',
        colorScheme: 'dark',
       geolocation: { longitude: 13.4050, latitude: 52.5200 },
       permissions: ['notifications'],
       javaScriptEnabled: false,
       hasTouch: false,
      
        
});


test ('test 1', async ({ page }) => {

    await page.goto('https://playwright.dev/docs/emulation');
console.log('test 1 exicuted')

})


test('custom userAgent', async ({ browser }) => {
  const context = await browser.newContext({
    userAgent: "PlaywrightCustomUserAgent/1.0"
  });

  const page = await context.newPage();

  await page.goto("https://www.demoblaze.com/index.html");
});





// --- IGNORE ---