(function(window, undefined) {

	module('QUnit adapter test');

	var expected = [{
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
		"name": "api/logs::create",
		"data": {
			"type": "error",
			"args": [ "This test failed" ]
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
		"name": "api/logs::create",
		"data": {
			"type": "log",
			"args": [ "Fail" ]
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

	window.getTesteeOptions('QUnit', expected);

	test('runs the QUnit test and writes expected data', function() {
		// Insert the iframe with the test
		var iframe = document.createElement('iframe');

		iframe.src = 'qunit/qunit.html';
		document.getElementById('qunit-fixture').appendChild(iframe);

		stop();
	});
})(this);