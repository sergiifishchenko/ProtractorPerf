describe('  Search', function() {
  it('Document should be opened', function() {

    browser.get('https://password&usetname@link');
    browser.get('link/');

    //Path to protractor-perf or C:/Users/sef/AppData/Roaming/npm/node_modules/protractor-perf
    var ProtractorPerf = require();
    var perf = new ProtractorPerf(protractor, browser);

    var el = element(by.css('#clickable-tab-ultralite'));
    var EC = protractor.ExpectedConditions;
    browser.wait(EC.elementToBeClickable(el), 90000);

    browser.controlFlow().execute(function() {
      startTime = new Date().getTime();
    });

    perf.start(); // Start measuring the metrics
    el.click();

    var el1 = element(by.css('.page-state'));
    var EC1 = protractor.ExpectedConditions;
    browser.wait(EC.visibilityOf(el1), 20000);

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

    var resultsList = element(by.css('#page-count'));

    expect(resultsList.getText()).toEqual('63');
  });
});