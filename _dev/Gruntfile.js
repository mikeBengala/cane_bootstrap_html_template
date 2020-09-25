
module.exports = function(grunt) {
    const sass = require('node-sass');
 
    require('load-grunt-tasks')(grunt);

     
    grunt.initConfig({
        sass: {
            options: {
                implementation: sass,
                sourceMap: true,
                style: 'compressed'
            },
            dist: {
                files: {
                    '../style.css': 'sass/style.scss'
                }
            }
        },
        watch: {
          css: {
            files: ['sass/*', 'sass/**/*','js/*.js', 'js/libraries/*.js' ],
            tasks: ['sass', 'concat', 'cssmin', 'uglify']
          }
        },
        cssmin: {
          options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              '../style.css': ['../style.css']
            }
          }
        },
        concat: {
            options: {
              separator: ';',
            },
            dist: {
              src: ['js/jquery.min.js','js/libraries/*.js','js/script.js'],
              dest: '../script.js',
            }
        },
        uglify: {
          options: {
            mangle: false
          },
          my_target: {
            files: {
              '../script.js': ['js/jquery.min.js','js/libraries/*.js','js/script.js']
            }
          }
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // grunt.registerTask('concat-js', ['concat']);
    grunt.registerTask('default', ['sass']);
};