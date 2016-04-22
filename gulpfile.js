'use strict';
var gulp = require('gulp');
var gulpif = require('gulp-if');
var sourcemaps = require('gulp-sourcemaps');
var md5 = require("gulp-gf-md5");
var iconfont = require('gulp-iconfont');
var iconfontCss = require('gulp-iconfont-css');
var fontName = 'Icons';
var sprity = require('sprity');
var postcss = require('gulp-postcss');

require('require-dir')('./gulp');

var $ = require('gulp-load-plugins')({
  pattern: ['gulp-*', 'main-bower-files', 'uglify-save-license', 'del']
});

gulp.task('sprites', function (cb) {
  return sprity.src({
    src: 'assets/sprites/**/*.png',
    name: 'sprite',
    style: 'sprite.scss',
    retina: true,
    margin: 2,
    orientation: 'binary-tree',
    template: './scss.hbs',
    // prefix: 'icons', 默认是icon
    out: 'src/assets/images/sprite',
    cssPath: '../assets/images/',
    processor: 'sass',
    split: true,
    dimension: [{
      ratio: 1, dpi: 72
    }, {
      ratio: 2, dpi: 190
    }]
  }).on('error', function (e) {
      console.log(e);
      cb();
    })
    .pipe(gulpif('*.png', gulp.dest('assets/images'), gulp.dest('sass')))
});

gulp.task('iconfont', function () {
  gulp.src(['assets/icons/*.svg'])
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
  return gulp.src('sass/gfui.scss')
    .pipe($.sass({style: 'compressed'}))
    .pipe(sourcemaps.init())
    .pipe(postcss([require('autoprefixer')]))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
    .pipe(gulp.dest('lib'));
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
  gulp.src(['dist']).pipe($.clean());
});

gulp.task('build', ['clean', 'sprites', 'iconfont', 'styles']);

gulp.task('all', ['ng2:build', 'build']);