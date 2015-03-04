define(['utils'],function(utils){
	return {
		jsBaseURL:function(){
			var baseUrlEl = $("nurego-js-baseurl").attr('url');
			if(baseUrlEl){
				return baseUrlEl;
			}else{
				return "http://rawgit.com/doronzzz/N.js/master/app/src";
			}
		},

		getNuregoApiKey:function(){
			//return "l402b7a9-dc19-43fd-89cd-64e8fe101347";
			var apiKey = $("nurego-public-customer-id").attr('id');
			var apiKeyParam = utils.URLToArray(window.location.href).apiKey;
			if(apiKey){
				return apiKey;
			}
			if(apiKeyParam){
				return apiKeyParam;
			}	
		},
		
		nuregoApiUrl:function(){
			var nuregoApi = $("nurego-api-baseurl").attr('url');
			var nuregoApiParam = utils.URLToArray(window.location.href).apiBaseUrl;
			if(nuregoApi){
				return nuregoApi;
			}
			if(nuregoApiParam){
				return nuregoApiParam;
			}
			else{//staging is the default
				return "https://am-staging.nurego.com/v1";
			}
		},

		widgetsURL:function(){
			return this.jsBaseURL() + "/widget.html";
		}
	};
})
 