define(["backbone","constants"],function(Backbone,constants){
	
    var categoryMod = Backbone.Model.extend({
        initialize:function(){
            console.log('category model init');
        },
         
        url:function(){
            //var str = constants.nuregoApiUrl() + "/legaldocs/";
            var str = "/src/scripts/mockdata/category.json";
            var apiKey = constants.getNuregoApiKey();
            if(apiKey !== "false"){
                str += "?api_key=" + apiKey;
            }
        	return str;
        },
    });

    return categoryMod;

});