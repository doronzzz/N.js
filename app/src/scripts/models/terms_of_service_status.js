define(["backbone","constants"],function(Backbone,constants){
	
    var tosStatus = Backbone.Model.extend({
        initialize:function(){
            console.log('terms of service model');
        },
         
        url:function(){
            var str = constants.nuregoApiUrl() + "/legaldocs/status";
            var apiKey = constants.getNuregoApiKey();
                if(apiKey !== "false"){
                    str += "?api_key=" + apiKey;
                }
        	return str;
        },
    });

    return tosStatus;

});


