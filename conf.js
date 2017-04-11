exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec1.js'],
  //browser:'chrome',

  onPrepare: function() {
    browser.driver.manage().window().maximize();
    browser.ignoreSynchronization = true;
  },

    capabilities: {
      browserName: 'chrome',
      //chromeOptions: {
      //  args: [
      //      '--start-maximized'
      //  ]
      //}
   },
    // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
      showColors: true,
      defaultTimeoutInterval: 60000,
      isVerbose:true,
      includeStackTrace:true

    }
  //selenium: 'http://localhost:4444/wd/hub',
  //seleniumPort: 4444,

};