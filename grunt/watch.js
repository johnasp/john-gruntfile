module.exports = {
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
};