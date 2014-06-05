// Recursively compares if an actual object has the same properties
var compare = window.compare = function (reference, actual, name) {
	for(var key in reference) {
		if(typeof reference[key] === 'object') {
			compare(reference[key], actual[key], name + ' ' + key);
		} else {
			equal(reference[key], actual[key], name + ' ' + key);
		}
	}
};

window.walkExpected = function(expected, socket) {
	var index = 0;

	// This one goes through all the expected events, binds once to the fake Socket
	// and checks if the object we got from the test is the same as the one we expect
	return function expectNext() {
		var current = expected[index];

		socket.once(current.name, function(data, other) {
			// move data for patch requests which pass the id first
			if(typeof data === 'string') {
				data = other;
			}

			compare(current.data, data, current.name);

			if(++index === expected.length) {
				return start();
			}

			expectNext();
		});
	};
};

window.logSocketData = function(socket) {
	var old = socket.emit;
	var messages = [];
	socket.emit = function(name, data, other) {
    console.log(arguments);
		messages.push({
			name: name,
			data: typeof data === 'string' ? other : data
		});
		return old.apply(this, arguments);
	};

	socket.on('runs::patch', function() {
		console.log(JSON.stringify(messages, null, '  '));
	});
}

