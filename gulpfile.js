'use strict';


var gulp = require('gulp');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var replace = require('gulp-replace');
var md5 = require("gulp-gf-md5");

var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var fontName = 'Icons';
var sprity = require('sprity');


var $ = require('gulp-load-plugins')({
    pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});


gulp.task('sprites', function () {
    return sprity.src({
            src:'src/assets/sprites/**/*.png',
            name: 'sprite',
            style: 'sprite.scss',
            retina: true,
            margin: 2,
            orientation: 'binary-tree',
            // prefix: 'icons', 默认是icon
            out: 'src/assets/images/sprite',
            cssPath: '../assets/images/',
            processor: 'sass',
            split:true,
            dimension: [{
                ratio: 1, dpi: 72
            }, {
                ratio: 2, dpi: 190
            }]
        })
        .pipe(gulpif('*.png', gulp.dest('src/assets/images'), gulp.dest('src/components')))
});

gulp.task('iconfont', function(){
    gulp.src(['src/assets/icons/*.svg'])
        .pipe(iconfontCss({
            fontName: fontName,
            //  path: 'src/assets/css/templates/_icons.scss',
            targetPath: '../../components/icons.scss',
            fontPath: '../assets/fonts/'
        }))
        .pipe(iconfont({
            fontName: fontName
        }))
        .pipe(gulp.dest('src/assets/fonts/'));
});

gulp.task('styles', ['injector:css:preprocessor'], function () {
    return gulp.src(['sass/gfui.scss'])
        .pipe(sourcemaps.init())
        .pipe($.sass({style: 'compressed'}))
        //.pipe(sourcemaps.write('.',{includeContent:false, sourceRoot:'/app'}))
        .pipe(sourcemaps.write())
        .on('error', function handleError(err) {
            console.error(err.toString());
            this.emit('end');
        })
        // https://github.com/ai/browserslist#queries
        .pipe($.autoprefixer({browsers: ['Android >= 2.1', 'iOS > 5']}))
        .pipe(gulp.dest('dist'));
});

//主要是gfui.scss里面能够自动导入scss文件
gulp.task('injector:css:preprocessor', function () {
    return gulp.src('sass/gfui.scss')
        .pipe($.inject(gulp.src([
            //'src/components/reset.scss',
            '!sass/base/*.scss',
            'sass/util/**/*.scss',
            'sass/component/*.scss',
            'sass/**/*.scss',
            '!demo/**/*.scss',
            '!sass/gfui.scss',
        ], {read: false}), {
            transform: function (filePath) {
                filePath = filePath.replace('sass/', '');
                //filePath = filePath.replace('src/components/', '../components/');
                return '@import \'' + filePath + '\';';
            },
            starttag: '// injector',
            endtag: '// endinjector',
            addRootSlash: false
        }))
        .pipe(gulp.dest('sass/'));
});

//图片md5和压缩
gulp.task('images', function () {

    var imgSrc = ['src/assets/**/*.{png,jpg}', '!src/assets/backup/*.{png,jpg}', '!src/assets/sprites/*.{png,jpg}'],
        quoteSrc = ['dist/styles/*.css', 'dist/scripts/*.js'],
        imgDst = 'dist/assets';

    return gulp.src(imgSrc)
        //.pipe($.imagemin({
        //    optimizationLevel: 3,
        //    progressive: true,
        //    interlaced: true
        //}))
        .pipe(md5(8, quoteSrc))
        .pipe(gulp.dest(imgDst));

});

gulp.task('clean', function (done) {
    $.del(['dist/'], done);
});

gulp.task('build1', ['sprites','iconfont','styles']);

gulp.task('build', function () {
    runSequence('clean', 'build1');
});
