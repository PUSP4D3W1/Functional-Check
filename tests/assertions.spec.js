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


test('Fill functional check', async ({ page }) => {
    // Go to the Google Form
    await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdDde_mG-kfFvHrOEOwM-0Q10topRc1wHsSctcOGbsjjLMYVg/viewform');

    // Click the outer wrapper to focus the input (if needed)
    await page.click('.rFrNMe.yqQS1.hatWr.zKHdkd .aCsJod.oJeWuf');

    // Wait for the input to be visible
    const dateInput = page.locator('#mG61Hd .whsOnd.zHQkBf');
    await dateInput.waitFor({ state: 'visible' });

    // Fill the date (Playwright's fill replaces existing text by default)
    const today = new Date().toISOString().split('T')[0];
    await dateInput.fill(today);

    // Optional wait to simulate user pause
    await page.waitForTimeout(3000);

    // Assert the value was filled correctly
    await expect(dateInput).toHaveValue(today);

    //select project
    const chooseProject = page.locator('#i12 > div.vd3tt > div');
    await chooseProject.waitFor({ state: 'visible' });

    await chooseProject.click();

    //select Login Dashboard
    const loginOK = page.locator('#i41 > div.vd3tt > div');
    const loginNOK = page.locator('#i44 > div.vd3tt > div');
    await loginOK.waitFor({ state: 'visible' });

    await loginOK.click();

    //select View Info Dashboard
    const featureOK = page.locator('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(4) > div > div > div.e12QUd > div > div.xOMX8e > div > div.lLfZXe.fnxRtf.EzyPc > span > div:nth-child(2) > div > div > div.vd3tt > div').first();
    const featureNOK = page.locator('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(4) > div > div > div.e12QUd > div > div.xOMX8e > div > div.lLfZXe.fnxRtf.EzyPc > span > div:nth-child(3) > div > div > div.vd3tt > div').first();
    //await featureOK.waitFor({ state: 'visible' });
    await featureOK.click();
    await featureOK.waitFor({ state: 'visible' });

    //select View List Target
    const featureOK_LT = page.locator('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(5) > div > div > div.e12QUd > div > div.xOMX8e > div > div.lLfZXe.fnxRtf.EzyPc > span > div:nth-child(2) > div > div > div.vd3tt > div').first();
    const featureNOK_LT = page.locator('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(5) > div > div > div.e12QUd > div > div.xOMX8e > div > div.lLfZXe.fnxRtf.EzyPc > span > div:nth-child(3) > div > div > div.vd3tt > div').first();
    //await featureOK_LT.waitFor({ state: 'visible' });
    await featureOK_LT.click();
    await featureOK_LT.waitFor({ state: 'visible' });

    //select Create/Update Target
    const featureOK_CUT = page.locator('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(6) > div > div > div.e12QUd > div > div.xOMX8e > div > div.lLfZXe.fnxRtf.EzyPc > span > div:nth-child(2) > div > div > div.vd3tt > div').first();
    const featureNOK_CUT = page.locator('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(6) > div > div > div.e12QUd > div > div.xOMX8e > div > div.lLfZXe.fnxRtf.EzyPc > span > div:nth-child(3) > div > div > div.vd3tt > div').first();
    //await featureNOK_CUT.waitFor({ state: 'visible' });
    await featureOK_CUT.click();
    await featureOK_CUT.waitFor({ state: 'visible' });

    //select View Case Management
    const featureOK_CM = page.locator('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(7) > div > div > div.e12QUd > div > div.xOMX8e > div > div.lLfZXe.fnxRtf.EzyPc > span > div:nth-child(2) > div > div > div.vd3tt > div').first();
    const featureNOK_CM = page.locator('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(7) > div > div > div.e12QUd > div > div.xOMX8e > div > div.lLfZXe.fnxRtf.EzyPc > span > div:nth-child(3) > div > div > div.vd3tt > div').first();
    //await featureOK_CM.waitFor({ state: 'visible' });
    await featureOK_CM.click();
    await featureOK_CM.waitFor({ state: 'visible' });

    //Create-Update Case Management
    const featureOK_CUCM = page.locator('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(8) > div > div > div.e12QUd > div > div.xOMX8e > div > div.lLfZXe.fnxRtf.EzyPc > span > div:nth-child(2) > div > div > div.vd3tt > div').first();
    const featureNOK_CUCM = page.locator('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(8) > div > div > div.e12QUd > div > div.xOMX8e > div > div.lLfZXe.fnxRtf.EzyPc > span > div:nth-child(3) > div > div > div.vd3tt > div').first();
    //await featureOK_CUCM.waitFor({ state: 'visible' });
    await featureOK_CUCM.click();
    await featureOK_CUCM.waitFor({ state: 'visible' });

    //List Multitracking
    const featureOK_LM = page.locator('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(9) > div > div > div.e12QUd > div > div.xOMX8e > div > div.lLfZXe.fnxRtf.EzyPc > span > div:nth-child(2) > div > div > div.vd3tt > div').first();
    const featureNOK_LM = page.locator('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(9) > div > div > div.e12QUd > div > div.xOMX8e > div > div.lLfZXe.fnxRtf.EzyPc > span > div:nth-child(3) > div > div > div.vd3tt > div').first();
    //await featureOK_CUCM.waitFor({ state: 'visible' });
    await featureNOK_LM.click();
    await featureNOK_LM.waitFor({ state: 'visible' });

    //Create-Update Multitracking
    const featureOK_CUM = page.locator('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(10) > div > div > div.e12QUd > div > div.xOMX8e > div > div.lLfZXe.fnxRtf.EzyPc > span > div:nth-child(2) > div > div > div.vd3tt > div').first();
    const featureNOK_CUM = page.locator('#mG61Hd > div.RH5hzf.RLS9Fe > div > div.o3Dpx > div:nth-child(10) > div > div > div.e12QUd > div > div.xOMX8e > div > div.lLfZXe.fnxRtf.EzyPc > span > div:nth-child(3) > div > div > div.vd3tt > div').first();
    //await featureOK_CUCM.waitFor({ state: 'visible' });
    await featureNOK_CUM.click();
    await featureNOK_CUM.waitFor({ state: 'visible' });


    //Optionally click the Submit button
    
    await page.getByRole('button', { name: 'Submit' }).click(); // or use locator if 'Submit' text is localized
    const confirmationText = page.getByText('Your response has been recorded', { exact: true });
    await expect(confirmationText).toBeVisible();
    
});

