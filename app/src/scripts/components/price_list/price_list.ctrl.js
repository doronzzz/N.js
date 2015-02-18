define(["backbone","text!priceListHTML"],function(bb,tmpl){
		var priceList = Backbone.View.extend({
		  tagName: "div",
		  className: "login",
		  template: _.template(tmpl),
		  events: {
		    "click .button":   "login"
		  },

		  initialize: function(model){
		  	this.model = model;
		    //this.listenToOnce(this.model, "change", this.render);
		  },

		  login:function(e){
		  	alert('subscribe btn clicked');
		  	alert($(window.top).width())
		  },

		  render: function(){
		  	var html = this.template(this.model.attributes);
		    this.$el.html(	html );
		    return this;
		  }

		});

		return priceList;
})