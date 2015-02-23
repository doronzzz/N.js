# N.js

####INCLUDE JS LIB
```HTML
     <script src="https://rawgit.com/doronzzz/N.js/master/app/dist/bin.js" type="text/javascript"></script>
```

####INCLUDE SET BASE URL (for dev mostly)
```HTML
	<nurego-baseurl url="https://mybaseurl.com"></nurego-baseurl>
```




###API DEMO
```JavaScript
Nurego.init({
    "API_key":"32423423",//String || URL
    "baseURL":"mybaseURL.com",
    "components":{
        "priceList":{
            "parent":"#element",
            "configParams":{
                "css":"",
                "html":""
            }
        },
        "login":{
            "parent":"#element",
            "configParams":{
                "css":"",
                "html":""
            }
        }
    }
})

```

### HTML Directive API:
```HTML
<nurego-widget name="priceList" 
			   css="path/to/css.css"
			   html="scripts/components/price_list/price_list_demo.html">

</nurego-widget>
```
