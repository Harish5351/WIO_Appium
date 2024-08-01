require('dotenv').config();

exports.config = {
    runner: 'local',
    specs: [
        './features/DemoApp.feature'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        'bstack:options': {
            os: 'Android',
            osVersion: '10.0',
            deviceName: 'Google Pixel 3',
            app: process.env.BROWSERSTACK_APP_ID,
            projectName: 'My Project',
            buildName: 'Build 1',
            sessionName: 'Android Test',
            debug: true,
            networkLogs: true
        },
        browserName: '',
        'goog:chromeOptions': {
            w3c: true
        }
    }],
    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 1,
    services: [
        ['browserstack', {
            browserstackLocal: true,
            user: process.env.BROWSERSTACK_USERNAME,
            key: process.env.BROWSERSTACK_ACCESS_KEY
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
    }
};
