'use strict';
import fs from 'fs';
import del from 'del';
import ejs from 'gulp-ejs';
import gulp from 'gulp';
import rename from 'gulp-rename';

const json = JSON.parse(fs.readFileSync('./src/versions.json', 'utf-8'));
const clean = _ => del(['export/php71/*', 'export/php72/*']);
const php = _ => gulp.src('./src/**/Dockerfile.ejs').
    pipe(ejs({versions: json}, {}, {ext: ''})).
    pipe(rename({extname: ''})).
    pipe(gulp.dest('./export'));
const tests = _ => gulp.src('./src/test/*').
    pipe(ejs({}, {}, {ext: ''})).
    pipe(gulp.dest('./export/php71/apache')).
    pipe(gulp.dest('./export/php71/fpm')).
    pipe(gulp.dest('./export/php71')).
    pipe(gulp.dest('./export/php72/apache')).
    pipe(gulp.dest('./export/php72/fpm')).
    pipe(gulp.dest('./export/php72'));
const build = gulp.series(clean, gulp.parallel(php, tests));

gulp.task('clean', clean);
gulp.task('php', php);
gulp.task('tests', tests);
gulp.task('build', build);
gulp.task('default', build);