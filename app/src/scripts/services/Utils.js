define(["underscore"],function(_){
	
	//Doron: Overwrite template syntax to a more angular like syntax
	_.templateSettings = {
    	interpolate: /\{\{=(.+?)\}\}/g,
    	evaluate: /\{\{(.+?)\}\}/g,
	};
 
	var Utils = {
		URLToArray:function(url) {
		  var request = {};
		  var pairs = url.substring(url.indexOf('?') + 1).split('&');
		  for (var i = 0; i < pairs.length; i++){
		    var pair = pairs[i].split('=');
		    request[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
		  }
		  return request;
		},
		listen:function(fn){debugger
			var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
			var eventer = window[eventMethod];
			var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";
			eventer(messageEvent,fn,false);
		}
	};

	return Utils;
})
