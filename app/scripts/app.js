define([
		"services/API",
		"services/Utils",

		"models/login",

		"components/login/login.ctrl"
		],
	function(API,Utils,loginModel,loginComonent){ 
		return {
			myAPI:API,
			utils:Utils,
			components:{
				login:{
					view:loginComonent,
					model:loginModel
				}
			}
		}
})
