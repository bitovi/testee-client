var _ = require('underscore');

module.exports = function (options) {
  var noop = function() {};
  var file = { file: window.location.toString() };

	return _.extend({
		start: function (data) {
			data = _.extend({
        status: 'running'
      }, file, data);
			this.runs.create(data, {}, noop);
		},

		suite: function (data) {
			data = _.extend({
        status: 'running'
      }, file, data);
			this.suites.create(data, {}, noop);
		},

		test: function (data) {
      data = _.extend({}, file, data);
			this.tests.create(data, {}, noop);
		},

		pending: function (data) {
      data = _.extend({ status: 'pending' }, file, data);
			this.tests.create(data, {}, noop);
		},

		pass: function (data) {
			data = _.extend({ status: 'passed' }, data);
			this.tests.patch(data.id, data, {}, noop);
		},

		fail: function (data) {
			data = _.extend({ status: 'failed' }, data);
			this.tests.patch(data.id, data, {}, noop);
		},

		testEnd: function () {},

		suiteEnd: function (data) {
			data = _.extend({ status: 'finished' }, data);
			this.suites.patch(data.id, data, {}, noop);
		},

		end: function (data) {
			data = _.extend({ status: 'finished' }, data);

			if (window.__coverage__ && this.coverages) {
				this.coverages.create({
					id: data.id,
          run: data,
					coverage: window.__coverage__
				}, {}, noop);
			}

			this.runs.patch(data.id, data, {}, noop);
		}
	}, options);
};
