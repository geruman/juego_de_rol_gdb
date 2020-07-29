const { src, dest } = require('gulp');
function clean(cb){
    cb()
}
function build(cb){
    src('./node_modules/augmented-ui/augmented.css').pipe(dest('build/js'))
    src('*.html').pipe(dest('build/'));
    cb();
}
exports.build = build;
