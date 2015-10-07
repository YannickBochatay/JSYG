'use strict';

module.exports = function (grunt) {
    
    var files = [
        "jsyg-wrapper/JSYG-wrapper.js",
        "jsyg-point/JSYG.Point.js",
        "jsyg-vect/JSYG.Vect.js",
        "jsyg-matrix/JSYG.Matrix.js",
        "jsyg-strutils/JSYG-strutils.js",
        "jsyg-utils/JSYG-utils.js",
        "jsyg-events/JSYG.Events.js",
        "jsyg-stdconstruct/JSYG.StdConstruct.js",
    ];
    
    files = files.map(function(file) { return "bower_components/"+file; });
    
    files.push("jsyg-amd.js");
   
    grunt.initConfig({
      concat: {
          options: {
            separator: '\n\n',
          },
          dist: {
            src: files,
            dest: 'JSYG.js',
          },
      },
      docco: {
        debug: {
            src: ['JSYG.js'],
            options: {
                commentMatcher : /\/\*\*/,
                output: 'docco/'
            }
        }
      },
      jsdoc : {
        dist : {
            src: ['./JSYG.js'],
            jsdoc: './node_modules/.bin/jsdoc',
            options: {
                destination: 'jsdoc',
                configure: './node_modules/grunt-jsdoc/node_modules/jsdoc/conf.json',/*
                template: './node_modules/ink-docstrap/template'*/
            }
        }
      }
    });
    
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    grunt.loadNpmTasks('grunt-jsdoc'); 
    
    grunt.loadNpmTasks('grunt-docco');
  
    grunt.registerTask('default', ['concat','jsdoc']);

};
