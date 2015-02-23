var Nurego = window.Nurego = {
	options:{},
	init:function(opt){debugger;
		this.options = opt;
		this.safeLoadNurego();
	},

	initNurego:function(){
		var script = document.createElement('script');
		script.type="text/javascript";
		script.src = "dist/bin.js"
		document.body.appendChild(script);
	},
	safeLoadNurego:function(){
		//LOAD NUREGO LIB IN IFRAME
		var iframe,clientUrl,zis;

		iframe = document.createElement('iframe');
		clientUrl = window.location.href;
		iframe.src = "/src/injector.html?clientURL=" + clientUrl;
		iframe.style.setProperty('display','none');
		zis = this;

		var eventMethod = window.addEventListener ? "addEventListener" : "attachEvent";
		var eventer = window[eventMethod];
		var messageEvent = eventMethod == "attachEvent" ? "onmessage" : "message";

		// Listen to message from child window
		eventer(messageEvent,function(e) {debugger;
		    var key = e.message ? "message" : "data";
		    var data = e[key];
		    //run function//
		    var NuregoLib = e.data;
			NuregoLib.widgetsFactory.build(zis.options);
		},false);

/*		window.addEventListener("messsage",function(e){debugger;
				var NuregoLib = e.data;
				NuregoLib.widgetsFactory.build(zis.options);
		});*/

		document.body.appendChild(iframe);
	}
};


/**


<script>


</script>

<script>
//Nurego lib loader.
var iframe = document.createElement('iframe');
iframe.src = "http://nurego.com/js.api?token=myId";
iframe.src += "https://clienthostname.com"; //or use window.top ?
iframe.style.setProperty('display','none');
document.body.appendChild(iframe);

window.addEventListener("messsage",function(e){
		var message = e.data;
		Nurego = message;
		Nurego.init(myNurego)
});

Nurego.init = function(config){
	var createFrame = function(component){
		var iframe = createElement('iframe');
		iframe.src = "https://" + Nurego.baseURL + "/widgets/"
	}

	for(config.components){
		createFrame(config.components);
	}
}

</script>

<iframe="http://nurego.com/launcher.js">
	<script>
		var Nurego = {};
		//only post msg if we loaded this script as a loader.
		if(window.location.href.indexOf('launcher')){
			window.postMessage('doneLoading',Nurego);
		}
	</script>
</iframe>
 

 

<iframe="http://nurego.com/widgets/pricelist#&parent=https://mydomain.com&css=css.css&html=html.css" name="priceList">
	
	<script>
		var html = "thisHtmlTemplate";
		var NuregoLib = window.addEventListener('message',function(e){
			var NuregoLib = e.data;
		})
	</script>
	
	{
		html : ?,
		css: ?,
		parser and eventHandler: ?
		initParams : window.hash
	}

</iframe>



***/