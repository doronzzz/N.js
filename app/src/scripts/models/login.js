define(["backbone","constants"],function(Backbone,constants){
	
    var loginModel = Backbone.Model.extend({
        initialize:function(){
            console.log('init login model');
        },
        
        url:function(){
        	return constants.nuregoApiUrl() + "/registrations/url/login_url?api_key=" + constants.getNuregoApiKey();
        },

        defaults: {
            user:{
                name:"john",
                last:"doe"
            }
        }
    });

    return loginModel;

});