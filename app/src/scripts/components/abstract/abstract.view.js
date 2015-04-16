define(["backbone","utils"],function(bb,utils){
		var absNuregoView = Backbone.View.extend({
		  initialize: function(model,customTmpl){
		  	this.showErrors = utils.URLToArray(window.location.href)['show-errors'];
		  	this.params = utils.URLToArray(window.location.href);
		  	if(this.params.css){
		  		var link = document.createElement('link');
				link.setAttribute('rel', 'stylesheet');
				link.setAttribute('type', 'text/css');
				link.setAttribute('href', this.params.css);
				document.getElementsByTagName('head')[0].appendChild(link);
		  	} 
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