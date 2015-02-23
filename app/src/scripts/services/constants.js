define([],function(){
	return {
		baseURL:function(){debugger;
			var baseUrlEl = $("nurego-baseurl").attr('url');
			if(baseUrlEl){
				return baseUrlEl;
			}else{
				return "http://localhost:9000/src";
			}
		},
		widgetsURL:function(){
			return "http://rawgit.com/doronzzz/N.js/master/app/src/widget.html";
		},
		nuregoLibURL:function(){
			return this.baseURL() + "/dist/bin.js";
		}
	};
})
 