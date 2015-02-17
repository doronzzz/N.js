// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
require.config({
    baseUrl: '../../../',
    paths: {
        main_app: '../app',
        json2: '../../../bower_components/json2/json2',
        json3: '../../../bower_components/json3/lib/json3',
        requirejs: '../../../bower_components/requirejs/require',
        text: '../../../bower_components/requirejs-text/text',
        backbone: '../../../bower_components/backbone/backbone',
        jquery: '../../../bower_components/jquery/dist/jquery',
        'requirejs-text': '../../../bower_components/requirejs-text/text',
        underscore: '../../../bower_components/underscore/underscore',

        /***** HTML TEMPLATES ********/
        login_html: "../components/login/login.html",
        price_list_html: "../components/price_list/price_list.html"

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
require(['main_app',"jquery"],function(app){
	var loginModel = new app.components.login.model();
	var loginView = new app.components.login.view(loginModel);
	var loginEl = loginView.render().$el;
	$('body').append(loginEl);


	var priceListModel = new app.components.priceList.model();
	var priceListView = new app.components.priceList.view(priceListModel);
	var priceListEl = priceListView.render().$el;
	$('body').append(priceListEl);
});

