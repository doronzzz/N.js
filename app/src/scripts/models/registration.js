define(["backbone","constants"],function(Backbone,constants){
	
    var registrationModel = Backbone.Model.extend({
        initialize:function(){
            console.log('init activationModel');
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

    return registrationModel;

});