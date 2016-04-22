var gulp = require('gulp');
var gulp = require('gulp-help')(gulp);
var autoprefixer = require('autoprefixer');
var runSequence = require('run-sequence');
var merge = require('merge2');

var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*']
});

var tsProject = $.typescript.createProject('tsconfig.json', {
    typescript: require('typescript')
});

var tsFilesGlob = (function (c) {
    return c.filesGlob || c.files || '**/*.ts';
})(require('../tsconfig.json'));

var appName = (function (p) {
    return p.name;
})(require('../package.json'));

gulp.task('ng2:clean', 'Cleans the generated js files from lib directory', function () {
    return gulp.src([
        'lib',
        'tmp'
    ]).pipe($.clean());
});

gulp.task('tslint', 'Lints all TypeScript source files', function () {
    return gulp.src(tsFilesGlob)
        .pipe(tslint())
        .pipe(tslint.report('verbose'));
});

gulp.task('ng2:ts', 'INTERNAL TASK - Compiles all TypeScript source files', function (cb) {
    var tsResult = gulp.src([
            'tmp/**/*.ts'
        ])
        .pipe($.inlineNg2Template({
            base: 'tmp',
            useRelativePaths: true,
            removeLineBreaks: true
        }))
        .pipe($.typescript(tsProject));

    return merge([
        tsResult.dts.pipe(gulp.dest('lib')),
        tsResult.js.pipe(gulp.dest('lib'))
    ]);
});

gulp.task('ng2:copy', 'move html, css file to lib', function () {
    gulp.src('package.json').pipe(gulp.dest('lib'));
    return gulp.src([
            'ng2/**/*.html',
            'ng2/**/*.scss',
            'ng2/**/*.ts'
        ])
        .pipe(gulp.dest('tmp'));
});

gulp.task('ng2:sass', 'compile scss to css', ['sprites'], function () {
    var sassOptions = {
        includePaths: ['../sass'],
        style: 'expanded'
    };
    return gulp.src('tmp/**/*.scss')
        .pipe($.sass(sassOptions).on('error', $.sass.logError))
        // .pipe($.sourcemaps.init())
        .pipe($.postcss([autoprefixer({browsers: ['Android >= 2.1', 'iOS > 5']})]))
        // .pipe($.sourcemaps.write('.'))
        .pipe(gulp.dest('tmp'));
});

gulp.task('watch', 'Watches ts source files and runs build on change', function () {
    gulp.watch('ng2/**/*.ts', ['ng2:build']);
});

//run tslint task, then run update-tsconfig and gen-def in parallel, then run _build
gulp.task('ng2:build', function () {
    return runSequence('ng2:clean', 'sprites', 'ng2:copy', 'ng2:sass', 'ng2:ts');
});

gulp.task('ng2:ver', function () {
    gulp.src('package.json')
        .pipe($.replace(/\"version\":\s*\"(\d+)\.(\d+)\.(\d+)\"/gm, function (match, a, b, c) {
            return '"version": "' + [a, b, +c + 1].join('.') + '"';
        }))
        .pipe(gulp.dest('lib'))
        .pipe(gulp.dest('.'));
});