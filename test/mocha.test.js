(function(window, undefined) {

  module('Mocha adapter test');

  var expected = [{
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

  window.getTesteeOptions('Mocha', expected);

  test('runs the Mocha test and writes expected data', function() {
    // Insert the iframe with the test
    var iframe = document.createElement('iframe');

    iframe.src = 'mocha/mocha.html';
    document.getElementById('qunit-fixture').appendChild(iframe);

    stop();
  });
})(this);