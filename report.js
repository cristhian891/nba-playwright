const reporter = require('cucumber-html-reporter');

const options = {
    theme: 'bootstrap',
    jsonFile: 'reports/report.json', // Adjust the path to your actual report file
    output: 'reports/cucumber_report.html', // Desired output path for HTML report
    reportSuiteAsScenarios: true,
    launchReport: false,
    metadata: {
        'Test Environment': 'TEST',
        'Browser': 'Chrome',
        'Platform': 'Mac',
    },
};

reporter.generate(options);