var _ = require('underscore');
var Deferred = require('es6-promise').Promise;

var ready = require('./docready');
var Runner = require('./runner');
var service = require('./service');

var setupQunit = require('./adapters/qunit');
var setupJasmineLegacy = require('./adapters/jasmine-legacy');
var setupMocha = require('./adapters/mocha');

ready(function() {
  var options = window.Testee = window.Testee || {};
  options.socket = options.socket || io();

  _.defaults(options, {
    runs: service('runs', options.socket),
    suites: service('suites', options.socket),
    tests: service('tests', options.socket),
    coverages: service('coverages', options.socket),
    connect: new Deferred(function(resolve) {
      var done = function() {
        // We need to add a timeout because PhantomJS for some reason
        // sends the runs::create event too soon
        _.delay(function() {
          resolve(options.socket);
        }, 250);
      };

      if(!options.socket.connected) {
        options.socket.on('connect', done);
      } else {
        done();
      }
    })
  });

  var runner = Runner(options);
  var init = function() {
    if (window.QUnit) {
      setupQunit(window, runner);
    }

    if (window.jasmine && window.jasmine.version_ && window.jasmine.version_.major === 1) {
      setupJasmineLegacy(window, runner);
    }

    if (window.mocha && window.Mocha) {
      setupMocha(window, runner);
    }
  };

  if(options.autoinit === false) {
    window.Testee.init = init;
  } else {
    init();
  }
});
