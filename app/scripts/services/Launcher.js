define(["underscore"],function(_){
	
	//Doron: Overwrite template syntax to a more angular like syntax
	_.templateSettings = {
    	interpolate: /\{\{=(.+?)\}\}/g,
    	evaluate: /\{\{(.+?)\}\}/g,
	};

	var Launcher = {

	};

	return Launcher;
})
