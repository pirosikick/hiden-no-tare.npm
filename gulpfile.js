const gulp = require('gulp');
const $ = require('gulp-load-plugins')();

gulp.task('default', ['watch']);
gulp.task('test', ['ava']);
gulp.task('watch', ['babel'], () => {
  gulp.watch(['src/**/*.js', 'test/**/*.js'], ['test']);
});
gulp.task('babel', () => {
  gulp.src(['src/**/*.js'])
    .pipe($.plumber())
    .pipe($.babel())
    .pipe(gulp.dest('lib'));
});
gulp.task('ava', ['babel'], () =>
  gulp.src(['test/**/*.js']).pipe($.ava())
);
