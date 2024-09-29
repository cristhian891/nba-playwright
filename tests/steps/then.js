const { Then} = require("@cucumber/cucumber");

const ActionsPage = require("../pages/ActionsPage");

  Then('I expect toast element contains the text {string}', async function (text) {
    // Write code here that turns the phrase above into concrete actions
    let actionsPage = new ActionsPage(page);
    await actionsPage.checkElementText(text);
  });

  Then('No business rules are displayed', async function () {
    // Write code here that turns the phrase above into concrete actions
    let actionsPage = new ActionsPage(page);
    await actionsPage.checkIfBusinessRulesPresent();
  });

  Then('I expect that alert dialog contains the text {string}', async function (message) {
    // Write code here that turns the phrase above into concrete actions
    let actionsPage = new ActionsPage(page);
    await actionsPage.checkForAlerDialog(message);
  });