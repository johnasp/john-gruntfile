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

        sass_import: {
            options: {
                basePath: 'css/'
            },
            dist: {
              files: {
                'styles.scss': ['sass/sections/*', 'sass/setup/*']
              }
            }
          },    

        sass: {
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

        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['concat', 'uglify'],
                options: {
                spawn: false,
                },
            } 
        }



    });

    // 3. Where we tell Grunt to enable plugins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-sass-import');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['concat', 'uglify', /*'imagemin',*/  'sass', 'sass_import', 'watch' ]);

};