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
await  page.goto('https://demo.automationtesting.in/Index.html');// webside link

await page.locator('#email').fill('mahikute505@gmail.com');
await page.locator('#enterimg').click();

await page.getByPlaceholder('First Name').fill('mohit');//First name
await page.getByPlaceholder('Last Name').fill('kute');//last name

await page.locator('textarea[ng-model="Adress"]').fill('pune maharshtra 412208'); //Address

 await page.locator('input[type="email"]').fill('mohitkute01@gmail.com'); //email ID

 await page.locator('input[type="tel"]').fill('8080496083'); //phone number

 await page.locator('input[value="Male"]').check(); // for male

 //await page.locator('input[value="FeMale"]').check(); // for female 

 //await page.locator('#msdd').fill('english , marathi , Hindi');

 await page.locator('#checkbox1').check(); // check the hobbies
 await page.locator('#checkbox2').check();
 await page.locator('#checkbox3').check();

const items = page.locator('li.ng-scope'); // all <li> inside the list
const count = await items.count();
console.log('Number of language:', count);
await page.locator('#msdd').click();
await page.locator('li', { hasText: 'Hindi'}).click(); //select the language
await page.locator('li', { hasText: 'Danish'}).click();

//await page.waitForTimeout(5000);

await page.locator('#Skills').selectOption('HTML'); //select skill
await page.waitForTimeout(3000);
//await page.locator('#countries').click(); // click on select countries 

//await page.locator('.select2-selection').click(); //select countries
//await page.locator('.select2-search__field').fill('India'); 
//await page.locator('.select2-results__option', { hasText: 'India' }).click();// select countries 
//await page.locator('#countries').selectOption('India');

await page.locator('#yearbox').selectOption('2000');//select year
await page.getByPlaceholder('Month').selectOption('November');//select mounths
await page.locator('#daybox').selectOption('23');//select days

await page.locator('#firstpassword').fill('mahik505');//enter password
await page.locator('#secondpassword').fill('mahik505');//enter repassword

await page.locator('#submitbtn').click();//click on submit button


await page.waitForTimeout(5000); // wait for 5 sec.
await page.locator('#Button1').click(); //click on clear button


await page.locator('#imagesrc').setInputFiles("./tests/files/1.png"); //img uploding..

}); //test close

test ('file submit', async ({page}) =>  
{

   await page.goto('https://practice.expandtesting.com/upload');
await page.locator("#fileInput").setInputFiles("./tests/files/1.png");
await page.locator('#fileSubmit').click();

});