/*jslint node: true */
'use strict';

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {                                 // Task
			dist: {                             // Target
				files: {                        // Dictionary of files
					'css/pattern.css': 'css/pattern.scss'     // 'destination': 'source'
					}
			},
			dev: {                              // Another target
				options: {
					style: 'compacted',                      // Dictionary of render options
<<<<<<< HEAD
					includePaths: ['css', 'css/admin/','css/patterns/', 'css/optional/']
=======
					includePaths: ['stylesheets', 'admin/','patterns/', 'optional/']
>>>>>>> 87434392b1a243bd0d25fd3769abbe72487ff4e2
				}
			}
		},
		uglify: {
			build: {
<<<<<<< HEAD
				src: 'js/plugins.js',
				dest: 'js/plugins.min.js'
=======
				src: 'js/pattern.js',
				dest: 'js/pattern.min.js'
>>>>>>> 87434392b1a243bd0d25fd3769abbe72487ff4e2
			}
		},
		cssmin: {
			minify: {
				expand: true,
				cwd: 'css/',
				src: ['pattern.css', '!pattern.min.css'],
				dest: 'css/',
				ext: '.min.css'
			}
		},
		jshint: {
			files: ['Gruntfile.js'],
			options: {
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			js: {
<<<<<<< HEAD
				src: ['js/plugins.min.js'],
=======
				src: ['js/classie.js', 'js/pattern.js'],
>>>>>>> 87434392b1a243bd0d25fd3769abbe72487ff4e2
				dest: 'js/pattern.min.js'
			}
		},
		watch: {
			files: [
			'/*',
			'css/*.scss',
			'css/*.css',
			'js/*.js',
			],
			tasks: 'default'
		}
  });

grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');

grunt.registerTask('default', ['sass', 'uglify', 'concat', 'jshint', 'cssmin']);
grunt.registerTask('watch', ['sass', 'uglify', 'concat', 'jshint', 'cssmin']);
};