define([],function(){
	return {
		baseURL:function(){
			return "http://localhost:9000/src";
		},
		widgetsURL:function(){
			return this.baseURL() + "/widget.html";
		},
		nuregoLibURL:function(){
			return this.baseURL() + "/dist/bin.js";
		}
	};
})
 