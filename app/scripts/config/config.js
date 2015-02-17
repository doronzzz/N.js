// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
require.config({
    //baseUrl: '../../../',
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
        API:"../services/API",
		Utils:"../services/Utils",
		WidgetInjector:"../services/WidgetInjector",

		//App Models goes here:
		LoginModel:"../models/login",
		PriceListModel:"../models/price_list",

		//App Views Controllers goes here:
		LoginViewCtrl:"../components/login/login.ctrl",
		PriceListViewCtrl:"../components/price_list/price_list.ctrl",

		//Components HTML goes here:
		LoginHTML: '../components/login/login.html',
        PriceListHTML: '../components/price_list/price_list.html',

        //Main App file goes here:
        main_app: '../app'
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
	if(false && window != window.top){//we are not a widget iframe
		//window.postMessage('')
	}else{//we are a widget iframe draw the widget with the right params
		var params = app.utils.URLToArray(window.location.href);
		var thisWidget = app.components[params.widget];
		var widgetModel = new thisWidget.model();
		var widgetView = new thisWidget.view(widgetModel);
		$('body').append(widgetView.render().$el);
	}
});