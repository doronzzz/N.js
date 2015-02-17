define(["underscore","Utils","API"],function(_,Utils,API){

	var widgetsFactory = {
		options:{
			widget:"",
			html:"",
			css:"",
			parentUrl:"",
			token:""
		},
		build:function(components,opt){
			this.options = opt;
			var params = Utils.URLToArray(window.location.href);
			console.log(params);
			this.initComponent();
		},
		initComponent:function(config){
			this.createWidgetFrame();
		},
		createWidgetFrame:function(component){
			var iframe = createElement('iframe');
			var compSrc = this.buildComponentUrl(component);
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
