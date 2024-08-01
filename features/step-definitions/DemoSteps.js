const { When, Then } = require('@cucumber/cucumber');
const {DemoPage} = require('../pageobjects/DemoPage');
const demoPage = new DemoPage();

When('User is on home page', async () => {
  await demoPage.homepage()
});

When('User click on login button', async () => {
  await demoPage.clikButton();
});

When('User enters username and password', async () => {
  await demoPage.enterCredentials();
});

Then('User verifies dashboard displayed', async () => {
  await demoPage.verifyPage();
});
