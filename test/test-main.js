var allTestFiles = [];
var TEST_REGEXP = /(spec|test)\.js$/i;

var pathToModule = function(path) {
  return path.replace(/^\/base\//, '').replace(/\.js$/, '');
};

Object.keys(window.__karma__.files).forEach(function(file) {
  if (TEST_REGEXP.test(file)) {
    // Normalize paths to RequireJS module names.
    allTestFiles.push(pathToModule(file));
  }
});

require.config({
  // Karma serves files under /base, which is the basePath from your config file
  baseUrl: '/base',
    paths: {
        json2: '../app/src/bower_components/json2/json2',
        json3: '../app/src/bower_components/json3/lib/json3',
        requirejs: '../app/src/bower_components/requirejs/require',
        text: '../app/src/bower_components/requirejs-text/text',
        backbone: '../app/src/bower_components/backbone/backbone',
        jquery: '../app/src/bower_components/jquery/dist/jquery',
        'requirejs-text': '../app/src/bower_components/requirejs-text/text',
        underscore: '../app/src/bower_components/underscore/underscore',
        constants: '../src/scripts/services/constants',
        utils: '../src/scripts/services/utils',
        widgetFactory: '../src/scripts/services/widget_factory',
        loginModel: '../src/scripts/models/login',
        priceListModel: '../src/scripts/models/price_list',
        loginViewCtrl: '../src/scripts/components/login/login.ctrl',
        priceListViewCtrl: '../src/scripts/components/price_list/price_list.ctrl',
        loginHTML: '../src/scripts/components/login/login.html',
        priceListHTML: '../src/scripts/components/price_list/price_list.html',
        Nurego: '../src/scripts/app'
    },
    shim: {
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        }
    },
  // dynamically load all test files
  deps: allTestFiles,

  // we have to kickoff jasmine, as it is asynchronous
  callback: window.__karma__.start
});


