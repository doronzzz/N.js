// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
require.config({
    baseUrl: '../../../',
    paths: {
        json2: '../../../bower_components/json2/json2',
        json3: '../../../bower_components/json3/lib/json3',
        requirejs: '../../../bower_components/requirejs/require',
        text: '../../../bower_components/requirejs-text/text',
        backbone: '../../../bower_components/backbone/backbone',
        jquery: '../../../bower_components/jquery/dist/jquery',
        'requirejs-text': '../../../bower_components/requirejs-text/text',
        underscore: '../../../bower_components/underscore/underscore',
		
		//Main App services goes here:
        API:"../scripts/services/API",
		Utils:"../scripts/services/Utils",
		WidgetsFactory:"../scripts/services/WidgetsFactory",

		//App Models goes here:
		LoginModel:"../scripts/models/login",
		PriceListModel:"../scripts/models/price_list",

		//App Views Controllers goes here:
		LoginViewCtrl:"../scripts/components/login/login.ctrl",
		PriceListViewCtrl:"../scripts/components/price_list/price_list.ctrl",

		//Components HTML goes here:
		LoginHTML: '../scripts/components/login/login.html',
        PriceListHTML: '../scripts/components/price_list/price_list.html',

        //Main App file goes here:
        main_app: '../scripts/app'
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
require(['main_app'],function(app){
	if(window != window.top){//we are running inside an iframe
		//window.postMessage('')
	}
});

