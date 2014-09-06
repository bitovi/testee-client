# Testee client adapters

Testee client side adapters for Mocha, QUnit and Jasmine that convert test results into Feathers service socket calls (`runs`, `suites` and `tests`).

A test flow:

```js
var ids = {
  run: guid(),
  suite: guid(),
  childsuite: guid(),
  testpass: guid(),
  testfail: guid()
};

Testee.start({
  id: ids.run,
  environment : navigator.userAgent,
  runner : 'Jasmine'
});

Testee.suite({
  "title": "Main test suite title",
  "root": true, // If it is the root level test suite
  "id": guid(),
  "parent": runId
});

Testee.suite({
  "title": "Child test suite",
  "parent": 0,
  "id": 1
});

Testee.test({
  "title": "The test title",
  "parent": 1, // Parent suite id
  "id": 3
});

Testee.pass({
  "duration": 0,
  "id": 3
});

Testee.testEnd({
  "id": 3
});

Testee.test({
  "title": "A failing test",
  "parent": 1,
  "id": 4
});

Testee.fail({
  "id": 4,
  "err": {
    "message": "expected 1 to equal 2",
    "stack": "Error: expected 1 to equal 2\n    at Assertion.assert (/Users/daff/Development/node/swarmling/node_modules/expect.js/expect.js:99:13)\n    CUSTOM STACK TRACE"
  }
});

Testee.testEnd({
  "id": 4
});

Testee.suiteEnd({
  "id": 1
});

Testee.suiteEnd({
  "id": 0
});

Testee.end({});
```