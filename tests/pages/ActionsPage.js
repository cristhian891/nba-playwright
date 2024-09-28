const { chromium, expect } = require("@playwright/test");

const LoginPage = require( "./LoginPage");


class ActionsPage{

    constructor(page){
        this.page = page;
        this.createActionLocator = '//*[@id="root"]/div[1]/div/div/div[2]/div[2]/a';
        this.nameInputLocator = "input[name='name']";
        this.templateIDInputLocator = "input[name='id']";
        this.descriptionInputLocator = "textarea[name='description']";
        this.createActionButton = "//*[@id='root']/div[1]/div/div/div[2]/div[2]/button";
        this.toastMessage = ".Toastify__toast > div[role=alert]";
        this.saveActionButton = "//*[@id='root']/div[1]/div/div/div[2]/div[2]/button[2]"
        
    }

    async createAction(){
        await this.page.locator(this.createActionLocator).click();
    };

    async fillActionInformation(name, templateID, description){
        await this.page.locator(this.nameInputLocator).fill(name);
        await this.page.locator(this.templateIDInputLocator).fill(templateID);
        await this.page.locator(this.descriptionInputLocator).fill(description);
    }

    async clickCreateAction(){
        await this.page.locator(this.createActionButton).click()
    }

    async checkActionPage(){
        await page.url().includes("action-templates");

    };

    async checkElementText(text){
        await expect(this.page.locator(this.toastMessage)).toBeVisible();
        await expect(this.page.locator(this.toastMessage)).toContainText(text);
    }

    async lookforAction(templateID){
        let loginPage = new LoginPage(page)
        const searchUrl = loginPage.url + "/" + templateID
        await this.page.goto(searchUrl)
    }

    async editActionInformation(name, description){
        await this.page.locator(this.nameInputLocator).fill('');
        await this.page.locator(this.descriptionInputLocator).fill('');

        await this.page.locator(this.nameInputLocator).fill(name);
        await this.page.locator(this.descriptionInputLocator).fill(description);
    }

    async saveAction(){
        await this.page.locator(this.saveActionButton).click();
    }

}

module.exports = ActionsPage