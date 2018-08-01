module.exports = {
    scss: {
        files: [{
            expand: true,
            cwd: 'src/sass',
            src: ['*.scss'],
            dest: 'build/css',
            ext: '.css'
              }]
    }
};