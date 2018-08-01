module.exports = {
    options: {
        mangle: false
        //sourceMap: true
    },
    js: {
        files: {
            'build/js/production.min.js': ['build/js/production.js']
        }
    }
};