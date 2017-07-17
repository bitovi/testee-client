function inRange(expected, current, range) {
  return (current - range) <= expected && (current + range) >= expected;
}

// Recursively compares if an actual object has the same properties
function compare (assert, reference, actual, name) {
  var expected, current;
  for (var key in reference) {
    expected = reference[key];
    current = actual[key];

    if (expected instanceof RegExp) {
      assert.ok(expected.test(current), name + ': ' + current + ' matches ' + expected.toString());
    } else if (typeof reference[key] === 'object') {
      compare(assert, expected, current, name + ' ' + key);
    } else if(key === 'duration') {
      assert.ok(inRange(expected, current, 20), name + ' ' + key + ' === ' + expected + '(+/- 20)');
    } else {
      assert.equal(expected, current, name + ' ' + key + ' === ' + expected);
    }
  }
}

function mountMockApp (onLog) {
  var app = window.feathers();
  var expectationService = function(name) {
    return {
      create: function(data, params, cb) {
        onLog(name + '::create', data, function () {
          cb(null, data);
        });
      },
      patch: function(id, data, params, cb) {
        onLog(name + '::patch', data, function () {
          cb(null, data);
        });
      }
    };
  };

  app.use('api/runs', expectationService('api/runs'));
  app.use('api/suites', expectationService('api/suites'));
  app.use('api/tests', expectationService('api/tests'));
  app.use('api/coverages', expectationService('api/coverages'));

  window.TesteeMock = {app: app};

  return function unmountMockApp () {
    delete window.TesteeMock;
  };
}

function waitForNLogs (logCount, callback) {
  var results = [];
  var unmountMockApp = mountMockApp(function (type, data, next) {
    results.push({
      name: type,
      data: data
    });
    next();

    logCount = logCount - 1;
    if (logCount <= 0) {
      callback(results);
      unmountMockApp();
    }
  });
}

function runFrameTests (testPath, logCount, callback) {
  var fixture = document.getElementById('qunit-fixture');
  var iframe = document.createElement('iframe');
  iframe.src = testPath;
  fixture.appendChild(iframe);

  waitForNLogs(logCount, function (logs) {
    fixture.removeChild(iframe);
    callback(logs);
  });
}

function testTester (frameSourcePath, expectedLogs) {
  return function (assert) {
    var done = assert.async();
    runFrameTests(frameSourcePath, expectedLogs.length, function (results) {
      expectedLogs.forEach(function (log, index) {
        compare(assert, log, results[index], '[[' + index + ']]');
      });
      done();
    });
  };
}

var unit = window.QUnit;

var qunitSnapshot = [{
  "name": "api/runs::create",
  "data": {
    "status": "running",
    "environment": navigator.userAgent,
    "runner": "QUnit",
    "file": /qunit\/qunit\.html/
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "QUnit example",
    "root": true,
    "file": /qunit\/qunit\.html/
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "Test module",
    "file": /qunit\/qunit\.html/
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "A failing test",
    "file": /qunit\/qunit\.html/
  }
}, {
  "name": "api/tests::create",
  "data": {
    "title": "This test should fail",
    "file": /qunit\/qunit\.html/
  }
}, {
  "name": "api/tests::patch",
  "data": {
    "status": "failed",
    "err": {
      "message": "Expected B but was A"
    }
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "It does something",
    "file": /qunit\/qunit\.html/
  }
}, {
  "name": "api/tests::create",
  "data": {
    "title": "Test ran!",
    "file": /qunit\/qunit\.html/
  }
}, {
  "name": "api/tests::patch",
  "data": {
    "status": "passed"
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished",
    "failed": 1,
    "total": 2
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "Other module",
    "file": /qunit\/qunit\.html/
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "It does something async",
    "file": /qunit\/qunit\.html/
  }
}, {
  "name": "api/tests::create",
  "data": {
    "title": "Async test ran!",
    "file": /qunit\/qunit\.html/
  }
}, {
  "name": "api/tests::patch",
  "data": {
    "status": "passed"
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished",
    "failed": 0,
    "total": 1
  }
}, {
  "name": "api/suites::patch"
}, {
  "name": "api/coverages::create",
  "data": {
    coverage: {
      "test": "Qunit coverage"
    }
  }
}, {
  "name": "api/runs::patch",
  "data": {
    "status": "finished",
    "failed": 1,
    "passed": 2,
    "total": 3
  }
}];
unit.test(
  'runs the QUnit test and writes expected data',
  testTester('qunit/qunit.html', qunitSnapshot)
);

var mochaSnapshot = [{
  "name": "api/runs::create",
  "data": {
    "status": "running",
    "environment": navigator.userAgent,
    "runner": "Mocha",
    "file": /mocha\/mocha\.html/
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "",
    "pending": false,
    "root": true,
    "file": /mocha\/mocha\.html/
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "Test module",
    "pending": false,
    "root": false,
    "file": /mocha\/mocha\.html/
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "It does something",
    "pending": false,
    "root": false,
    "file": /mocha\/mocha\.html/
  }
}, {
  "name": "api/tests::create",
  "data": {
    "title": "Skipped test",
    "sync": true,
    "timedOut": false,
    "pending": true,
    "type": "test",
    "status": "pending",
    "file": /mocha\/mocha\.html/
  }
}, {
  "name": "api/tests::create",
  "data": {
    "title": "Fails",
    "async": 0,
    "sync": true,
    "timedOut": false,
    "pending": false,
    "type": "test",
    "file": /mocha\/mocha\.html/
  }
}, {
  "name": "api/tests::patch",
  "data": {
    "status": "failed",
    "state": "failed",
    "err": {
      "message": "expected false to equal true"
    }
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "Some other suite",
    "pending": false,
    "root": false,
    "file": /mocha\/mocha\.html/
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "Nested suite",
    "pending": false,
    "root": false,
    "file": /mocha\/mocha\.html/
  }
}, {
  "name": "api/tests::create",
  "data": {
    "title": "Test ran!",
    "async": 0,
    "sync": true,
    "timedOut": false,
    "pending": false,
    "type": "test",
    "file": /mocha\/mocha\.html/
  }
}, {
  "name": "api/tests::patch",
  "data": {
    "status": "passed",
    "duration": 0,
    "state": "passed"
  }
}, {
  "name": "api/tests::create",
  "data": {
    "title": "Runs async",
    "async": 1,
    "sync": false,
    "timedOut": false,
    "pending": false,
    "type": "test",
    "file": /mocha\/mocha\.html/
  }
}, {
  "name": "api/tests::patch",
  "data": {
    "status": "passed",
    "state": "passed"
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/coverages::create",
  "data": {
    coverage: {
      "test": "Mocha coverage"
    }
  }
}, {
  "name": "api/runs::patch",
  "data": {
    "status": "finished",
    "total": 4,
    "failed": 1,
    "pending": 1,
    "passed": 2
  }
}];
unit.test(
  'runs the Mocha test and writes expected data',
  testTester('mocha/mocha.html', mochaSnapshot)
);

var jasmineSnapshot = [{
  "name": "api/runs::create",
  "data": {
    "status": "running",
    "environment": navigator.userAgent,
    "runner": "Jasmine",
    "file": /jasmine-1\/jasmine\.html/
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "Test module",
    "root": true,
    "file": /jasmine-1\/jasmine\.html/
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "It does something",
    "file": /jasmine-1\/jasmine\.html/
  }
}, {
  "name": "api/tests::create",
  "data": {
    "title": "Fails",
    "file": /jasmine-1\/jasmine\.html/
  }
}, {
  "name": "api/tests::patch",
  "data": {
    "status": "failed",
    "err": {
      "message": "Expected false to be truthy."
    }
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "Some other suite",
    "file": /jasmine-1\/jasmine\.html/
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "Nested suite",
    "file": /jasmine-1\/jasmine\.html/
  }
}, {
  "name": "api/tests::create",
  "data": {
    "title": "Test ran!"
  }
}, {
  "name": "api/tests::patch",
  "data": {
    "status": "passed"
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/coverages::create",
  "data": {
    coverage: {
      "test": "Jasmine coverage"
    }
  }
}, {
  "name": "api/runs::patch",
  "data": {
    "failed": 1,
    "passed": 1,
    "status": "finished",
    "total": 2
  }
}];
unit.test(
  'runs the Jasmine 1 test and writes expected data',
  testTester('jasmine-1/jasmine.html', jasmineSnapshot)
);

var jasmine2Snapshot = [{
  "name": "api/runs::create",
  "data": {
    "status": "running",
    "environment": navigator.userAgent,
    "runner": "Jasmine",
    "file": /jasmine\/jasmine\.html/
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "Test module",
    "root": true,
    "file": /jasmine\/jasmine\.html/
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "It does something",
    "file": /jasmine\/jasmine\.html/
  }
}, {
  "name": "api/tests::create",
  "data": {
    "title": "Skipped test",
    "file": /jasmine\/jasmine\.html/
  }
}, {
  "name": "api/tests::create",
  "data": {
    "title": "Fails",
    "file": /jasmine\/jasmine\.html/
  }
}, {
  "name": "api/tests::patch",
  "data": {
    "status": "failed",
    "err": {
      "message": "Expected false to be truthy."
    }
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "Some other suite",
    "file": /jasmine\/jasmine\.html/
  }
}, {
  "name": "api/suites::create",
  "data": {
    "status": "running",
    "title": "Nested suite",
    "file": /jasmine\/jasmine\.html/
  }
}, {
  "name": "api/tests::create",
  "data": {
    "title": "Test ran!"
  }
}, {
  "name": "api/tests::patch",
  "data": {
    "status": "passed"
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/suites::patch",
  "data": {
    "status": "finished"
  }
}, {
  "name": "api/coverages::create",
  "data": {
    coverage: {
      "test": "Jasmine coverage"
    }
  }
}, {
  "name": "api/runs::patch",
  "data": {
    "failed": 1,
    "passed": 1,
    "status": "finished",
    "total": 2
  }
}];
unit.test(
  'runs the Jasmine 2 test and writes expected data',
  testTester('jasmine/jasmine.html', jasmine2Snapshot)
);
