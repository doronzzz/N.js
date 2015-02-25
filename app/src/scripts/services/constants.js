define(['utils'],function(utils){
	return {
		isDevMode:function(){
			return true;
		},

		baseURL:function(){
			var baseUrlEl = $("nurego-baseurl").attr('url');
			if(baseUrlEl){
				return baseUrlEl;
			}else{
				return "http://localhost:9000/src";
			}
		},
		nuregoApiKey:function(){
			return utils.URLToArray(window.location.href).apiKey;
		},
		nuregoApiUrl:function(){
			return "https://am-staging.nurego.com/v1";
		},
		widgetsURL:function(){
			if(this.isDevMode()){
				return "http://localhost:9000/src/widget.html";
			}
			return "http://rawgit.com/doronzzz/N.js/master/app/src/widget.html";
		},
		nuregoLibURL:function(){
			return this.baseURL() + "/dist/bin.js";
		}
	};
})
 