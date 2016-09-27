(function(window, undefined) {

	module('Jasmine 2.x adapter test');

	var expected = [{
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

	window.getTesteeOptions('Jasmine', expected);

	test('runs the Jasmine test and writes expected data', function() {
		// Insert the iframe with the test
		var iframe = document.createElement('iframe');

		iframe.src = 'jasmine/jasmine.html';
		document.getElementById('qunit-fixture').appendChild(iframe);

		stop();
	});
})(this);