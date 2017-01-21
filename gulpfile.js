var gulp = require('gulp'),
    babel = require('gulp-babel'),
    scss = require("gulp-scss"),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    pump = require('pump');

gulp.task('scripts', () => {
    return gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
});

gulp.task("scss", () => {
   return gulp.src(
        "./src/scss/**/*.scss"
    ).pipe(scss(
        {"bundleExec": true}
    )).pipe(gulp.dest("./dist/css/"))
});

gulp.task('default', ['scripts', 'scss', 'watch']);

gulp.task('watch', () => {
    return gulp.watch(['./src/**/*', 'index.html'], ['default']);
});

