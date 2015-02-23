// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
require.config({
    paths: {
        json2: '../../bower_components/json2/json2',
        json3: '../../../bower_components/json3/lib/json3',
        requirejs: '../../bower_components/requirejs/require',
        text: '../../bower_components/requirejs-text/text',
        backbone: '../../bower_components/backbone/backbone',
        jquery: '../../bower_components/jquery/dist/jquery',
        'requirejs-text': '../../bower_components/requirejs-text/text',
        underscore: '../../bower_components/underscore/underscore',
        constants: '../services/constants',
        utils: '../services/utils',
        widgetFactory: '../services/widget_factory',
        loginModel: '../models/login',
        priceListModel: '../models/price_list',
        loginViewCtrl: '../components/login/login.ctrl',
        priceListViewCtrl: '../components/price_list/price_list.ctrl',
        loginHTML: '../components/login/login.html',
        priceListHTML: '../components/price_list/price_list.html',
        Nurego: '../app',
        almond: '../../bower_components/almond/almond'
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
    packages: [

    ]
});
 

// Start loading the main app file. Put all of
// your application logic in there.
/*require(['Nurego'],function(app){
	
});*/