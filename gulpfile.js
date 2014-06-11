var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    less = require('gulp-less'),
    cmq = require('gulp-combine-media-queries'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    header = require('gulp-header'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    uglify = require('gulp-uglify'),
    stylish = require('jshint-stylish');

var cfg = {
      port: 9001,
      root: 'html',
      src: {
        styles: '_stylesheets',
        scripts: '_scripts',
        images: '_images',
        html: '_patterns'
      },
      dest: {
        styles: 'css',
        scripts: 'scripts',
        images: 'images'
      }
    },
    pkg = require('./package.json');

gulp.task('connect', function() {
  connect.server({
    root: cfg.root,
    port: cfg.port,
    livereload: true
  });
});

gulp.task('watch', function() {
  gulp.watch([
    cfg.root + '/' + cfg.src.styles + '/**/*.less', 
    cfg.root + '/' + cfg.src.scripts + '/**/*.js', 
    cfg.root + '/' + cfg.src.html + '/**/*.html', 
    cfg.root + '/index.html'
  ], ['scripts', 'styles','livereload']);
});

gulp.task('livereload', ['styles', 'scripts'], function() {
  gulp.src(cfg.root + '/**/*.html')
    .pipe(connect.reload());
});

gulp.task('open', function() {
  gulp.src(cfg.root + '/index.html')
    .pipe(open('', {
      url: 'http://localhost:' + cfg.port
    }));
});

gulp.task('less', function() {
  return gulp.src(cfg.root + '/' + cfg.src.styles + '/main.less')
    .pipe(less())
    .pipe(gulp.dest(cfg.root + '/' + cfg.dest.styles));
});

gulp.task('cssmin', ['styles'], function() {
  gulp.src([
    cfg.root + '/' + cfg.dest.styles  + '/*.css',
    '!' + cfg.root + '/' + cfg.dest.styles  + '/*.min.css'
  ])
    .pipe(cssmin({
      keepSpecialComments: 0
    }))
    .pipe(header('/*\n <%= pkg.description %>\n @author: <%= pkg.author %>\n @email: <%= pkg.email %>\n @url: <%= pkg.homepage %>\n @version: <%= pkg.version %>\n*/\n', { pkg: pkg }))
    .pipe(rename({
      extname: '.min.css'
    }))
    .pipe(gulp.dest(cfg.root + '/' + cfg.dest.styles));
});

gulp.task('cmq', ['less'], function() {
  return gulp.src([
    cfg.root + '/' + cfg.dest.styles  + '/*.css',
    '!' + cfg.root + '/' + cfg.dest.styles  + '/*.min.css'
  ])
    .pipe(cmq({
      log: true
    }))
    .pipe(gulp.dest(cfg.root + '/' + cfg.dest.styles));
});

gulp.task('jshint', function() {
  return gulp.src([
    'gulpfile.js',
    cfg.root + '/' + cfg.src.scripts + '/*.js'
  ])
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('jshint-concat', function() {
  return gulp.src(cfg.root + '/' + cfg.dest.scripts + '/main.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('concat', function() {
  gulp.src([
    cfg.root + '/' + cfg.src.scripts + '/main.js',
    cfg.root + '/' + cfg.src.scripts + '/*.js'
  ])
    .pipe(concat('main.js'))
    .pipe(gulp.dest(cfg.root + '/' + cfg.dest.scripts));
});

gulp.task('concat-plugins', function() {
  gulp.src(cfg.root + '/' + cfg.src.scripts + '/plugins/*.js')
    .pipe(concat('plugins.js'))
    .pipe(gulp.dest(cfg.root + '/' + cfg.dest.scripts));
});

gulp.task('uglify', ['scripts'], function() {
  gulp.src([
    cfg.root + '/' + cfg.dest.scripts  + '/main.js'
  ])
    .pipe(uglify())
    .pipe(header('/*!\n <%= pkg.description %>\n @author: <%= pkg.author %>\n @email: <%= pkg.email %>\n @url: <%= pkg.homepage %>\n @version: <%= pkg.version %>\n*/\n', { pkg: pkg }))
    .pipe(rename({
      extname: '.min.js'
    }))
    .pipe(gulp.dest(cfg.root + '/' + cfg.dest.scripts));
});

gulp.task('uglify-plugins', ['scripts'], function() {
  gulp.src([
    cfg.root + '/' + cfg.dest.scripts  + '/plugins.js'
  ])
    .pipe(uglify())
    .pipe(header('/*!\n <%= pkg.description %>\n @author: <%= pkg.author %>\n @email: <%= pkg.email %>\n @url: <%= pkg.homepage %>\n @version: <%= pkg.version %>\n*/\n', { pkg: pkg }))
    .pipe(gulp.dest(cfg.root + '/' + cfg.dest.scripts));
});

gulp.task('imagemin', function() {
  return gulp.src([
    cfg.root + '/' + cfg.src.images + '/**/*.jpg',
    cfg.root + '/' + cfg.src.images + '/**/*.png'
  ])
    .pipe(imagemin({
      optimizationLevel: 7,
      progressive: true,
      use: [pngquant()]
    }))
    .pipe(gulp.dest(cfg.root + '/' + cfg.dest.images));
});

gulp.task('copy', function() {
  gulp.src(cfg.root + '/' + cfg.src.scripts  + '/libs/*.js')
    .pipe(gulp.dest(cfg.root + '/' + cfg.dest.scripts  + '/libs'));
});

gulp.task('styles', ['less', 'cmq']);
gulp.task('scripts', ['jshint', 'concat', 'concat-plugins', 'jshint-concat']);
gulp.task('images', ['imagemin']);
gulp.task('default', ['styles', 'scripts', 'copy']);
gulp.task('dist', ['styles', 'cssmin', 'scripts', 'uglify', 'uglify-plugins', 'images']);
gulp.task('server', ['connect', 'watch', 'open']);
