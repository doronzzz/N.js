define([
		"constants",
		"utils",
		"widgetFactory",
		"loginModel",
		"priceListModel",
		"loginViewCtrl",
		"priceListViewCtrl"
		],
	function(constants,utils,widgetFactory,loginModel,priceListModel,loginViewCtrl,priceListViewCtrl){
				var app,lib;
				app = {};
				lib = {
					constants:constants, 
					utils:utils,
					widgetFactory:widgetFactory,
					components:{
						login:{
							view:loginViewCtrl,
							model:loginModel
						},
						priceList:{
							view:priceListViewCtrl,
							model:priceListModel
						}
					}
				};

				app.init = function(opt){
					_.forEach(opt.components,function(v,k){
						console.log(k)
						console.log(v)
						lib.widgetFactory.build(k,v);
					})
				},
				
				app.onWidgetLoaded = function(){
					var params,thisWidget,widgetModel,widgetView;
					params = lib.utils.URLToArray(window.location.href);
					console.log(params)
					var draw = function(){
						thisWidget = lib.components[params.widget];
				    	widgetModel = new thisWidget.model({apiKey:params.apiKey});
				    	widgetView = new thisWidget.view(widgetModel).render().$el;
				    	$('body').append(widgetView);
				    	widgetModel.fetch({dataType:"jsonp"});
					}

					var onHTML = function(e){
						var key = e.message ? "message" : "data";
		    			var data = e[key];
		    			//run function//
		    			thisWidget = lib.components[params.widget];
				    	widgetModel = new thisWidget.model({apiKey:params.apiKey});
				    	widgetView = new thisWidget.view(widgetModel,data).render().$el;
				    	$('body').append(widgetView);
				    	widgetModel.fetch({dataType:"jsonp"});
					};

					if(params.html && params.html != "null"){//widget with html resource to load before drawing.
						utils.listen(onHTML)
					}else{//go ahead and draw the widget
						draw();	
					}
				}


				$(document).ready(function(){
					var elems = $("nurego-widget");
					if(elems.length){
						var comps = {};debugger;
						for(var i = 0; i<elems.length; i++){
							var nameAttr = elems[i].getAttribute("name");
							var cssAttr = elems[i].getAttribute("css");
							var htmlAttr = elems[i].getAttribute("html");

							var ssoRedirect = elems[i].getAttribute("redirect-url");

							comps[nameAttr] = {};

							var comp = comps[nameAttr];
							comp.element = elems[i];
							comp.configParams = {
								css:cssAttr,
								html:htmlAttr
							}
							if(ssoRedirect){
								comp.configParams.redirectUrl = ssoRedirect;
							}
						}
						console.log(comps)
						app.init({components:comps});
					}
				});

				return app;
});
