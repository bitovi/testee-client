var _ = require('underscore');

module.exports = function (options) {
  var noop = function() {};

	return _.extend({
		start: function (data) {
			data = _.extend({ status: 'running' }, data);
			this.runs.create(data, {}, noop);
		},

		suite: function (data) {
			data = _.extend({ status: 'running' }, data);
			this.suites.create(data, {}, noop);
		},

		test: function (data) {
			this.tests.create(data, {}, noop);
		},

		pending: function (data) {
      data = _.extend({ status: 'pending' }, data);
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
					coverage: window.__coverage__
				}, {}, noop);
			}

			this.runs.patch(data.id, data, {}, noop);
		}
	}, options);
};
