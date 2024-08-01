const { When, Then } = require('@cucumber/cucumber');
const CalculatorPage = require('../../pageobjects/CalculatorPage');
const calculator = new CalculatorPage();

When('User taps on four', async () => {
  await calculator.tapFour();
});

When('User taps on +', async () => {
  await calculator.tapAdd();
});

When('User taps on four', async () => {
  await calculator.tapFour();
});

When('User taps on equals', async () => {
  await calculator.tapEquals();
});

Then('User verifies total is 8', async () => {
  await calculator.verifyTotal(8);
});
