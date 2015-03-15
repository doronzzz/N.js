define(["underscore","utils","constants"],function(_,utils,constants){

	var widgetsFactory = {
		options:{
			widget:"",
			html:"",
			css:"",
			parentUrl:"",
			token:""
		},

		build:function(components,opt){
			console.log("1")
			this.createWidgetFrame(components,opt);
		},

		createWidgetFrame:function(component,opt){
			var compSrc = this.buildComponentUrl(component,opt);
			var iframe = document.createElement('iframe');
			iframe.src = compSrc;

			this.decorateIframe(iframe);
			$(opt.element).append(iframe);
		},

		decorateIframe:function(iframeEl){
			/*var style ={"width","100%"}
			{"height","100%"}
			{"height","100%"}
			{"display","block"}
			{"border","0px"}
			*/
			iframeEl.style.setProperty("width","100%");
			iframeEl.style.setProperty("height","100%");
			iframeEl.style.setProperty("display","block");
			iframeEl.style.setProperty("border","0px");
			iframeEl.seamless = 'seamless';

			var zisUtils = utils;
			var onWidgetLoad = function(e){
				var params = zisUtils.URLToArray(this.src);
				var iframe = this;
				
				var fn = function(data){//post html result to init widget with template;
					iframe.contentWindow.postMessage(data,"*");
				};

				if(params.html && params.html != "null"){
					$.get(params.html,fn);
				}
			};

			iframeEl.onload = onWidgetLoad;
			//TDB:  //iframe.onload(subscribe to js hub events)
		},
		
		buildComponentUrl:function(component,opt){			
			var nuregoApiParam = constants.getNuregoApiKey();
			var res = constants.widgetsURL() + "?widget=" + component;
			res += "&apiKey=" + nuregoApiParam + "&apiBaseUrl=" + constants.nuregoApiUrl();
			res += "&parent=" + window.location.origin;
			var indx = 0;
			_.each(opt.configParams,function(val,key){
				if(key !== "urlParams"){
					var seperator = "&"; //(indx === 0) ? "?" : "&";
					res += seperator + key + "=" + val;
					indx++;
				}
			})

			_.each(opt.configParams.urlParams,function(val,key){
				var seperator = "&"; //(indx === 0) ? "?" : "&";
				res += seperator + key + "=" + val;
				indx++;
			})

			return res;
		}
	}
	return widgetsFactory;
})
