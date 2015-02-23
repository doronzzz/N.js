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
					
					var draw = function(){
						thisWidget = lib.components[params.widget];
				    	widgetModel = new thisWidget.model();
				    	widgetView = new thisWidget.view(widgetModel).render().$el;
				    	$('body').append(widgetView);
					}

					var onHTML = function(e){debugger;
						var key = e.message ? "message" : "data";
		    			var data = e[key];
		    			//run function//
		    			thisWidget = lib.components[params.widget];
				    	widgetModel = new thisWidget.model();
				    	widgetView = new thisWidget.view(widgetModel,data).render().$el;
				    	$('body').append(widgetView);
					};

					if(params.html && params.html != "null"){//widget with html resource to load before drawing.
						utils.listen(onHTML)
					}else{//go ahead and draw the widget
						draw();	
					}
				}


/*"components":{
			"priceList":{
				"parent":"#element",
				"configParams":{
					"css":"",
					"html":"scripts/components/price_list/price_list_demo.html"
				}
			},
			"login":{
				"parent":"#element",
				"configParams":{
					"css":"",
					"html":""
				}
			}

*/				//selfinvoked fn
				var initDirectives = function(){
					var elems = $("nurego-widget");
					if(elems.length){
						var comps = {};
						for(var i = 0; i<elems.length; i++){
							var nameAttr = elems[i].getAttribute("name");
							var cssAttr = elems[i].getAttribute("css");
							var htmlAttr = elems[i].getAttribute("html");

							comps[nameAttr] = {};

							var comp = comps[nameAttr];
							comp.parent = elems[i];
							comp.configParams = {
								css:cssAttr,
								html:htmlAttr
							}
						}
						console.log(comps)
						app.init({components:comps});
					}
				}();


				/*app.injectWidgets = function(opt){
					//lib.widgetFactory.build(opt);
				};*/
 
// Start loading the main app file. Put all of
// your application logic in there.
/*require(['main_app'],function(app){debugger;
	var url = window.location.href;
	debugger;
	if(app.utils.URLToArray(url).widget){
		app.start();
	}else{
		//we are running in the injector scope 
		window.Nurego = app;
	}
});*/
				return app;
});
