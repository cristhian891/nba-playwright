const { Then} = require("@cucumber/cucumber");

const ActionsPage = require("../pages/ActionsPage");

  Then('I expect toast element contains the text {string}', async function (string) {
    // Write code here that turns the phrase above into concrete actions
    let actionsPage = new ActionsPage(page);
    await actionsPage.checkElementText(string);
  });