const { When } = require("@cucumber/cucumber");

const ActionsPage = require("../pages/ActionsPage");

When('I want to create an Action',async function () {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.createAction();
});

When('I want to create an Action with {string} {string} {string}', async function (name, templateId, description) {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.fillActionInformation(name, templateId, description);
});

When('I look for an Action {string}',async function (templateID) {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.lookforAction(templateID);
});

When('I edit the fields {string} and {string}',async function (name, description) {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.editActionInformation(name, description);
});

When('I click on Create button',async function () {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.clickCreateAction();
});

When('I save the action changes',async function () {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.saveAction();
});