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
		"tosViewCtrl",
		"tosModel",
		"tosStatusModel",
		"text!absNuregoCss"
		],
	function(constants,utils,widgetFactory,loginModel,registrationModel,
			priceListModel,loginViewCtrl,priceListViewCtrl,registrationViewCtrl,
			tosViewCtrl,tosModel,tosStatusModel,absNuregoCss){
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
						price_list:{
							view:priceListViewCtrl,
							model:priceListModel 
						},
						priceList:{//remove this node after we make sure no one is using this alias anymore.
							view:priceListViewCtrl,
							model:priceListModel 
						},
						registration:{ 
							view:registrationViewCtrl,
							model:registrationModel
						},
						terms_of_service:{
							view:tosViewCtrl,
							model:tosModel
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

				app.initObserver = function(){
					// The node to be monitored
					var target = $( "body" )[0];

					// Create an observer instance
					var observer = new MutationObserver(function( mutations ) {
					  mutations.forEach(function( mutation ) {
					  	console.log(mutation);
					    var newNodes = mutation.addedNodes; // DOM NodeList
					    if( newNodes !== null ) { // If there are new nodes added
					    	var $nodes = $( newNodes ); // jQuery set
					    	$nodes.each(function() {
					    		var $node = $( this );
					    		var comps = {};
									var widgetAttrs = {};
									_.each(this.attributes,function(node){
										if(node.nodeName != "style"){
											widgetAttrs[node.nodeName] = node.value;
										}
									});

									var comp = comps[ widgetAttrs.name ] = {};
									comp.element = this;
									comp.configParams = widgetAttrs;
									comp.configParams.urlParams = lib.utils.URLToArray(window.location.href);

								console.log(comps)
								app.init({components:comps});
					    	});
					    }
					  });    
					});

					// Configuration of the observer:
					var config = { 
						attributes: true, 
						childList: true, 
						characterData: true 
					};
					 
					// Pass in the target node, as well as the observer options
					observer.observe(target, config);
				},
				
				app.onWidgetLoaded = function(){
					var params,thisWidget,widgetModel,widgetView,callback;
					params = lib.utils.URLToArray(window.location.href);
					console.log(params)
					var draw = function(){
						thisWidget = lib.components[params.widget];
				    	widgetModel = new thisWidget.model({apiKey:params.apiKey});
				    	widgetView = new thisWidget.view(widgetModel).$el;
				    	$('body').append(widgetView);
				    	//widgetModel.fetch({dataType:"jsonp",success:callback});
					}

					var onHTML = function(e){
						var key = e.message ? "message" : "data";
		    			var data = e[key];
		    			thisWidget = lib.components[params.widget];
				    	widgetModel = new thisWidget.model({apiKey:params.apiKey});
				    	widgetView = new thisWidget.view(widgetModel,data).$el;
				    	$('body').append(widgetView);
				    	//callback()
				    	//widgetModel.fetch({dataType:"jsonp",success:callback});
					};

					if(params.html && params.html != "null"){//widget with html resource to load before drawing.
						utils.listen(onHTML)
					}else{//go ahead and draw the widget
						draw();	
					}
				}


				$(document).ready(function(){
					var elems = $("nurego-widget");
					var styleEl = document.createElement('style');
					styleEl.innerHTML = absNuregoCss;
					document.body.appendChild(styleEl);

					if(elems.length){
						var comps = {};
						for(var i = 0; i<elems.length; i++){
							var widgetAttrs = {};
							_.each(elems[i].attributes,function(node){
								if(node.nodeName != "style"){
									widgetAttrs[node.nodeName] = node.value;
								}
							});
							var comp = comps[ widgetAttrs.name ] = {};
							comp.element = elems[i];
							comp.configParams = widgetAttrs;
							comp.configParams.urlParams = lib.utils.URLToArray(window.location.href);
						}
						console.log(comps)
						app.init({components:comps});
					}
					app.initObserver();
				});

				return app;
});
