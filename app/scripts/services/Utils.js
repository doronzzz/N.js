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
		}
	};

	return Utils;
})
