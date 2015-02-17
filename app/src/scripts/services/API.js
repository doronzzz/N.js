define([],function(){
	return {
		baseURL:function(){
			return "https://url.com"
		},
		getPrices:function(){
			return this.baseURL() + "/prices"
		}
	};
})
 