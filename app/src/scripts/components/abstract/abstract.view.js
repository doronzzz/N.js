define(["backbone"],function(bb,loginTmpl){
		var absNuregoView = Backbone.View.extend({
		  initialize: function(model,customTmpl){
		  	this.showErrors = utils.URLToArray(window.location.href)['show-errors'];
		  }, 

		  errorMsgHandler:function(response){
		  	if(this.showErrors && this.showErrors !== "false"){
			  	try{
			  		var el = this.$el.find('.ajaxErrorMsg');
					el.find('.txt').text(response.error.message);
					el.show();
			  	}catch(e){}
		  	}
		  },

		  modelHttpErrorsHandler:function(model,response,options){
		  	if(this.showErrors && this.showErrors !== "false"){
		  		try{
					var el = this.$el.find('.ajaxErrorMsg');
					el.find('.txt').text(response.responseText);
					el.show();
			  	}catch(e){}
		  	}
		  },

		  genericHttpErrorsHandler:function(xhr,textStatus,errorThrown){
		  	if(this.showErrors && this.showErrors !== "false"){
				try{
					var el = this.$el.find('.ajaxErrorMsg');
					el.find('.txt').text(errorThrown);
					el.show();
			  	}catch(e){}
			}
		  }


		});

		return absNuregoView;
});