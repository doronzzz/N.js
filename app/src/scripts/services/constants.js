define([],function(){
	return {
		baseURL:function(){
			return "http://localhost:9000/src";
		},
		widgetsURL:function(){
			return "https://rawgit.com/doronzzz/N.js/master/app/src/widget.html";
		},
		nuregoLibURL:function(){
			return this.baseURL() + "/dist/bin.js";
		}
	};
})
 