define(["underscore","utils","constants","jquery"],function(_,utils,constants,$){

	var ResourcesManager = {
		resources:{
			html:{},
			css:{}
		},

		getHtmlTemplate:function(){
			var deffer = $.deffer;
			$.get("url",function(data){
				deffer.resolve(data);
			})
			return deffer;
		},

		getCssResource:function(){
			var deffer = $.deffer;
			$.get("url",function(data){
				deffer.resolve(data);
			})
			return deffer;
		}
	}

	return ResourcesManager;
})
