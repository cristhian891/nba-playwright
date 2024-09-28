const { Given } = require("@cucumber/cucumber");

const ActionsPage = require("../pages/ActionsPage");

Given('I am in Actions page', async function () {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.checkActionPage();
  
});