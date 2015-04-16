// Generated on 2014-12-22 using generator-angular 0.10.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt){

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  // Time how long tasks take. Can help when optimizing build times
  require('time-grunt')(grunt);

  //grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-plato');
  grunt.loadNpmTasks('grunt-bower-requirejs');
  grunt.loadNpmTasks('grunt-contrib-requirejs');


  // Configurable paths for the application
  var app,appConfig;
  app = appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist'
  };


  // Define the configuration for all the tasks
  grunt.initConfig({

    // Project settings
    yeoman: appConfig,

    bowerRequirejs:{
      target:{
        rjsConfig: 'app/src/scripts/config/config.js'
      }
    },

    requirejs: {
        dev: {
          options: {
            onModuleBundleComplete: function (data){
              var fs = module.require('fs'),
                amdclean = module.require('amdclean'),
                outputFile = data.path,
                cleanedCode = amdclean.clean({
                  'filePath': outputFile,
                  'globalModules':["Nurego"]
                });

              fs.writeFileSync(outputFile, cleanedCode);
            },
            baseUrl: 'app/src/scripts/config',
            mainConfigFile: "app/src/scripts/config/config.js",
            out: "app/dist/bin.js",
            paths:{ //Include require js lib in our optimized super script.
              //requireLib: 'app/src/bower_components/requirejs/require'
              //requireLib: '../../bower_components/requirejs/require'
            },
            include: ["Nurego"],
            //include:["requireLib"],
            stubModules: ['text'],
            //findNestedDependencies: true,
            //include: 'requireLib',
            optimize: 'none'
          }
      },
      prod: {
          options: {
            baseUrl: 'app/src/scripts/config',
            mainConfigFile: "app/src/scripts/config/config.js",
            name: "config",
            out: "app/dist/bin.js",
            wrap: true,
            /*paths:{ //Include require js lib in our optimized super script.
              //requireLib: 'app/src/bower_components/requirejs/require'
              //requireLib: '../../bower_components/requirejs/require'
            },*/
            include: ["../../bower_components/almond/almond","main_app"],
            stubModules: ['text'],
            //findNestedDependencies: true,
            //include: 'requireLib',
            //optimize: 'none'
          }
      }
    },

    plato: {
        complexityreport: {
          files: {
            'reports/': ['<%= yeoman.app %>/scripts/{,*/}*.js']
          }
        }
      },

/*    html2js:{
      options: {
        module: 'templates',
        singleModule: true,
        base: 'app/'
      },*/
      //main: {
        //src: [appConfig.app+'/views/**/*.html'],
        //dest: appConfig.app+'/scripts/tmp/templates.js'
      //}
//   },

    // Watches files for changes and runs tasks based on the changed files
    watch: {
      bower: {
        files: ['bower.json'],
        tasks: ['bowerRequirejs']
      },
      js: {
        files: ['<%= yeoman.app %>/src/scripts/{,*/}{,*/}*.js',
                '<%= yeoman.app %>/src/scripts/{,*/}{,*/}*.html',
                '<%= yeoman.app %>/src/scripts/{,*/}{,*/}{,*/}*.html'],
        tasks: ['karma','requirejs:dev'], //'newer:jshint:all'
        options: {
          livereload: '<%= connect.options.livereload %>'
        }
      },
//      html: {
//        files: ['<%= yeoman.app %>/views/{,*/}{,*/}{,*/}*.html'],
//        tasks: ['html2js']
//      },
      jsTest: {
        files: ['test/spec/{,*/}{,*/}*.js'],
        tasks: ['karma'] //'newer:jshint:test',
      },
      compass: {
        files: ['<%= yeoman.app %>/src/styles/*.{scss,sass}'],
        tasks: ['compass', 'autoprefixer','requirejs:dev']
      },
      gruntfile: {
        files: ['Gruntfile.js'],
        tasks: ['karma','requirejs:dev'], //'newer:jshint:all'
      },
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          'dist/styles/{,*/}*.css',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },

    // The actual grunt server settings
    connect: {
      options: {
        port: 9000,
        // Change this to '0.0.0.0' to access the server from outside.
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect().use(
                '/app/src/bower_components',
                connect.static('./app/src/bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      test: {
        options: {
          port: 9001,
          middleware: function (connect) {
            return [
              connect.static('.tmp'),
              connect.static('test'),
              connect().use(
                '/app/src/bower_components',
                connect.static('./app/src/bower_components')
              ),
              connect.static(appConfig.app)
            ];
          }
        }
      },
      dist: {
        options: {
          open: true,
          base: '<%= yeoman.dist %>'
        }
      }
    },

    // Make sure code styles are up to par and there are no obvious mistakes
    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      all: {
        src: [
          'Gruntfile.js',
          '<%= yeoman.app %>/scripts/{,*/}*.js'
        ]
      },
      test: {
        options: {
          jshintrc: 'test/.jshintrc'
        },
        src: ['test/spec/{,*/}*.js']
      }
    },

    // Empties folders to start fresh
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%= yeoman.dist %>/{,*/}*',
            '!<%= yeoman.dist %>/.git{,*/}*'
          ]
        }]
      },
      server: '.tmp'
    },

    // Add vendor prefixed styles
    autoprefixer: {
      options: {
        browsers: ['last 1 version']
      },
      dist: {
        files: [{
          expand: true,
          cwd: '.tmp/styles/',
          src: '{,*/}*.css',
          dest: '.tmp/styles/'
        }]
      }
    },

    /*
      sass: {
        dist:{
          files:{
            'main.css':''
          }
        }
      },*/

    // Compiles Sass to CSS and generates necessary files if requested
    compass: {
      options: {
        sassDir: '<%= yeoman.app %>/src/styles',
        cssDir: '<%= yeoman.app %>/src/scripts/components/abstract',
        generatedImagesDir: '.tmp/images/generated',
        //imagesDir: '<%= yeoman.app %>/images',
        //javascriptsDir: '<%= yeoman.app %>/scripts',
        //fontsDir: '<%= yeoman.app %>/styles/fonts',
        importPath: './app/src/bower_components',
        httpImagesPath: '/images',
        httpGeneratedImagesPath: '/images/generated',
        httpFontsPath: '/styles/fonts',
        relativeAssets: false,
        assetCacheBuster: false,
        raw: 'Sass::Script::Number.precision = 10\n'
      },
      dist: {
        options: {
          generatedImagesDir: '<%= yeoman.dist %>/images/generated'
        }
      },
      server: {
        options: {
          debugInfo: true,
          sourcemap: true
        }
      }
    },

    // Renames files for browser caching purposes
    filerev: {
      dist: {
        src: [
          '<%= yeoman.dist %>/scripts/{,*/}*.js',
          '<%= yeoman.dist %>/styles/{,*/}*.css'
          //'<%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}', // TODO NADAV: how to not break urls of images?
          //'<%= yeoman.dist %>/styles/fonts/{,*/}*'
        ]
      }
    },

    // Reads HTML for usemin blocks to enable smart builds that automatically
    // concat, minify and revision files. Creates configurations in memory so
    // additional tasks can operate on them
    useminPrepare: {
      html: '<%= yeoman.app %>/index.html',
      options: {
        dest: '<%= yeoman.dist %>',
        flow: {
          html: {
            steps: {
              js: ['concat'], //, 'uglifyjs'
              css: ['cssmin']
            },
            post: {}
          }
        }
      }
    },

    // Performs rewrites based on filerev and the useminPrepare configuration
    usemin: {
      html: ['<%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        assetsDirs: ['<%= yeoman.dist %>','<%= yeoman.dist %>/images']
      }
    },

    // The following *-min tasks will produce minified files in the dist folder
    // By default, your `index.html`'s <!-- Usemin block --> will take care of
    // minification. These next options are pre-configured if you do not wish
    // to use the Usemin blocks.
    // cssmin: {
    //   dist: {
    //     files: {
    //       '<%= yeoman.dist %>/styles/main.css': [
    //         '.tmp/styles/{,*/}*.css'
    //       ]
    //     }
    //   }
    // },
    uglify: {
       dist: {
         files: {
           '<%= yeoman.dist %>/scripts/scripts.js': [
             '<%= yeoman.dist %>/scripts/scripts.js'
           ],
           '<%= yeoman.dist %>/scripts/vendor.js': [
             '<%= yeoman.dist %>/scripts/vendor.js'
           ]
         }
       }
    },
    // concat: {
    //   dist: {}
    // },

    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/images'
        },
        {
          expand: true,
          cwd: '<%= yeoman.app %>/backgrounds',
          src: '{,*/}*.{png,jpg,jpeg,gif}',
          dest: '<%= yeoman.dist %>/backgrounds'
        }]
      }
    },

    svgmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%= yeoman.app %>/images',
          src: '{,*/}*.svg',
          dest: '<%= yeoman.dist %>/images'
        }]
      }
    },

/*    htmlmin: {
      dist: {
        options: {
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseBooleanAttributes: true,
          removeCommentsFromCDATA: true,
          removeOptionalTags: true
        },
        files: [{
          expand: true,*/
          //cwd: '<%= yeoman.dist %>',
          //src: ['*.html', 'comp/{,*/}*.html'],
          //dest: '<%= yeoman.dist %>'
        //}]
      //}
    //},

    
    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: '<%= yeoman.app %>',
          dest: '<%= yeoman.dist %>',
          src: [
            '*.{ico,png,txt}',
            '.htaccess',
            '*.html',
            'sidebar-menu.json',
            'views/{,*/}*.html',
            'images/{,*/}*.{webp}',
            'styles/fonts/{,*/}*.otf',
            'styles/fonts/{,*/}*.ttf',
            'styles/fonts/{,*/}{,*/}*.*'
          ]
        }, {
          expand: true,
          cwd: '.tmp/images',
          dest: '<%= yeoman.dist %>/images',
          src: ['generated/*']
        }, {
          expand: true,
          cwd: '.',
          src: 'bower_components/bootstrap-sass-official/assets/fonts/bootstrap/*',
          dest: '<%= yeoman.dist %>'
        }]
      },
      styles: {
        expand: true,
        cwd: '<%= yeoman.app %>/styles',
        dest: '.tmp/styles/',
        src: '{,*/}*.css'
      }
    },

    // Run some tasks in parallel to speed up the build process
    concurrent: {
      server: [
        'compass:server'
      ],
      test: [
        'compass'
      ],
      dist: [
        'compass:dist',
        'imagemin',
        'svgmin'
      ]
    },

    // Test settings
    karma: {
      unit: {
        configFile: 'test/karma.conf.js',
        singleRun: true
      }
    }
  });


  grunt.registerTask('serve', 'Compile then start a connect web server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['build', 'connect:dist:keepalive']);
    }

    grunt.task.run([
      'clean:server',
      //'html2js',
      'bowerRequirejs',
      'concurrent:server',
      'autoprefixer',
      'connect:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('server', 'DEPRECATED TASK. Use the "serve" task instead', function (target) {
    grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
    grunt.task.run(['serve:' + target]);
  });

  grunt.registerTask('test', [
    'clean:server',
    //'html2js',
    'concurrent:test',
    'autoprefixer',
    'connect:test',
    'plato:complexityreport',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'bowerRequirejs',
    //'html2js',
    'useminPrepare',
    'concurrent:dist',
    //'autoprefixer',
    //'concat',
    'copy:dist',
    //'cssmin',
    'uglify',
    'filerev',
    'usemin',
    /*'htmlmin'*/
  ]);

  grunt.registerTask('default', [
    //'newer:jshint',
    'test',
    'build'
  ]);
};
