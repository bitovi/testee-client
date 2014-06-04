var _ = require('underscore');

module.exports = function (options) {
	return _.extend({
		start: function (data) {
			data = _.extend({ status: 'running' }, data);
			this.runs.create(data, {}, _.noop);
		},

		suite: function (data) {
			data = _.extend({ status: 'running' }, data);
			this.suites.create(data, {}, _.noop);
		},

		test: function (data) {
			this.tests.create(data, {}, _.noop);
		},

		pending: function (data) {
			this.tests.create(data, {}, _.noop);
		},

		pass: function (data) {
			data = _.extend({ status: 'passed' }, data);
			this.tests.patch(data.id, data, {}, _.noop);
		},

		fail: function (data) {
			data = _.extend({ status: 'failed' }, data);
			this.tests.patch(data.id, data, {}, _.noop);
		},

		testEnd: function () {},

		suiteEnd: function (data) {
			data = _.extend({ status: 'finished' }, data);
			this.suites.patch(data.id, data, {}, _.noop);
		},

		end: function (data) {
			data = _.extend({ status: 'finished' }, data);

			if (window.__coverage__ && this.coverages) {
				this.coverages.create({
					id: data.id,
					coverage: window.__coverage__
				}, {}, _._.noop);
			}

			this.runs.patch(data.id, data, {}, _.noop);
		}
	}, options);
};
