const gulp =                require('gulp'),
      sass =                require('gulp-sass'),
      autoprefixer =        require('gulp-autoprefixer'),
      watch =               require('gulp-watch');

gulp.task('sass', ()=> { 
    gulp.src('./scss/*.scss')      
        .pipe(sass({
            outputStyle: 'expanded'
            //outputStyle: 'compressed'
        }))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('./css'))
 });


gulp.task('watch', ['sass'], ()=>  { 
    gulp.watch('./scss/*.scss', ['sass']); 
    // Other watchers
});