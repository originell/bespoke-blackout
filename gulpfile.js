var gulp = require('gulp'),
  clean = require('gulp-clean'),
  header = require('gulp-header'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  pkg = require('./package.json'),
  browserify = require('browserify'),
  source = require('vinyl-source-stream'),
  buffer = require('vinyl-buffer'),
  template = require('lodash').template;

gulp.task('default', ['clean', 'compile']);
gulp.task('dev', ['compile', 'watch']);

gulp.task('watch', function() {
  gulp.watch('lib/**/*.js', ['compile']);
});

gulp.task('clean', function() {
  return gulp.src(['dist'], { read: false })
    .pipe(clean());
});

gulp.task('compile', ['clean'], function() {
  return browserify('./lib/bespoke-blackout.js')
    .bundle({ standalone: 'bespoke.plugins.blackout' })
    .pipe(source('bespoke-blackout.js'))
    .pipe(buffer())
    .pipe(header(template([
      '/*!',
      ' * <%= name %> v<%= version %>',
      ' *',
      ' * Copyright <%= new Date().getFullYear() %>, <%= author.name %>',
      ' * This content is released under the <%= licenses[0].type %> license',
      ' * <%= licenses[0].url %>',
      ' */\n\n'
    ].join('\n'), pkg)))
    .pipe(gulp.dest('dist'))
    .pipe(rename('bespoke-blackout.min.js'))
    .pipe(uglify())
    .pipe(header(template([
      '/*! <%= name %> v<%= version %> ',
      '© <%= new Date().getFullYear() %> <%= author.name %>, ',
      '<%= licenses[0].type %> License */\n'
    ].join(''), pkg)))
    .pipe(gulp.dest('dist'));
});
