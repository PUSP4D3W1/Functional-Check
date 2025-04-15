import exp from "constants";
import fcheckLocator from "../locator/fcheckLocator";
import { expect } from "@playwright/test";
import fs from 'fs';
// const {test, expect} = require('@playwright/test');

export default class newActions {
    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */

    constructor(page) {
        this.page = page;
        this.fcheckLocator = new fcheckLocator();
        this.outerdate = page.locator(this.fcheckLocator.datepickerBox);
        this.datepicker = page.locator(this.fcheckLocator.dateInput);
        this.chooseBali = page.locator(this.fcheckLocator.projectBali);
        this.chooseJabar = page.locator(this.fcheckLocator.projectJabar);
        this.chooseKDKI = page.locator(this.fcheckLocator.projectDKI);
        this.chooseKJBR = page.locator(this.fcheckLocator.projectKJBR);
        this.chooseLampung = page.locator(this.fcheckLocator.projectLampung);
        this.chooseSulut = page.locator(this.fcheckLocator.projectSulut);
        this.chooseKJA = page.locator(this.fcheckLocator.projectKJA);
        this.selectLoginOK = page.locator(this.fcheckLocator.loginOK);
        this.selectLoginNOK = page.locator(this.fcheckLocator.loginNOK);
        this.selectViewDashOK = page.locator(this.fcheckLocator.featureOKDash);
        this.selectViewDashNOK = page.locator(this.fcheckLocator.featureNOKDash);
        this.selectViewListTargetOK = page.locator(this.fcheckLocator.featureOKLTarget);
        this.selectViewListTargetNOK = page.locator(this.fcheckLocator.featureNOKLTarget);
        this.selectCreateUpdateTargetOK = page.locator(this.fcheckLocator.featureOKCUTarget);
        this.selectCreateUpdateTargetNOK = page.locator(this.fcheckLocator.featureNOKCUTarget);
        this.selectViewCaseManagementOK = page.locator(this.fcheckLocator.featureOKViewCManagement);
        this.selectViewCaseManagementNOK = page.locator(this.fcheckLocator.featureNOKViewCManagement);
        this.selectViewListMultiTrackingOK = page.locator(this.fcheckLocator.featureOKListMTracking);
        this.selectViewListMultiTrackingNOK = page.locator(this.fcheckLocator.featureNOKListMTracking);
        this.selectCreateUpdateMultiTrackingOK = page.locator(this.fcheckLocator.featureOKCUMTracking);
        this.selectCreateUpdateMultiTrackingNOK = page.locator(this.fcheckLocator.featureNOKCUMTracking);
    }

    async goto() {
        await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdDde_mG-kfFvHrOEOwM-0Q10topRc1wHsSctcOGbsjjLMYVg/viewform');
    }

    async fillDateRange () {

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
    };

    
    async chooseProject () {
        
    }
    

    // async submit () {
    //     await this.clickSubmit.click();
    // }

}