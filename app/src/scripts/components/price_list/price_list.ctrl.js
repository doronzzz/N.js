define(["backbone","text!priceListHTML","utils"],function(bb,tmpl,utils){
		var priceList = Backbone.View.extend({
		  tagName: "div",
		  className: "login",
		  template: _.template(tmpl),
		  events: {
		    "click .button":   "registration"
		  },

		  initialize: function(model,customTmpl,oAuthCallbackUrl){
		  	if(customTmpl){
		  		this.template = _.template(customTmpl);
		  	}
		  	this.model = model;
		  	this.params = utils.URLToArray(window.location.href);
		    this.listenToOnce(this.model, "change", this.render);
		  },

		  registration:function(e){
		  	//https://BASEURL/v1/registrations?api_key=l1120591-dedd-406b-9319-5e3174fab10f
		  	//alert($(window.top).width())
		  	var plan = this.$el.find('select option:selected').attr('data-id');
		  	var baseURL = constants.nuregoApiUrl();
		  	var email = this.$el.find('input').val()
		  	var params = {
		  		plan_id:plan,
		  		email:email
		  	};

		  	var url = baseURL+'/registrations?api_key=' + constants.getNuregoApiKey()+ "&plan_id=" + plan;
		  	if(email.indexOf("@") != -1){
		  		url += "&email=" + email;
		  	}
		  	//var data = "&plan_id=" + encodeURI(plan) + "&email=" + encodeURI(email);
		  	var zis = this;
		  	var callback = function(data,req){
		  		var url,redirectUrl;
		  		redirectUrl = zis.params.redirectUrl;
		  		url = redirectUrl;
		  		if(redirectUrl.indexOf("?") == -1){
		  			url += "?registrationId=" + data.id;
		  		}else{
		  			url += "&registrationId=" + data.id;
		  		};
 
	  			window.top.location.href = window.top.location.href + url;
	  			console.log(data);
	  			//alert(JSON.stringify(data));
		  	};

		  	$.ajax({
		  		url:url,
		  		type:"post",
		  		//crossDomain: true,
			    dataType: 'json',
			    contentType: "application/x-www-form-urlencoded",
		  		//data:data,
		  		success:callback
		  	})

		  },

		  render: function(){
		  	var html = this.template(this.model.attributes);
		    this.$el.html(	html );
		    return this;
		  }

		});

		return priceList;
})