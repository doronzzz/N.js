define(["backbone","constants"],function(Backbone,constants){
	
    var tos = Backbone.Model.extend({
        initialize:function(){
            console.log('terms of service login model');
        },
         
        url:function(){
            var str = constants.nuregoApiUrl() + "/legaldocs/status/";
            var apiKey = constants.getNuregoApiKey();
            if(apiKey){
                str += "?api_key=" + apiKey;
            }
        	return str;
        },
    });

    return tos;

});


