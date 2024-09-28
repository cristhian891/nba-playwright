const { Then} = require("@cucumber/cucumber");

const LoginPage = require( "../pages/LoginPage");
const ActionsPage = require("../pages/ActionsPage");

  Then('Validate the title after login',async function () {
    // Write code here that turns the phrase above into concrete actions
    let loginPage = new LoginPage(page);
    await loginPage.validateTitle();
  });

  Then('I expect toast element contains the text {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    let actionsPage = new ActionsPage(page);
    await actionsPage.checkElementText(string);
  });