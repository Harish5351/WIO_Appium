require('dotenv').config();
const path = require('path')
exports.config = {
    user: 'harishchandraeka_UmOGRA',
    key: 'NWvWfmkS7TKyvDWmNCLo',
    // app:'bs://9c30b24f037d35e5a0af6171d96ab2a7a04564e0',
    runner: 'local',
    specs: [
        './features/Demo.feature'
    ],
    exclude: [],
    maxInstances: 10,
    // app: 'bs://9c30b24f037d35e5a0af6171d96ab2a7a04564e0',
    capabilities: [{
        'bstack:options': {
            deviceName: "Samsung Galaxy S21",
            osVersion: "11.0",
            appiumVersion: "1.22.0",
            projectName: "My Android Project",
            buildName: "Build 2.0",
            sessionName: "Android App Test",
            // app: "bs://9c30b24f037d35e5a0af6171d96ab2a7a04564e0" // Place the app URL here
        },
        // browserName: ""
        // app: "bs://9c30b24f037d35e5a0af6171d96ab2a7a04564e0"
        // browserName: '',
        // 'goog:chromeOptions': {
        //     w3c: true
        // }
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
            app: "bs://9c30b24f037d35e5a0af6171d96ab2a7a04564e0"
            // user: process.env.BROWSERSTACK_USERNAME,
            // key: process.env.BROWSERSTACK_ACCESS_KEY
        }]
    ],
    // services: ['browserstack'],
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
    }
};
