define(["backbone","text!registrationHTML",
		"utils","text!../components/registration/registration.css",
		"absNuregoView"],function(bb,tmpl,utils,css,absNuregoView){
		var activation = absNuregoView.extend({
		  tagName: "div",
		  className: "activation",
		  template: _.template(tmpl),
		  events: {
		    "click .activate": "completeRegistration"
		  },

		  initialize: function(model,customTmpl){
		  	if(customTmpl){
		  		this.template = _.template(customTmpl);
		  	}
		  	this.addStyle();
		  	this.model = model;
		  	this.render();
		  	//this.listenToOnce(this.model, "change", this.render);
		  	//this.model.fetch({dataType:"jsonp"});
		  },

		  addStyle:function(){
		  	var styleEl = document.createElement('style');
		  	styleEl.innerHTML = css;
		  	$('body').append(styleEl);
		  },

		  passMatch:function(){
		  	var pass = this.$el.find('input.pass').val();
		  	var passConfirm = this.$el.find('input.passConfirm').val();
		  	return (pass === passConfirm);
		  },

		  completeRegistration:function(){
		  	//http://localhost:8090/registration/complete?registrationId=<regId>&email=<email>&password=<pass>
		  	if(!this.passMatch()){
		  		this.$el.find('.passError').addClass('show');
		  		return false;
		  	}
		  	var baseURL = constants.nuregoApiUrl();
		  	var email = this.$el.find('input.email').val();
		  	var pass = this.$el.find('input.pass').val();
		  	var params = utils.URLToArray(window.location.href);
		  	var url = params['registration-url'] + '?registrationId=' + params["registration-id"]+ "&password=" + pass;
		  	
		  	if(email && email.indexOf("@") != -1){
		  		url += "&email=" + encodeURI(email); 
		  	}

		  	window.top.location.href = params.parent + url;
		  },

		  render: function(){
		  	var html = this.template(utils.URLToArray(window.location.href));
		    this.$el.html(	html );
		    return this;
		  }

		});

		return activation;
})