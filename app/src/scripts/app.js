define([
		"API",
		"Utils",
		"WidgetInjector",
		"LoginModel",
		"PriceListModel",
		"LoginViewCtrl",
		"PriceListViewCtrl"
		],
	function(API,Utils,WidgetInjector,loginModel,
			 priceListModel,LoginViewCtrl,PriceListViewCtrl){
				var app = {
					myAPI:API, 
					utils:Utils,
					widgetInjector:WidgetInjector,
					components:{
						login:{
							view:LoginViewCtrl,
							model:loginModel
						},
						priceList:{
							view:PriceListViewCtrl,
							model:priceListModel
						}
					}
				};

				app.start = function(){
					var params = app.utils.URLToArray(window.location.href);
					var thisWidget = app.components[params.widget];
					var widgetModel = new thisWidget.model();
					var widgetView = new thisWidget.view(widgetModel);
					$('body').append(widgetView.render().$el);
				};
 
				app.initLib = function(){
					window.postMessage('initNuregoLib',this);
				}

				return app;
});
