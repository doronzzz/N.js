define(['utils'],function(utils){
	return {
		jsBaseURL:function(){
			var baseUrlEl = $("nurego-js-baseurl").attr('url');
			if(baseUrlEl){
				return baseUrlEl;
			}else{
				return ".";
			}
		},

		getNuregoApiKey:function(){
			var apiKey = $("nurego-api-key").attr('key');
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
 