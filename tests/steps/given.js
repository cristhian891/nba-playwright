const { Given } = require("@cucumber/cucumber");

const LoginPage = require( "../pages/LoginPage");
const ActionsPage = require("../pages/ActionsPage");

Given('I navigate to the Website', async function () {
    // Write code here that turns the phrase above into concrete actions
    let loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    
  });

  Given('I am logged in with {string}', async function (credentials) {
    // Write code here that turns the phrase above into concrete actions
    let loginPage = new LoginPage(page);
    await loginPage.loginWithCredentials(credentials);
    
  });

  Given('I am in Actions page', async function () {
    // Write code here that turns the phrase above into concrete actions
    let actionsPage = new ActionsPage(page);
    await actionsPage.checkActionPage();
    
  });
  
