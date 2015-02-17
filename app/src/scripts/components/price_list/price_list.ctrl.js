define(["backbone","text!PriceListHTML"],function(bb,tmpl){
		var priceList = Backbone.View.extend({
		  tagName: "li",
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
		  },

		  render: function(){
		  	var json = this.template(this.model.attributes);
		    this.$el.html(	json );
		    return this;
		  }

		});

		return priceList;
})