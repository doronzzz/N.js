define([
		"constants",
		"utils",
		"widgetInjector",
		"loginModel",
		"priceListModel",
		"loginViewCtrl",
		"priceListViewCtrl"
		],
	function(constants,utils,widgetInjector,loginModel,priceListModel,loginViewCtrl,priceListViewCtrl){
				var app = {
					constants:constants, 
					utils:utils,
					widgetInjector:widgetInjector,
					components:{
						login:{
							view:loginViewCtrl,
							model:loginModel
						},
						priceList:{
							view:priceListViewCtrl,
							model:priceListModel
						}
					}
				};

				app.start = function(){
					var params = app.utils.URLToArray(window.location.href);
					var thisWidget = app.components[params.widget];
					var widgetModel = new thisWidget.model();
					var widgetView = new thisWidget.view(widgetModel).render().$el;
					$('body').append(widgetView);
				};
 
				app.initLib = function(){
					window.postMessage('initNuregoLib',this);
				}

				return app;
});
