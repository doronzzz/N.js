define(["backbone","text!login_html"],function(bb,loginTmpl){

		var loginViewCtrl = Backbone.View.extend({
		  tagName: "li",
		  className: "login",
		  template: _.template(loginTmpl),
		  events: {
		    "click .button":   "login"
		  },

		  initialize: function(model){
		  	this.model = model;
		    this.listenToOnce(this.model, "change", this.render);
		  },

		  login:function(e){
		  	alert('btn clicked');
		  },

		  render: function(){
		  	var html = this.template(this.model.attributes);
		    this.$el.html(	html );
		    return this;
		  }

		});

		return loginViewCtrl;
})