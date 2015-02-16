define(["backbone","text!components/login/login.html"],function(bb,loginTmpl){
		var loginViewCtrl = Backbone.View.extend({
		  tagName: "li",
		  className: "login",
		  template: _.template(loginTmpl),
		  events: {
		    "click .button":   "login"
		  },

		  initialize: function(model) {
		  	this.model = model;
		    this.listenTo(this.model, "change", this.render);
		  },

		  login:function(e){
		  	alert('btn clicked');
		  },

		  render: function(){
		  	var json = this.template(this.model.attributes);
		    this.$el.html(	json );
		    return this;
		  }

		});

		return loginViewCtrl;
})