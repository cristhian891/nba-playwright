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

When('I select {string} tab',async function (tabName) {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.selectTabinActions(tabName);
});

When('I add Snippet with Select Feature {string}',async function (feature) {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.clickOnSnippet();
  await actionsPage.businessRuleSelectFeature(feature);
});

When('I add Rule with Schema {string}',async function (schema) {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.clickOnRule();
  await actionsPage.businessRulesAddRule(schema);
});

When('I delete all business rules',async function () {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.deleteAllBusinessRules();
});

When('I set {string} to the inputfield BAU ranking',async function (number) {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.enterBAUranking(number);
});

When('I add {string} group for aproval',async function (groupName) {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.addGroupForApproval(groupName);
});

When('I save the group for aproval',async function () {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.clickOnSaveApprovers();
});

When('I delete {string} group for aproval',async function (groupName) {
  // Write code here that turns the phrase above into concrete actions
  let actionsPage = new ActionsPage(page);
  await actionsPage.deleteGroupForApproval(groupName);
});