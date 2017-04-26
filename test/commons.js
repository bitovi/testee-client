function inRange(expected, current, range) {
  return (current - range) <= expected && (current + range) >= expected;
}

// Recursively compares if an actual object has the same properties
var compare = window.compare = function(reference, actual, name) {
  var expected, current;
  for (var key in reference) {
    expected = reference[key];
    current = actual[key];
    
    if (expected instanceof RegExp) {
      ok(expected.test(current), name + ': ' + current + ' matches ' + expected.toString());
    } else if (typeof reference[key] === 'object') {
      compare(expected, current, name + ' ' + key);
    } else if(key === 'duration') {
      ok(inRange(expected, current, 20), name + ' ' + key + ' === ' + expected + '(+/- 20)');
    } else {
      equal(expected, current, name + ' ' + key + ' === ' + expected);
    }
  }
};

window.getTesteeOptions = function(name, expected) {
  // Create a client-side service that checks that the proper calls are happening
  var index = 0;
  var app = window.feathers();
  var check = function(name, data, cb) {
    var current = expected[index];

    compare(current.data, data, current.name);

    cb(null, data);

    if (++index === expected.length) {
      start();
    }
  };
  var expectationService = function(name) {
    return {
      create: function(data, params, cb) {
        check(name + '::create', data, cb);
      },
      patch: function(id, data, params, cb) {
        check(name + '::patch', data, cb);
      }
    };
  };
  app.use('api/runs', expectationService('api/runs'));
  app.use('api/suites', expectationService('api/suites'));
  app.use('api/tests', expectationService('api/tests'));
  app.use('api/coverages', expectationService('api/coverages'));
  app.use('api/logs', expectationService('api/logs'));
  
  var options = window.Testee[name] = {
    app: app
  };
  return options;
};