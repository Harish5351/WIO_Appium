const { config } = require("../../wdio.conf")
const calculatorScreen = require("../../Locators/CalculatorScreen");

class CalculatorPage {

  constructor(){
    this.tap_four = calculatorScreen.tap_four;
    this.tap_add = calculatorScreen.tap_add;
    this.tap_equal = calculatorScreen.tap_equal;
    this.verify_result = calculatorScreen.verify_result;
}

    async tapFour() {
      await this.tap_four.click();
    }
  
    async tapAdd() {
      await this.tap_add.click();
    }
  
    async tapEquals() {
      await this.tap_equal.click();
    }
  
    async verifyTotal() {
      const result = await this.verify_result.getText();
      expect(result).toEqual(String(8));
    }
  }
  
  module.exports = CalculatorPage;
  