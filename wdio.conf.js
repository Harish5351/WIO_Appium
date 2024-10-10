require('dotenv').config();
const path = require('path')
exports.config = {
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    runner: 'local',
    specs: [
        './features/Demo.feature'
    ],
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'allure-results',
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
        }]
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        'bstack:options': {
            deviceName: "Samsung Galaxy S21",
            osVersion: "11.0",
            appiumVersion: "1.22.0",
            projectName: "My Android Project",
            buildName: "Build 2.0",
            sessionName: "Android App Test"
        },
    }],
    logLevel: 'debug',
    path: '/wd/hub',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    services: [
        ['browserstack', {
            browserstackLocal: true,
            app: process.env.BROWSERSTACK_APP_ID
        }]
    ],
    framework: 'cucumber',
    cucumberOpts: {
        require: ['./features/step-definitions/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },
    onPrepare: function (config, capabilities) {
        console.log('Preparing tests...');
    },
    onComplete: function (exitCode, config, capabilities, results) {
        console.log('Tests completed.');
    },
    beforeSuite: function (suite) {
        console.log('Starting suite:', suite.title);
        browser.addCommand('takeScreenshot', async function () {
            await browser.saveScreenshot(join('errorShots', `${Date.now()}.png`));
        });
    },

    afterTest: function (test, context, { error, result, duration, passed, retries }) {
        if (!passed) {
            browser.takeScreenshot();
        }
    },
};
