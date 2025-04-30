// @ts-check
const { test, expect } = require('@playwright/test');
const { default: newActions} = require('./actions/newActions');

test('functional check looping', async ({ page }) => {
    const browser = await chromium.launch({ headless: false });
    const page = await browser.newPage();

    //const projects = ['Pol Bali','Pol Jabar','KJT DKI','KJT Jabar','Mabes BIK','Pol Lampung','Pol Sulut','KJA'];

    const projects = [
        { name: 'Pol Bali', selector: '#i12 > div.vd3tt > div' },
        { name: 'Pol Jabar', selector: '#i15 > div.vd3tt > div' },
        { name: 'KJT DKI', selector: '#i18 > div.vd3tt > div' },
        { name: 'KJT Jabar', selector: '#i21 > div.vd3tt > div' },
        { name: 'Mabes BIK', selector: '#i24 > div.vd3tt > div' },
        { name: 'Pol Lampung', selector: '#i27 > div.vd3tt > div' },
        { name: 'Pol Sulut', selector: '#i30 > div.vd3tt > div' },
        { name: 'KJA', selector: '#i33 > div.vd3tt > div' }
      ];

    for (const project of projects) {
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
        }
        // Select project
        const projectOption = page.locator(projects.selector);
        await projectOption.waitFor({ state: 'visible' });
        await projectOption.click();

        //select Login Dashboard
        const loginOK = page.locator('#i41 > div.vd3tt > div');
        const loginNOK = page.locator('#i44 > div.vd3tt > div');
        //await loginOK.waitFor({ state: 'visible' });
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

        const anotherResponse = page.getByText('Submit another response', { exact: true });
        if (await anotherResponse.isVisible()) {
            await anotherResponse.click();
        } else {
            await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdDde_mG-kfFvHrOEOwM-0Q10topRc1wHsSctcOGbsjjLMYVg/viewform');
        };
        
});
