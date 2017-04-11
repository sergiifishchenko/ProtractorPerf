describe('Search', function() {
  it('Search results should be highlighted', function() {

    browser.get('link');

    //Path to protractor-perf or C:/Users/sef/AppData/Roaming/npm/node_modules/protractor-perf
    var ProtractorPerf = require();
    var perf = new ProtractorPerf(protractor, browser);

    var el = element(by.css('.search-string-input'));
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(el), 10000);

    perf.start(); // Start measuring the metrics

    browser.controlFlow().execute(function() {
      startTime = new Date().getTime();
    });

    el.sendKeys('gross');

    var el1 = element(by.css('.highlighted.active'));
    var EC1 = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(el1), 3000);

    perf.stop(); // Stop measuring the metrics

    browser.controlFlow().execute(function() {
        var endTime = new Date().getTime();
        var elapsedTime = endTime - startTime;
        console.log('elapsedTime = ' + elapsedTime + 'ms');
    });

    if (perf.isEnabled) { //Is perf measuring enabled? Was executed by protractor-perf?
      expect(perf.getStats('meanFrameTime')).toBeLessThan(60);
      perf.printStats();
    }

    var resultsList = element(by.css('.total-result'));

    expect(resultsList.getText()).toEqual('7');
  });
});