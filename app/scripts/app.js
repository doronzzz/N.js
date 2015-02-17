define([
		"../services/API",
		"../services/Utils",

		"../models/login",
		"../models/price_list",

		"../components/login/login.ctrl",
		"../components/price_list/price_list.ctrl"
		],

	function(API,Utils,loginModel,priceListModel,loginComonent,priceListComonent){ 
		return {
			myAPI:API,
			utils:Utils,
			components:{
				login:{
					view:loginComonent,
					model:loginModel
				},
				priceList:{
					view:priceListComonent,
					model:priceListModel
				}
			}
		}
})
