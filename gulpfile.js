const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const run = require('run-sequence');

const ava = src => gulp.src(src).pipe($.ava());

const src = {
  js: ['src/**/*.js'],
  test: ['test/**/*.js']
};

gulp.task('default', ['watch']);
gulp.task('test', done => run('babel', 'ava', done));
gulp.task('watch', ['babel'], () => {
  gulp.watch(src.js, ['babel']);
  gulp.watch(src.test, ['ava']);
});
gulp.task('babel', () => {
  gulp.src(src.js)
    .pipe($.plumber())
    .pipe($.babel({ presets: ['es2015'] }))
    .pipe(gulp.dest('lib'));
});
gulp.task('ava', () =>
  gulp.src(src.test).pipe($.ava())
);
