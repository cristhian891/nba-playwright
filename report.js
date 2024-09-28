const reporter = require('multiple-cucumber-html-reporter');

const options = {
    jsonDir: 'reports', // Adjust the path to your actual report file
    reportPath: 'reports', // Desired output path for HTML report
    metadata: {
      "browser": {
        "name": "chrome",
        "version": "60",
      },
      "device": "Desktop",
      "platform": {
        "name": "osx",
        "version": "Sonoma 14.6",
      },
      displayDuration: true,
      openReportInBrowser: true,
    }
};

reporter.generate(options);