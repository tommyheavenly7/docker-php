"use strict";
import del from 'del';
import ejs from 'gulp-ejs';
import gulp from 'gulp';

export const clean = () => del(['export/php71/*']);
export const php71 = () => gulp.src('./src/php71/**/Dockerfile')
        .pipe(ejs({}, {}, {ext: ''}))
        .pipe(gulp.dest('./export/php71'));

const build = gulp.series(clean, gulp.parallel(php71));
gulp.task('build', build);
gulp.task('default', build);