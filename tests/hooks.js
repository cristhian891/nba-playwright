const {  BeforeAll, AfterAll, After, setDefaultTimeout, AfterStep } = require("@cucumber/cucumber");
const { chromium, expect } = require("@playwright/test");
const fs = require('fs');

setDefaultTimeout(60000)


// Launch the browser
BeforeAll(async function () {

    global.browser = await chromium.launch({
        headless: false,
        slowMo: 1000,
        browserContextOptions: {
            viewport: null,
        },
    });
    //const context = await browser.newContext();
    //page = await context.newPage();
    global.page = await browser.newPage();
    url = 'https://management.cnbal-eng.consumer-dataengapis.com/action-templates';
    await page.goto(url);
    const headLocator = await page.locator('body > div.container > div > div.modal-content.background-customizable.modal-content-mobile.visible-md.visible-lg > div.modal-body > div:nth-child(2) > div:nth-child(2) > div > div > span');
    await expect(headLocator).toBeVisible();
    await page.getByRole('textbox', { name: 'Username' }).fill("cpreciado@simplemachines.co.uk");  
    await page.getByRole('textbox', { name: 'Password' }).fill("Brighton2024..");
    await page.getByRole('button', {name: 'Submit'}).click();
        
});
 
 
// Quit the browser
AfterAll(async function () {
    await global.browser.close();
});
 
 
// Take a screenshot for each scenario
AfterStep(async function (scenario) {
    
        const screenshotDir = 'screenshots';
        const screenshotPath = `screenshots/${Date.now()}_${scenario.result.status}.png`;
        
        // Ensure the screenshots directory exists
        if (!fs.existsSync(screenshotDir)){
            fs.mkdirSync(screenshotDir);
        }

        await page.screenshot({ path: screenshotPath, fullPage: true });

        // Save the screenshot path in scenario context for reporting
        this.attach(fs.readFileSync(screenshotPath), 'image/png');
    
});
