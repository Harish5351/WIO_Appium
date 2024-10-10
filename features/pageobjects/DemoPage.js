const { config } = require("../../wdio.conf")
const DemoScreen = require("../../Locators/DemoScreen");
// const { expect } = require("chai");

class DemoPage {
    constructor() {
        this.loginBtn = DemoScreen.loginBtn;
        this.username = DemoScreen.username;
        this.password = DemoScreen.password;
        this.verify_page = DemoScreen.verify_page;
        this.three_dots = DemoScreen.three_dots;
        this.LogInBtn = DemoScreen.LogInBtn;
        this.ButtonName = DemoScreen.ButtonName;
        this.assertMessage = DemoScreen.assertMessage;
        this.getButton = DemoScreen.getButton;
        this.getAssertMessage = DemoScreen.getAssertMessage;
        this.PriceMenuBtn = DemoScreen.PriceMenuBtn;
        this.DropdownPricevalue = DemoScreen.DropdownPricevalue;
        this.PriceList = DemoScreen.PriceList;
        this.FirstItemPrice = DemoScreen.FirstItemPrice;
        this.selectFirstItem = DemoScreen.selectFirstItem;
        this.addToCart = DemoScreen.addToCart;
        this.cartIcon = DemoScreen.cartIcon;
        this.productInCart = DemoScreen.productInCart;
    }

    async homepage() {
        console.log('User is on homepage')
    }

    async clickButton() {
        await this.three_dots.click()
        await this.LogInBtn.click()
    }

    async enterCredentials() {
        // await this.username.type("bob@example.com");
        const userName = await this.username;
        await userName.waitForDisplayed({ timeout: 3000 });
        await userName.setValue("bob@example.com");

        const passwordField = await this.password;
        await passwordField.waitForDisplayed({ timeout: 3000 });
        await passwordField.setValue("10203040");
    }

    async verifyPage() {
        // await this.loginBtn.click()
        const elementText = await this.verify_page.getText()
        console.log("elementText: " + elementText)
        // expect(elementText).to.equal("Products")
        expect(elementText).toHaveText("Products")
    }

    async enterValues(uname, pwd) {
        const userName = await this.username;
        await userName.waitForDisplayed({ timeout: 3000 });
        await userName.setValue(uname);

        const passwordField = await this.password;
        await passwordField.waitForDisplayed({ timeout: 3000 });
        await passwordField.setValue(pwd);
    }
    async tapButton() {
        // await this.three_dots.click()
        const button = await this.loginBtn;
        // const button = await this.getButton.replace('text', optionName)
        await button.click()
    }
    async verifyMessage(message) {
        const selector = `//android.widget.TextView[@text="${message}"]`
        // const element = await this.assertMessage.replace('text', message)
        const element = await $(selector)
        const elementText = await element.getText()
        expect(elementText).toHaveText(message)
    }
    async clickMenu() {
        const menuBtn = await this.PriceMenuBtn;
        await menuBtn.click()
    }
    async ascendingMenuBtn() {
        const element = await this.DropdownPricevalue;
        await element.click()
    }
    async verifyList() {
        let elements = await this.PriceList;
        let values = [];

        for (let element of elements) {
            let textValue = await element.getText();
            console.log("Raw text value:", textValue); // Debugging: print the raw text value

            let elementValue = parseFloat(textValue);
            console.log("Parsed numeric value:", elementValue); // Debugging: print the parsed numeric value

            values.push(elementValue);
        }

        console.log("Values before sorting:", values);

        // Sorting the values in ascending order
        values.sort((a, b) => a - b);

        console.log("Values after sorting:", values);

    }

    async verifyPrice() {
        const priceValue = await this.FirstItemPrice
        driver.pause(2000)
        const value = await priceValue.getText()
        const exactValue = value.substring(1,)
        console.log("Value of first Item: " + exactValue)
    }
    async clickItem() {
        await this.selectFirstItem.click()
    }
    async cartButton() {
        await this.addToCart.click()
    }
    async cartMenu() {
        await this.cartIcon.click()
    }
    async verifyItem() {
        const element = await this.productInCart
        await element.waitForDisplayed()
        if(element){
            console.log("Item found in cart")
        }
    }
}
module.exports = DemoPage;