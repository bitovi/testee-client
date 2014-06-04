(function (window, undefined) {
	var options = window.Testee.Jasmine1 = {
		socket: new window.EventEmitter()
	};

	//	var old = options.socket.emit;
	//	var messages = [];
	//	options.socket.emit = function(name, data, other) {
	//		messages.push({
	//			name: name,
	//			data: typeof data === 'string' ? other : data
	//		});
	//		return old.apply(this, arguments);
	//	};
	//
	//	options.socket.on('runs::patch', function() {
	//		console.log(JSON.stringify(messages, null, '  '));
	//	});

	module('Jasmine 1.x adapter test');

	var expected = [
		{
			"name": "runs::create",
			"data": {
				"status": "running",
				"environment": navigator.userAgent,
				"runner": "Jasmine"
			}
		},
		{
			"name": "suites::create",
			"data": {
				"status": "running",
				"title": "Test module",
				"root": true
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
				"title": "Fails"
			}
		},
		{
			"name": "tests::patch",
			"data": {
				"status": "failed",
				"err": {
					"message": "Expected false to be truthy."
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
				"title": "Some other suite"
			}
		},
		{
			"name": "suites::create",
			"data": {
				"status": "running",
				"title": "Nested suite"
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
				"status": "finished"
			}
		},
		{
			"name": "suites::patch",
			"data": {
				"status": "finished"
			}
		},
		{
			"name": "runs::patch",
			"data": {
				"failed": 1,
				"passed": 1,
				"status": "finished",
				"total": 2
			}
		}
	];

	test('runs the Jasmine test and writes expected data to socket', function () {
		// Insert the iframe with the test
		var iframe = document.createElement('iframe');
		var walker = window.walkExpected(expected, options.socket);

		iframe.src = 'jasmine-1/jasmine.html';
		document.getElementById('qunit-fixture').appendChild(iframe);

		stop();
		walker();
	});
})(this);