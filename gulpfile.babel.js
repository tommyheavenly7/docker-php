"use strict";
import del from 'del';
import ejs from 'gulp-ejs';
import gulp from 'gulp';

export const clean = () => del(['export/php71/*']);
export const php = () => gulp.src('./src/**/Dockerfile')
        .pipe(ejs({}, {}, {ext: ''}))
        .pipe(gulp.dest('./export'));

const build = gulp.series(clean, gulp.parallel(php));
gulp.task('build', build);
gulp.task('default', build);