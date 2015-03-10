define(["backbone","text!activationHTML","utils","text!../components/activation/activation.css"],function(bb,tmpl,utils,css){
		var activation = Backbone.View.extend({
		  tagName: "div",
		  className: "activation",
		  template: _.template(tmpl),
		  events: {
		    
		  },

		  initialize: function(model,customTmpl){
		  	if(customTmpl){
		  		this.template = _.template(customTmpl);
		  	}
		    this.addStyle();
		  },

		  addStyle:function(){
		  	var styleEl = document.createElement('style');
		  	styleEl.innerHTML = css;
		  	$('body').append(styleEl);
		  },

		  render: function(){
		  	var html = this.template(this.model.attributes);
		    this.$el.html(	html );
		    return this;
		  }

		});

		return activation;
})