const { When, Then } = require('@cucumber/cucumber');
const DemoPage = require('../pageobjects/DemoPage');
const demoPage = new DemoPage();

When('User is on home page', async () => {
  await demoPage.homepage()
});

When('User click on login button', async () => {
  await demoPage.clickButton();
});

When('User enters username and password', async () => {
  await demoPage.enterCredentials();
});

Then('User verifies dashboard displayed', async () => {
  await demoPage.verifyPage();
});
When('User enters {string} and {string}', async (uname, pwd) => {
  await demoPage.enterValues(uname, pwd)
})
When('User clicks on Login button', async () => {
  await demoPage.tapButton()
})
Then('User verifies {string} displayed on screen', async (message) => {
  await demoPage.verifyMessage(message)
})
When('User clicks on price menu', async () => {
  await demoPage.clickMenu()
})
When('User clicks on ascending button', async () => {
  await demoPage.ascendingMenuBtn()
})
When('User verifies list displayed in ascending order', async () => {
  await demoPage.verifyList()
})
// Then('User verifies first item price', () => {

// })
When('User click on first item', async () => {
  await demoPage.clickItem()
})
When('User click on add to cart button', async () => {
  await demoPage.cartButton()
})
When('User again click on kart menu', async () => {
  await demoPage.cartMenu()
})
Then('User verifies added item present', async () => {
  await demoPage.verifyItem()
})