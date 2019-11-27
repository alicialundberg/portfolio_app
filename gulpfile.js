const {src, dest, watch, series, parallel} = require("gulp");
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');
const uglifyjs = require('gulp-uglify-es').default;
const babel = require('gulp-babel');
let sass = require('gulp-sass');
sass.compiler = require('node-sass');


/* Get path to files */
const files = {
  phpPath: "src/*.php",
  sassPath: "src/**/*.scss",
  jsPath: "src/**/*.js",
  imagePath: "src/images/*"
}

  /* Task: Get all PHP-files och push to pub */
  function copyPHP() {
    return src(files.phpPath)
      .pipe(dest('pub'))
      .pipe(browserSync.stream());
  }

  /* Task: Get all SASS-files and convert to CSS, then push to pub */
  function sassTask() {
    return src( files.sassPath)
      .pipe(sass().on('error', sass.logError))
      .pipe(dest('pub/css')
      );
  }
  /* Task: Get all JS-files, convert them with Babel, uglify and push to pub */
  function jsTask() {
    return src([files.jsPath])
      .pipe(babel({
        presets: [
          ['@babel/env', {
            modules: false
          }]
        ]
      }))
      .pipe(uglifyjs())
      .pipe(dest('pub/'))
      .pipe(browserSync.stream());
  }

  /* Task: Get all images and minify them, then push tp pub */
  function imageTask() {
    return src(files.imagePath)
      .pipe(imagemin())
      .pipe(dest('pub/images'))
      .pipe(browserSync.stream());
  }

  /* Task: Watcher and reload the website if files changes */
  function watchTask() {
    browserSync.init({
        server: {
            baseDir: 'pub/'
        }
    });
    watch([files.phpPath, files.jsPath, files.sassPath, files.imagePath],
      parallel(copyPHP, jsTask, sassTask, imageTask)
      ).on('change', browserSync.reload);
  }

  /* Exports a series of tasks */
  exports.default = series(
    parallel(copyPHP, jsTask, sassTask, imageTask),
    watchTask);
