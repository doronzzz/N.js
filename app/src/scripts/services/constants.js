define(['utils'],function(utils){
	return {
		jsBaseURL:function(){
			var baseUrlEl = $("nurego-js-baseurl").attr('url');
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
			var nuregoApi = $("nurego-api-baseurl").attr('url');
			if(nuregoApi){
				return nuregoApi;
			}else{
				return "https://am-staging.nurego.com/v1";
			}
		},
		widgetsURL:function(){
			return this.jsBaseURL() + "/widget.html";
		}
	};
})
 