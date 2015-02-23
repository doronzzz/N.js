define(["backbone","constants"],function(Backbone,constants){
	
    var loginModel = Backbone.Model.extend({
        initialize:function(){
            console.log('init login model');
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