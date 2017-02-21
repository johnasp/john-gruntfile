module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {   
            dist: {
                src: [
                    'js/libs/*.js', // All JS in the libs folder
                    'js/global.js'  // This specific file
                ],
                dest: 'js/build/production.js',
            }
        },

        uglify: {
            options: {
              mangle: false
            },
            my_target: {
              files: {
                'js/build/production.min.js': ['js/build/production.js']
              }
            }
          },

        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'images/build/'
                }]
            }
        },

        sass: {
            //options: {  
            //    style: 'compressed'
            //},
            dist: {
              files: [{
                expand: true,
                cwd: 'css',
                src: ['*.scss'],
                dest: 'css/build/',
                ext: '.css'
              }]
            }
          },

        serve: {
            options: {
                port: 9000
            }
        },

        watch: {
            options: {
                livereload: true,
            },              
            css: {
                files: ['css/**/*.scss'],
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
                },
            },
            html: {
                files : ['./contratax.html'],
                options: {
                    spawn: false,
                    livereload: true,
                } 
            } 
        },

        concurrent: {
            target1: ['serve', 'watch'],
        }



    });

    // Load all Grunt tasks automatically wihtout having to enter manaually
    require('load-grunt-tasks')(grunt);

    grunt.registerTask(
        'default',
            [
                'concat', 
                'uglify', 
                'sass', 
                'concurrent:target1'
            ]
    );

};