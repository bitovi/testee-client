var _ = {
  extend: require('lodash/assign'),
  noop: require('lodash/noop'),
  each: require('lodash/each'),
  bind: require('lodash/bind'),
  indexOf: require('lodash/indexOf'),
  find: require('lodash/find'),
  clone: require('lodash/clone')
};
var guid = require('./../guid');

function TesteeReporter(runner) {
  var self = this;
  var methodMappings = {
    'test end': 'testEnd',
    'suite end': 'suiteEnd',
    'hook end': 'hookEnd'
  };
  var pipe = function(type, converter) {
    runner.on(type, function() {
      var data = converter.apply(converter, arguments);
      var method = methodMappings[type] || type;
      self.api[method](data);
    });
  };

  this.originalReporter = new this.OldReporter(runner);
  this.ids = [];
  this.uuids = {};
  this.last = {};
  this.total = 0;
  this.pending = 0;
  this.failed = 0;
  this.runId = guid();

  pipe('start', function() {
    return {
      environment: navigator.userAgent,
      runner: 'Mocha',
      time: new Date().getTime(),
      id: self.runId
    };
  });

  pipe('end', function(data) {
    var diff = self.diff(data);

    diff.id = self.runId;
    diff.total = self.total;
    diff.failed = self.failed;
    diff.pending = self.pending;
    diff.passed = self.total - self.failed - self.pending;

    return diff;
  });

  pipe('suite', function(data) {
    var diff = self.diff(data);
    if (data.root) {
      diff.parent = self.runId;
    }

    return diff;
  });

  _.each(['suite end', 'pending', 'test', 'test end', 'pass'], function(name) {
    pipe(name, _.bind(self.diff, self));
  });

  runner.on('hook', function(hook) {
    // hook may already have been created since they are often run multiple times
    var hookAlreadyExists = _.find(self.ids, function(phase) { return phase.fn === hook.fn; });
    var data = self.diff(hook);
    data.status = 'running';
    data.state = 'running';
    if (hookAlreadyExists) {
      self.api['updateHook'](data);
    } else {
      self.api['createHook'](data);
    }
  });

  runner.on('hook end', function(hook) {
    var data = self.diff(hook);
    data.status = 'ended';
    data.state = 'ended';
    self.api['updateHook'](data);
  });

  runner.on('fail', function(phase, err) {
    var data = self.diff(phase);
    data.err = {
      message: err.message,
      stack: err.stack || ''
    };
    if (phase.type === 'hook') {
      data.status = 'failed';
      data.state = 'failed';
      self.api['updateHook'](data);
    } else {
      self.api['fail'](data);
    }
  });

  runner.on('pending', function() {
    self.pending++;
    self.total++;
  });

  runner.on('fail', function() {
    self.failed++;
    self.total++;
  });

  runner.on('pass', function() {
    self.total++;
  });
}

TesteeReporter.prototype.objectify = function(data) {
  var result = {};
  var self = this;

  _.each(data, function(value, key) {
    var isPrivate = key.indexOf('_') === 0 || key.indexOf('$') === 0;
    if (typeof value === 'object' && !isPrivate) {
      var idx = _.indexOf(self.ids, value);
      if (!!~idx) {
        result[key] = self.uuids[idx];
      }
    } else if (typeof value !== 'function' && !isPrivate && value !== undefined) {
      result[key] = value;
    }
  });
  return result;
};

TesteeReporter.prototype.diff = function(obj) {
  var self = this;
  var current = self.objectify(obj);
  var result = {};
  var idx = _.indexOf(self.ids, obj);

  if (!~idx) {
    idx = self.ids.push(obj) - 1;
    self.uuids[idx] = guid();
    result = _.clone(current || {});
  } else {
    _.each(current, function(value, key) {
      if (self.last[idx][key] !== value) {
        result[key] = value;
      }
    });
  }

  self.last[idx] = current;
  result.id = self.uuids[idx];

  return result;
};

module.exports = function(mocha, api) {
  TesteeReporter.prototype.api = api;
  TesteeReporter.prototype.OldReporter = mocha._reporter;
  mocha.reporter(TesteeReporter);
};

module.exports.Reporter = TesteeReporter;