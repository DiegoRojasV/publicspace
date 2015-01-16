(function() {

  'use strict';

  module.exports = function(grunt) {

    var tasks = {};

    // ============== COMPASS TASK ==============

    tasks.compass = {
      dist: {
        options: {
          sassDir: 'sass',
          cssDir: './css',
          config: './config.rb',
          outputStyle: 'compressed'
        }
      }
    };

    // ============== WATCH TASKS ==============

    tasks.watch = {
      css: {
        files: '**/*.scss',
        tasks: ['compass']
      },
      js: {
        files: 'js/*.js',
        tasks: []
      }
    };

    // ============== BROWSER SYNC =============

    tasks.browserSync = {
      dev: {
        bsFiles: {
          src: ['./*.html', './css/*.css']
        },
        options: {
          server: {
            baseDir: './',
            index: 'index.html'
          },
          watchTask: true
        }
      }
    };

    // ============== LOAD TASKS ==============

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-browser-sync');

    grunt.initConfig(tasks);

    // ================= TASKS =================

    grunt.registerTask('default', ['browserSync', 'watch']);

  };

})();