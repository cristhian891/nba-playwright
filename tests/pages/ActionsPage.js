const { chromium, expect } = require("@playwright/test");

const LoginPage = require( "./LoginPage");


class ActionsPage{

    constructor(page){
        this.page = page;
        this.url = 'https://management.cnbal-eng.consumer-dataengapis.com/action-templates';
        this.createActionLocator = '//*[@id="root"]/div[1]/div/div/div[2]/div[2]/a';
        this.nameInputLocator = "input[name='name']";
        this.templateIDInputLocator = "input[name='id']";
        this.descriptionInputLocator = "textarea[name='description']";
        this.createActionButton = "//*[@id='root']/div[1]/div/div/div[2]/div[2]/button";
        this.toastMessage = ".Toastify__toast > div[role=alert]";
        this.alertMessage = "div[role=alertdialog]"
        this.saveActionButton = "//*[@id='root']/div[1]/div/div/div[2]/div[2]/button[2]";

        //Business rules tab
        this.snippetButton = "+ Snippet";
        this.ruleButton ="+ Rule";
        this.selectFeatureDropdown = ".rule-fields > div:nth-child(2) .select__control";
        this.selectSchemaDropdown = "div[data-testid='rule']:last-child > .rule-fields > div:nth-child(1) .select__control"
        this.ruleSelectFeatureDropdown = "div[data-testid='rule']:last-child > .rule-fields > div:nth-child(2) .select__control"
        this.rulesDeleteButtons = "button[name='delete']" //Array of locators

        //Model Configuration tab
        this.BAUrankingInputLocator = "[name='bauRanking']";
        this.mandatoryRankingInputLocator = "[name='mandatoryRanking']";
        this.planogramRankingInputLocator = "[name='planogramRanking']";

        this.groupApprovalField = "#userGroups";
        this.saveApproversButton = "Button:has-text('Save Approvers')";
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
        await this.page.url().includes("action-templates");
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

    async selectTabinActions(tabName){
        switch(tabName) {
            case "Action":
                await this.page.getByText("Action").click()
                break;
            case "Products":
                await this.page.getByText("Products").click()
              break;
            case "Business Rules":
                await this.page.getByText("Business Rules").click()
              break;
            case "Model Configuration":
                await this.page.getByText("Model Configuration").click()
                break;
            case "ATC Cartegories":
                await this.page.getByText("Model Configuration").click()
                break;
            case "Content":
                await this.page.getByText("Model Configuration").click()
                break;
            default:
              
          }
    }

    async clickOnSnippet(){
        await this.page.getByText(this.snippetButton).click();
    }

    async clickOnRule(){
        await this.page.getByText(this.ruleButton).click();
    }

    async businessRuleSelectFeature(feature){
        await this.page.locator(this.selectFeatureDropdown).click();
        await this.page.keyboard.type(feature);
        await this.page.keyboard.press('Enter');

    }

    async businessRulesAddRule(schema){
        await this.page.locator(this.selectSchemaDropdown).click();
        await this.page.keyboard.type(schema);
        await this.page.keyboard.press('Enter');

        await this.page.locator(this.ruleSelectFeatureDropdown).click();
        await this.page.keyboard.type(schema);
        await this.page.keyboard.press('Enter');
    }

    async deleteAllBusinessRules(){
        await page.waitForTimeout(2000);
        const elements = this.page.locator(this.rulesDeleteButtons);
        const count = await elements.count();

        for (let i = count-1; i >= 0; i--) {
            const element = elements.nth(i); // Get the i-th element
            // Perform actions on the element, e.g., click, get text, etc.
            await element.click(); // Example action: click on the element
            await this.page.waitForTimeout(2000);
          }
    }

    async checkIfBusinessRulesPresent(){
        await expect(this.page.locator(this.rulesDeleteButtons)).not.toBeVisible();
    }

    async enterBAUranking(number){
        await this.page.locator(this.BAUrankingInputLocator).fill(number);
    }

    async addGroupForApproval(groupName){
        await this.page.locator(this.groupApprovalField).click();
        await this.page.keyboard.type(groupName);
        await this.page.keyboard.press('Enter');
    }

    async clickOnSaveApprovers(){
        await this.page.locator(this.saveApproversButton).click();
    }

    async deleteGroupForApproval(groupName){
        const stringLocator = `[aria-label='Remove ${groupName}']`;
        await this.page.locator(stringLocator).click();
    }

    async checkForAlerDialog(text){
        await expect(this.page.locator(this.alertMessage)).toBeVisible();
        await expect(this.page.locator(this.alertMessage)).toContainText(text);
    }

}

module.exports = ActionsPage