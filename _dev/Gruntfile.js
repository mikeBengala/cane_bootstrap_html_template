
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
            files: ['sass/*', 'sass/**/*' ],
            tasks: ['sass']
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
        }
    });
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.registerTask('default', ['sass']);
};