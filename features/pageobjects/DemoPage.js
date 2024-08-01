const { config } = require("../../wdio.conf")
const DemoScreen = require("../../Locators/DemoScreen");

class DemoPage{
    constructor(){
        this.loginBtn = DemoScreen.loginBtn;
        this.username = DemoScreen.username;
        this.password = DemoScreen.password;
        this.verify_page = DemoScreen.verify_page;
        this.three_dots = DemoScreen.three_dots;
    }

    async homepage(){
        console.log('User is on homepage')
    }

    async clickButton(){
        await this.three_dots.click()
        await this.loginBtn.click()
    }

    async enterCredentials(){
        await this.username.type("bob@example.com");
        await this.password.type("10203040");
    }

    async verifyPage(){
        await this.loginBtn.click()
        const elementText = await this.verify_page.getText()
        console.log("elementText: " +elementText)
    }
}
module.exports = DemoPage;