var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// // Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {
 browserSync.init({
     server: "src/"
 });

 gulp.watch("src/scss/*.scss", ['sass']);
 gulp.watch("src/*.html").on('change', browserSync.reload);
 gulp.watch("src/js/**/*.js").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function(){
 // node-sass src/scss/main.scss -o src/css/
 var sass = require('gulp-sass');


 gulp.src('src/scss/main.scss')
   .pipe(sass())
   .pipe(gulp.dest('src/css/'))
   .pipe(sass({outputStyle: 'compressed' }))
   .pipe(gulp.dest('dist/css/'))
   .pipe(browserSync.stream());
}); // END gulp.task(sass)

gulp.task('clean', function(done){
 var del = require('del');

 del([
   'dist/**/*.*',
   'dist/**/.*',
   'dist/*.*',
   'dist/*',
   '!dist/.gitignore'
 ], done);
}); //END gulp.task(clean)

gulp.task('build', [ 'clean', 'sass' ], function(){
 gulp.src([  // gulp.from()
   'src/*', '!src/scss'
 ])
   .pipe(gulp.dest('dist/')); // gulp.into
});
