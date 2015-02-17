define(["underscore","Utils","API"],function(_,Utils,API){

	var widgetsFactory = {
		options:{},
		build:function(opt){
			this.options = opt;
			this.initWidgets();
		},
		initComponents:function(config){
			/*for(config.components){
				this.createWidgetFrame(config.components);
			}*/
		},
		createWidgetFrame:function(component){
			var iframe = createElement('iframe');
			var compSrc = this.buildWidgetUrl(component);
			iframe.src = compSrc;
		},

		buildComponentUrl:function(widget){
			var res = "https://" + API.baseURL() + "/widgets/";
			var indx = 0;
			_.each(widget.configParams,function(key,val){
				var seperator = (indx === 0) ? "?" : "&";
				res += seperator + key + "=" + val;
				indx++;
			})
		}
	}

	return widgetsFactory;
})
