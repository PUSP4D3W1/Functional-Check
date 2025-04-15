import exp from "constants";
import locatorDua from "../locator/locatorDua";
import { expect } from "@playwright/test";
// const {test, expect} = require('@playwright/test');

export default class newActions {
    /**
     * 
     * @param {import ('@playwright/test').Page} page 
     */

    constructor(page) {
        this.page = page;
        this.locatorDua = new locatorDua();
        this.selectdate = page.locator(this.locatorDua.datepicker);
        this.clickSubmit = page.locator(this.locatorDua.submit);
    }

    async goto() {
        await page.goto('https://docs.google.com/forms/d/e/1FAIpQLSdDde_mG-kfFvHrOEOwM-0Q10topRc1wHsSctcOGbsjjLMYVg/viewform');
    }

    async fillChecklistDate () {

        // Click the outer wrapper to focus the input (if needed)
        await page.click('.rFrNMe.yqQS1.hatWr.zKHdkd .aCsJod.oJeWuf');
    
        // Wait for the input to be visible
        const dateInput = page.locator('#mG61Hd .whsOnd.zHQkBf');
        await dateInput.waitFor({ state: 'visible' });
    
        // Fill the date (Playwright's fill replaces existing text by default)
        await dateInput.fill('03/25/2025');
    
        // Optional wait to simulate user pause
        await page.waitForTimeout(6000);
    
        // Assert the value was filled correctly
        await expect(dateInput).toHaveValue('03/25/2025');
    
        // Optionally click the Submit button
        // await page.getByRole('button', { name: 'Submit' }).click(); // or use locator if 'Submit' text is localized
    };
    

    // async submit () {
    //     await this.clickSubmit.click();
    // }

}