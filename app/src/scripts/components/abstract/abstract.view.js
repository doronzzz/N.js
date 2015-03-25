define(["backbone"],function(bb,loginTmpl){
		var absNuregoView = Backbone.View.extend({
		  initialize: function(model,customTmpl){
		  }, 

		  errorMsgHandler:function(response){
		  	try{
		  		var el = this.$el.find('.ajaxErrorMsg');
				el.find('.txt').text(response.error.message);
				el.show();
		  	}catch(e){}
		  },

		  modelHttpErrorsHandler:function(model,response,options){
			try{
				var el = this.$el.find('.ajaxErrorMsg');
				el.find('.txt').text(response.responseText);
				el.show();
		  	}catch(e){}
		  },

		  genericHttpErrorsHandler:function(xhr,textStatus,errorThrown){
			try{
				var el = this.$el.find('.ajaxErrorMsg');
				el.find('.txt').text(errorThrown);
				el.show();
		  	}catch(e){}
		  }


		});

		return absNuregoView;
});