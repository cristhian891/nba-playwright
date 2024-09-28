const { chromium, expect } = require("@playwright/test");


class LoginPage{

    constructor(page){
        this.page = page;
        this.url = 'https://management.cnbal-eng.consumer-dataengapis.com/action-templates'; 
    }

    async gotoLoginPage(){
        await page.goto(this.url);
    };

    async enterUserNamePassword(username, password) {
        await this.page.getByRole('textbox', { name: 'Username' }).fill(username);  
        await this.page.getByRole('textbox', { name: 'Password' }).fill(password); 
    }

    async clickSubmitButton(){
        await this.page.getByRole('button', {name: 'Submit'}).click();
    }

    async validateTitle() {
        await this.page.waitForSelector('#root > div.flex.h-screen.flex-row.antialiased > div > div > div:nth-child(2) > div.flex.items-center.gap-2.ml-auto > a');
        await expect(this.page.locator('#root > div.flex.h-screen.flex-row.antialiased > div > div > div:nth-child(2) > div:nth-child(1) > h1')).toBeVisible();
    }

}

module.exports = LoginPage