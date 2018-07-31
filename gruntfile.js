module.exports = function (grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            scss: {
                files: [{
                    expand: true,
                    cwd: 'src/sass',
                    src: ['*.scss'],
                    dest: 'build/css',
                    ext: '.css'
              }]
            }
        },

        concat: {
            js: {
                src: ['src/js/**/*.js'], //any folder, any .js file
                dest: 'build/js/production.js',
            }
        },

        uglify: {
            options: {
                mangle: false
                //sourceMap: true
            },
            js: {
                files: {
                    'build/js/production.min.js': ['build/js/production.js']
                }
            }
        },

        imagemin: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'build/img'
                }]
            }
        },

        cssmin: {
            build: {
                src: 'build/css/main.css',
                dest: 'build/css/main.min.css'
            }
        },

        htmlhint: {
            build: {
                options: {
                    'tag-pair': true,
                    'tagname-lowercase': true,
                    'attr-lowercase': true,
                    'attr-value-double-quotes': true,
                    'doctype-first': true,
                    'spec-char-escape': true,
                    'id-unique': true,
                    'head-script-disabled': true,
                    'style-disabled': true
                },
                src: ['src/*.html']
            }
        },
        
        copy: {
          main: {
            expand: true,
            cwd: 'src',
            src: '*.html',
            dest: 'build',
          },
        },

        /*move: {
            test: {
                src: 'src/*.html',
                dest: 'build/'
            }
        },

        serve: {
            options: {
                port: 9000
            }
        },*/

        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['src/css/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                    livereload: true,
                }
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true,
                },
            },
            html: {
                files: ['src/*.html'],
                tasks: ['htmlhint'],
            },

        },


    });

    // 2. Load all Grunt tasks automatically 
    require('load-grunt-tasks')(grunt);

    // 3. Register tasks, default grunt task first

    grunt.registerTask(
        'default', [
                'concat',
                'uglify',
                'sass',
                'cssmin',
                'imagemin',
                'htmlhint',
                'copy',
                'watch'
            ]
    );
    grunt.registerTask('bollox', ['htmlhint', 'imagemin']);

};