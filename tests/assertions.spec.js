// @ts-check
const { test, expect } = require('@playwright/test');
const { default: newActions} = require('./actions/newActions');

// test('locator dan assertions', async ({page}) => {
//     await page.goto('https://forms.gle/koWmKJjpzKfPHuWF7');

//     const today = new Date();
//     const formattedDate = today.toLocaleDateString('en-GB'); // Formats as DD/MM/YYYY
//     await page.fill('input[name="your-input-name"]', formattedDate);
    
//     const selectWeek = page.locator('#i12 > div.vd3tt > div');
//     await selectWeek.click();

//     const selectProject = page.locator('#i32 > div.vd3tt > div > div');
//     await selectProject.click();

//     const inputSampledata = page.locator('div.o3Dpx > div:nth-of-type(4) input');
//     await inputSampledata.fill('6281000000001');
//     await expect (inputSampledata).toHaveValue('6281000000001');

//     const selectRecLocFe = page.locator('.AB7Lab.Id5V1').filter({ hasText: 'OK / Ada' });
//     await selectRecLocFe.click();

//     const selectRecLocRes = page.locator('.AB7Lab.Id5V1').filter({ hasText: 'OK / Ada' });
//     await selectRecLocRes.click();

//     const buttonLogin = page.locator('#login-button');
//     await buttonLogin.click();

//     const addtocartback = page.locator('#add-to-cart-sauce-labs-backpack');
//     await addtocartback.click();

//     const addtocartJacket = page.locator('#add-to-cart-sauce-labs-fleece-jacket');
//     await addtocartJacket.click();

//     const listcart = page.locator('#shopping_cart_container > a');
//     await listcart.click();

//     const checkout = page.locator('#checkout');
//     await checkout.click();

//     const inputFName = page.locator('#first-name');
//     await inputFName.fill('Puspa');
//     await expect (inputFName).toHaveValue('Puspa');

//     const inputLName = page.locator('#last-name');
//     await inputLName.fill('Puspa123');
//     await expect (inputLName).toHaveValue('Puspa123');

//     const inputPostalCode = page.locator('#postal-code');
//     await inputPostalCode.fill('12345');
//     await expect (inputPostalCode).toHaveValue('12345');

//     const Continue = page.locator('#continue');
//     await Continue.click();

//     const Finish = page.locator('#finish');
//     await Finish.click();
// });

// test('PMO weekend', async ({page}) => {
//     const objActions = new newActions(page);
//     await objActions.goto();
//     await objActions.fillChecklistDate();
// });


test('Fill checklist date in Google Form', async ({ page }) => {
    // Go to the Google Form
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdUoJuxG1BTH3n3RGeewi97fOlVtPWrYZ4IlAr-lcGPL45vZg/viewform');

    // Click the outer wrapper to focus the input (if needed)
    await page.click('.rFrNMe.yqQS1.hatWr.zKHdkd .aCsJod.oJeWuf');

    // Wait for the input to be visible
    const dateInput = page.locator('#mG61Hd .whsOnd.zHQkBf');
    await dateInput.waitFor({ state: 'visible' });

    // Fill the date (Playwright's fill replaces existing text by default)
    await dateInput.fill('2025-11-04');

    // Optional wait to simulate user pause
    await page.waitForTimeout(3000);

    // Assert the value was filled correctly
    await expect(dateInput).toHaveValue('2025-11-04');

    //Optionally click the Submit button
    await page.getByRole('button', { name: 'Submit' }).click(); // or use locator if 'Submit' text is localized
});

