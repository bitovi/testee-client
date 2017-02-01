var _ = {
  toArray: require('lodash/toArray')
};

module.exports = function(options) {
  var file = {
    file: window.location.toString()
  };

  return Object.assign({
    call: function(path, method) {
      var args = _.toArray(arguments).slice(2);
      var service = this[path];


      // Chain this service call to make sure it only runs
      // after all previous returned with an ACK
      this.connect = this.connect.then(function() {
        return new Promise(function(resolve, reject) {
          args.push({});
          args.push(function(error, data) {
            if (error) {
              reject(data);
            } else {
              resolve(data);
            }
          });
          service[method].apply(service, args);
        });
      });

      return this.connect;
    },

    start: function(data) {
      data = Object.assign({
        status: 'running'
      }, file, data);
      this.call('runs', 'create', data);
    },

    suite: function(data) {
      data = Object.assign({
        status: 'running'
      }, file, data);
      this.call('suites', 'create', data);
    },

    test: function(data) {
      data = Object.assign({}, file, data);
      this.call('tests', 'create', data);
    },

    pending: function(data) {
      data = Object.assign({
        status: 'pending'
      }, file, data);
      this.call('tests', 'create', data);
    },

    pass: function(data) {
      data = Object.assign({
        status: 'passed',
        state: 'passed'
      }, data);
      this.call('tests', 'patch', data.id, data);
    },

    fail: function(data) {
      data = Object.assign({
        status: 'failed',
        state: 'failed'
      }, data);
      this.call('tests', 'patch', data.id, data);
    },

    testEnd: function() {},

    suiteEnd: function(data) {
      data = Object.assign({
        status: 'finished'
      }, data);
      this.call('suites', 'patch', data.id, data);
    },

    end: function(data) {
      data = Object.assign({
        status: 'finished'
      }, data);

      var socket = this.socket;

      if (window.__coverage__ && this.coverages) {
        this.call('coverages', 'create', {
          id: data.id,
          run: data,
          coverage: window.__coverage__
        });
      }

      this.call('runs', 'patch', data.id, data).then(function() {
        if (socket && typeof socket.disconnect === 'function') {
          socket.disconnect();
        }
      });
    }
  }, options);
};