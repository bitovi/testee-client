var _ = require('underscore');
var Runner = require('./runner');
var service = require('./service');

var setupQunit = require('./adapters/qunit');
var setupJasmineLegacy = require('./adapters/jasmine-legacy');
var setupMocha = require('./adapters/mocha');

var options = window.Testee = window.Testee || {};
options.socket = options.socket || io.connect();

_.defaults(options, {
	runs: service('runs', options.socket),
	suites: service('suites', options.socket),
	tests: service('tests', options.socket),
  coverages: service('coverages', options.socket)
});

var runner = Runner(options);

if (window.QUnit) {
	setupQunit(window, runner);
}

if (window.jasmine && window.jasmine.version_ && window.jasmine.version_.major === 1) {
	setupJasmineLegacy(window, runner);
}

if (window.mocha && window.Mocha) {
  setupMocha(window, runner);
}
