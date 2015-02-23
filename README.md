# N.js

####INCLUDE JS LIB
```HTML
 <script src="//maxcdn.bootstrapcdn.com/bootstrap/3.3.2/js/bootstrap.min.js" type="text/javascript"></script>
```



###API DEMO
```JavaScript
Nurego.init({
    "API_key":"32423423",//String || URL
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
