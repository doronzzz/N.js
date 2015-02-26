define(["backbone","text!loginHTML"],function(bb,loginTmpl){

		var loginViewCtrl = Backbone.View.extend({
		  tagName: "div",
		  className: "login",
		  template: _.template(loginTmpl),
		  events: {
		    "click .button":   "login"
		  },

		  initialize: function(model,customTmpl){
		  	if(customTmpl){
		  		this.template = _.template(customTmpl);
		  	}
		  	this.model = model;
		    this.listenToOnce(this.model, "change", this.render);
		  },
 
		  login:function(e){
		  	var baseURL = this.$el.find('#baseURL').val();
		  	var endPoint = (baseURL) ? baseURL : constants.baseURL();
		  	console.log("sending req to: " + endPoint);
		  	$.get(endPoint + "/login",function(data){
		  		console.log(data);
		  	})
		  },

		  render: function(){
		  	var html = this.template(this.model.attributes);
		    this.$el.html(	html );
		    return this;
		  }

		});

		return loginViewCtrl;
})