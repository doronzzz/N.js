define([
		"API",
		"Utils",
		"WidgetsFactory",
		"LoginModel",
		"PriceListModel",
		"LoginViewCtrl",
		"PriceListViewCtrl"
		],
	function(API,Utils,WidgetFactory,loginModel,
			 priceListModel,LoginViewCtrl,PriceListViewCtrl){
		
				return {
					myAPI:API,
					utils:Utils,
					widgetFactory:WidgetFactory,
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
				}
});
