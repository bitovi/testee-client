var _ = require('underscore');

module.exports = function (options) {
  var noop = function() {};
  var file = { file: window.location.toString() };

	return _.extend({
    call: function(path, method) {
      var args = _.toArray(arguments).slice(2);
      return this.connect.then(_.bind(function() {
        var service = this[path];
        service[method].apply(service, args);
      }, this));
    },

		start: function (data) {
			data = _.extend({
        status: 'running'
      }, file, data);
      this.call('runs', 'create', data, {}, noop);
		},

		suite: function (data) {
			data = _.extend({
        status: 'running'
      }, file, data);
			this.call('suites', 'create', data, {}, noop);
		},

		test: function (data) {
      data = _.extend({}, file, data);
			this.call('tests', 'create', data, {}, noop);
		},

		pending: function (data) {
      data = _.extend({ status: 'pending' }, file, data);
			this.call('tests', 'create', data, {}, noop);
		},

		pass: function (data) {
			data = _.extend({ status: 'passed' }, data);
			this.call('tests', 'patch', data.id, data, {}, noop);
		},

		fail: function (data) {
			data = _.extend({ status: 'failed' }, data);
			this.call('tests', 'patch', data.id, data, {}, noop);
		},

		testEnd: function () {},

		suiteEnd: function (data) {
			data = _.extend({ status: 'finished' }, data);
			this.call('suites', 'patch', data.id, data, {}, noop);
		},

		end: function (data) {
			data = _.extend({ status: 'finished' }, data);

			if (window.__coverage__ && this.coverages) {
				this.call('coverages', 'create', {
					id: data.id,
          run: data,
					coverage: window.__coverage__
				}, {}, noop);
			}

			this.call('runs', 'patch', data.id, data, {}, noop);
		}
	}, options);
};
