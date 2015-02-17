define(["underscore","Utils"],function(_){

	var widgetsFactory = {
		options:{},
		build:function(opt){
			this.options = opt;
			this.initWidgets();
		},
		initWidgets:function(config){
			/*for(config.components){
				this.createWidgetFrame(config.components);
			}*/
		},
		createWidgetFrame:function(component){
				var iframe = createElement('iframe');
				iframe.src = "https://" + Nurego.baseURL + "/widgets/"
		}
	}

	return widgetsFactory;
})
