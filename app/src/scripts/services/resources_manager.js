define(["underscore","utils","constants","jquery"],function(_,utils,constants,$Nurego){

	var ResourcesManager = {
		resources:{
			html:{},
			css:{}
		},

		getHtmlTemplate:function(){
			var deffer = $Nurego.deffer;
			$Nurego.get("url",function(data){
				deffer.resolve(data);
			})
			return deffer;
		},

		getCssResource:function(){
			var deffer = $Nurego.deffer;
			$Nurego.get("url",function(data){
				deffer.resolve(data);
			})
			return deffer;
		}
	}

	return ResourcesManager;
})
