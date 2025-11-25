import { test, expect } from '@playwright/test';
import { only } from 'node:test';


//only Annotation
//test.only ('test 1', async ({ page }) => {
test ('test 1', async ({ page }) => {
console.log('test 1 exicuted')


})

//Skip Annotation
test.skip('test 2', async ({ page }) => {

console.log('test 2 exicuted')


})
//Fail Annotation
test('test 3', async ({ page, browserName }) => {

console.log('test 3 exicuted')
if(browserName === 'chromium'){
    test.fail();
}

})
//Fixme Annotation
test.fixme('test 4', async ({ page, browserName }) => {

console.log('test 4 exicuted')
if(browserName === 'chromium'){
    test.fail();
}

})


// test('test 5', async ({ page, browserName }) => {

// test.slow();
// console.log('test 5 exicuted')
// if(browserName === 'firefox'){
//     test.fail();
// }
// })
//Group Annotation "Describe"
test.describe('group 1',()=>{
test('test 6', async ({page})=>{

console.log('test 6');

})

test('test 7', async ({page})=>{

    console.log('test 7');
})
})

// tag 
test('test 8@aa', async ({page})=>{

    console.log('test 8');
})
test('test 8@bb', async ({page})=>{

    console.log('test 9');
})
test('test 8@aa@bb', async ({page})=>{

    console.log('test 10');
})

test('test 8@cc', async ({page})=>{

    console.log('test 11');
})
test('test 8@aa@cc', async ({page})=>{

    console.log('test 12');
})