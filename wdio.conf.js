exports.config = {
    runner: 'local',
    port: 4723,
    specs: [
      './features/**/*.feature'
    ],
    exclude: [],
    maxInstances: 1,
    capabilities: [{
      platformName: 'Android',
      browserName: '',
      'appium:deviceName': 'Redmi_9A', // Ensure this matches your real device name
      'appium:platformVersion': '10',
      'appium:automationName': 'UiAutomator2',
      'appium:appPackage': 'com.miui.calculator', // Check if this is correct
      'appium:appActivity': 'com.miui.calculator.cal.CalculatorActivity' // Check if this is correct
    }],
    screenshotPath: './Screenshots',
    screenshotOnReject: true,
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            command: 'appium',
            args: {
                'appium:port': 4723
            }
        }]
    ],
    framework: 'cucumber',
    reporters: ['spec'],
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
    // Hooks
    onPrepare: function (config, capabilities) {
        console.log('Preparing tests...');
        // Custom preparation logic if needed
    },
    onComplete: function (exitCode, config, capabilities, results) {
        console.log('Tests completed.');
    }
};
