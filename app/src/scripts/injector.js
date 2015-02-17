var Nurego = window.Nurego = {
	options:{},
	init:function(opt){
		this.options = opt;
		this.loadScripts();
	},
	loadScripts:function(){
		//LOAD NUREGO LIB IN IFRAME
		var iframe = document.createElement('iframe');
		var clientUrl = window.location.origin;
		iframe.src = "http://localhost:9000/lib.js?clientUrl=" + clientUrl;
		iframe.style.setProperty('display','none');
		document.body.appendChild(iframe);
		window.addEventListener("messsage",function(e){
				var NuregoLib = e.data;
				NuregoLib.widgetsFactory.build(this.options);
		});
	}
};


	Nurego.init({
		"token":"32423423",//String || URL
		"components":{
			"priceList":{
				"parent":"#element",
				"css":"",
				"html":""
			},
			"login":{
				"parent":"#element",
				"css":"",
				"html":""
			}
		}
	})



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