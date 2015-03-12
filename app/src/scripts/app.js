define([
		"constants",
		"utils",
		"widgetFactory",
		"loginModel",
		"registrationModel",
		"priceListModel",
		"loginViewCtrl",
		"priceListViewCtrl",
		"registrationViewCtrl",
		],
	function(constants,utils,widgetFactory,loginModel,registrationModel,priceListModel,loginViewCtrl,priceListViewCtrl,registrationViewCtrl){
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
						},
						registration:{ 
							view:registrationViewCtrl,
							model:registrationModel
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
					var params,thisWidget,widgetModel,widgetView,callback;
					params = lib.utils.URLToArray(window.location.href);
					console.log(params)
					var draw = function(){
						thisWidget = lib.components[params.widget];
				    	widgetModel = new thisWidget.model({apiKey:params.apiKey});
				    	
				    	callback = function(req,data){
				    		widgetView = new thisWidget.view(widgetModel).render().$el;
				    		$('body').append(widgetView);	
				    	};
				    	
				    	widgetModel.fetch({dataType:"jsonp",success:callback});
					}

					var onHTML = function(e){
						var key = e.message ? "message" : "data";
		    			var data = e[key];
		    			//run function//
		    			thisWidget = lib.components[params.widget];
				    	widgetModel = new thisWidget.model({apiKey:params.apiKey});
				    	callback = function(req,rawData){
				    		widgetView = new thisWidget.view(widgetModel,data).render().$el;
				    		$('body').append(widgetView);	
				    	};
				    	//callback()
				    	widgetModel.fetch({dataType:"jsonp",success:callback});
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
							var widgetAttrs = {};
							_.each(elems[i].attributes,function(node){
								widgetAttrs[node.nodeName] = node.value;
							});

							var comp = comps[ widgetAttrs.name ] = {};
							comp.element = elems[i];
							comp.configParams = widgetAttrs;
						}
						console.log(comps)
						app.init({components:comps});
					}
				});

				return app;
});
