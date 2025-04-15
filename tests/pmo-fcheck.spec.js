// @ts-check
const { test, expect } = require('@playwright/test');
const { default: newActions} = require('./actions/newActions');
//const projects = JSON.parse(fs.readFileSync('./projects.json', 'utf8'));

test('PMO functional check', async ({page}) => {
    const objActions = new newActions(page);
    await objActions.goto();
    await objActions.fillChecklistDate();
});