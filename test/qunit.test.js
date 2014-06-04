(function (window, undefined) {
	var options = window.Testee.QUnit = {
		socket: new window.EventEmitter()
	};

	module('QUnit adapter test');

	var expected = [
		{
			"name": "runs::create",
			"data": {
				"status": "running",
				"environment": navigator.userAgent,
				"runner": "QUnit"
			}
		},
		{
			"name": "suites::create",
			"data": {
				"status": "running",
				"title": "QUnit example",
				"root": true
			}
		},
		{
			"name": "suites::create",
			"data": {
				"status": "running",
				"title": "Test module"
			}
		},
		{
			"name": "suites::create",
			"data": {
				"status": "running",
				"title": "A failing test"
			}
		},
		{
			"name": "tests::create",
			"data": {
				"title": "This test should fail"
			}
		},
		{
			"name": "tests::patch",
			"data": {
				"status": "failed",
				"err": {
					"message": "This test should fail"
				}
			}
		},
		{
			"name": "suites::patch",
			"data": {
				"status": "finished"
			}
		},
		{
			"name": "suites::create",
			"data": {
				"status": "running",
				"title": "It does something"
			}
		},
		{
			"name": "tests::create",
			"data": {
				"title": "Test ran!"
			}
		},
		{
			"name": "tests::patch",
			"data": {
				"status": "passed"
			}
		},
		{
			"name": "suites::patch",
			"data": {
				"status": "finished"
			}
		},
		{
			"name": "suites::patch",
			"data": {
				"status": "finished",
				"failed": 1,
				"total": 2
			}
		},
		{
			"name": "suites::create",
			"data": {
				"status": "running",
				"title": "Other module"
			}
		},
		{
			"name": "suites::create",
			"data": {
				"status": "running",
				"title": "It does something async"
			}
		},
		{
			"name": "tests::create",
			"data": {
				"title": "Async test ran!"
			}
		},
		{
			"name": "tests::patch",
			"data": {
				"status": "passed"
			}
		},
		{
			"name": "suites::patch",
			"data": {
				"status": "finished"
			}
		},
		{
			"name": "suites::patch",
			"data": {
				"status": "finished",
				"failed": 0,
				"total": 1
			}
		},
		{
			"name": "runs::patch",
			"data": {
				"status": "finished",
				"failed": 1,
				"passed": 2,
				"total": 3
			}
		}
	];

	test('runs the QUnit test and writes expected data to socket', function () {
		// Insert the iframe with the test
		var iframe = document.createElement('iframe');
		var walker = window.walkExpected(expected, options.socket);

		iframe.src = 'qunit/qunit.html';
		document.getElementById('qunit-fixture').appendChild(iframe);

		stop();
		walker();
	});
})(this);
