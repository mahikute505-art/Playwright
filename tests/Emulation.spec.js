import { test, expect } from '@playwright/test';

test.use ({ 
        viewport: { width: 2000, height: 1500 },
        locale: 'de-DE',
        timezoneId: 'Europe/London',
        colorScheme: 'dark',
       geolocation: { longitude: 13.4050, latitude: 52.5200 },
       permissions: ['notifications'],
       javaScriptEnabled: true,
       hasTouch: false,
      
        
});


test ('test 1', async ({ page }) => {

    await page.goto('file:///C:/Users/Shree/OneDrive/Desktop/FixFast/index.html#mobile-section');
console.log('test 1 exicuted')

});


test('custom userAgent', async ({ browser }) => {
  const context = await browser.newContext({
    userAgent: "PlaywrightCustomUserAgent/1.0"
  });

  const page = await context.newPage();

  await page.goto("https://www.demoblaze.com/index.html");
});





// --- IGNORE ---