module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		uglify: {
            options: {
                mangle: false,
                compress: {
			    	drop_console: true
        		}
            },
            my_target: {
                files: {
                    'dist/js/app.min.js': [
                		'build/js/vendor/jquery.js',
                		'build/js/vendor/parallax.js',
                		'build/js/vendor/what-input.js',
                		'build/js/vendor/mobile-detect.min.js',
                		'build/js/form_handler.js',
                		'build/js/app.js'
                	]
                }
            }
        },
        
        cssmin: {
            target: {
                files: {
                    'dist/css/app.min.css': [
                		'build/css/app.css',
                		'build/css/neon.css'
                	]
                }
            }
        },
        
        htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: false
				},
				files: {
					'dist/index.html': 'build/index.html'
				}
			}
		},
		
		copy: {
			main: {
				files: [
					{expand: true, cwd: 'build/img', src: '**', dest: 'dist/img/'},
					{expand: true, cwd: 'build/css/Fonts', src: '**', dest: 'dist/css/Fonts'}
				]
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('default', ['uglify','cssmin','htmlmin','copy']);

};