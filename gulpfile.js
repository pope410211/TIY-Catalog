var gulp = require('gulp');

gulp.task('do-something', function(){
  console.log(arguments);
  console.log('I did something');
})

gulp.task('sass', function(){
  // node-sass src/scss/main.scss -o src/css/
  var sass = require('gulp-sass');



  gulp.src('src/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css/'))
    .pipe(sass({ outputStyle: 'compressed'}))
    .pipe(gulp.dest('dist/css/'))
})// END gulp.task(sass)

gulp.task('build', [ 'sass' ], function(){
  gulp.src([// gulp.from
    'src/*', '!src/scss'
  ])
    .pipe(gulp.dest('dist/')); //gulp.into
});
