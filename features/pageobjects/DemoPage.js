const { config } = require("../../wdio.conf")
const DemoScreen = require("../../Locators/DemoScreen");
const { expect } = require("chai");

class DemoPage {
    constructor() {
        this.loginBtn = DemoScreen.loginBtn;
        this.username = DemoScreen.username;
        this.password = DemoScreen.password;
        this.verify_page = DemoScreen.verify_page;
        this.three_dots = DemoScreen.three_dots;
        this.LogInBtn = DemoScreen.LogInBtn;
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
        await this.loginBtn.click()
        const elementText = await this.verify_page.getText()
        console.log("elementText: " + elementText)
        expect(elementText).to.equal("Products")
    }
}
module.exports = DemoPage;