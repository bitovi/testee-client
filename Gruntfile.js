'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			lib: ['lib/**/*.js', 'Gruntfile.js'],
			test: 'test/*.test.js'
		},
		browserify: {
			dist: {
				files: {
					'dist/testee.js': ['lib/index.js']
				}
			},
			options: {
				bundleOptions: {
					debug: true
				}
			}
		},
		qunit: {
			test: ['test/index.html']
		},
		watch: {
			scripts: {
				files: ['lib/**/*.js'],
				tasks: ['browserify']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.registerTask('build', ['browserify']);
	grunt.registerTask('test', ['jshint', 'build', 'qunit']);
	grunt.registerTask('default', ['watch']);
};