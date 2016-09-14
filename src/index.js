require('core-js/client/core');

var _ = {
    defaults: require('lodash/defaults'),
    delay: require('lodash/delay')
};
var io = require('socket.io-client/socket.io');
var feathers = require('feathers/client');
var socketio = require('feathers-socketio/client');

var ready = require('./docready');
var Runner = require('./runner');
var setupQunit = require('./adapters/qunit');
var setupJasmine1 = require('./adapters/jasmine-legacy');
var setupJasmine = require('./adapters/jasmine');
var setupMocha = require('./adapters/mocha');

ready(function() {
  var options = window.Testee = window.Testee || {};

  if(!options.app) {
    options.socket = options.socket || io();
    options.app = feathers().configure(socketio(options.socket));
  }

  _.defaults(options, {
    runs: options.app.service('api/runs'),

    suites: options.app.service('api/suites'),

    tests: options.app.service('api/tests'),

    coverages: options.app.service('api/coverages'),

    runner: function() {
      if(!this._runner) {
        this._runner = Runner(options);
      }
      return this._runner;
    },

    canInitialize: function() {
      return window.QUnit || (window.jasmine && window.jasmine.version_ && window.jasmine.version_.major === 1) ||
        (window.jasmine && window.jasmine.version && window.jasmine.version.split('.')[0] === '2')  || (window.mocha && window.Mocha);
    },

    init: function() {
      if (window.QUnit) {
        this.initQUnit(window.QUnit);
      }

      if (window.jasmine && window.jasmine.version_ && window.jasmine.version_.major === 1) {
        this.initJasmine1(window.jasmine);
      }

      if (window.jasmine && window.jasmine.version && window.jasmine.version.split('.')[0] === '2') {
        this.initJasmine(window.jasmine);
      }

      if (window.mocha && window.Mocha) {
        this.initMocha(window.mocha);
      }
    },

    initQUnit: function(QUnit) {
      setupQunit(QUnit, this.runner(), window);
    },

    initJasmine1: function(jasmine) {
      setupJasmine1(jasmine, this.runner(), window);
    },

    initJasmine: function(jasmine) {
      setupJasmine(jasmine, this.runner(), window);
    },

    initMocha: function(mocha) {
      setupMocha(mocha || window.mocha, this.runner(), window);
    },

    connect: new Promise(function(resolve) {
      var done = function() {
        // We need to add a timeout because PhantomJS for some reason
        // sends the api/runs::create event too soon
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

  if(options.canInitialize()) {
    options.init();
  }
});