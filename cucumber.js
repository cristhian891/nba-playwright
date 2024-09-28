module.exports = {
    default: {
      require: [
        "tests/steps/*.js",
        "tests/hooks.js",
      ],
      paths: ["tests/features/**/*.feature"],       // Path to .feature files (fix: only .feature files)
      format: [
        "json:reports/report.json",  
      ],   
    },
  };


