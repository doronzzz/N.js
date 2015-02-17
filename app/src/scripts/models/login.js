define(["backbone"],function(Backbone){

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