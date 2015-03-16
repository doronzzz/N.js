define(["backbone","text!tosHTML","utils",
		"text!../components/terms_of_service/terms_of_service.css",
		"tosStatusModel","tosModel"],function(bb,tmpl,utils,css,tosStatusModel,tosModel){

		var activation = Backbone.View.extend({
		  tagName: "div",
		  className: "terms_of_service",
		  template: _.template(tmpl),
		  events: {
		    "click .acceptTerms": "acceptTerms"
		  },

		  initialize: function(model,customTmpl){
		  	this.params = utils.URLToArray(window.location.href);
		  	
		  	if(customTmpl){
		  		this.template = _.template(customTmpl);
		  	}
		  	
		  	if(this.params['preRegistration'] === "true"){
		  		this.model = model;
		  	}else{
		  		this.model = new tosStatusModel();
		  	}

		  	this.listenToOnce(this.model, "change", this.render);
		  	this.model.fetch({dataType:"jsonp"});
		    this.addStyle();
		  },

		  addStyle:function(){
		  	var styleEl = document.createElement('style');
		  	styleEl.innerHTML = css;
		  	$('body').append(styleEl);
		  },

		  redirect:function(){
		  	var redirectURL = this.params['redirect-url'];
		  	window.top.location.href = this.params.parent + redirectURL;
		  },

  		  acceptTerms:function(){
  		  	var docs = this.model.get('legal_docs');

  		  	for(var i = 0; i <docs.data.length; i++){
  		  		var doc_id = docs.data[i].id;
  		  		//POST /v1/legaldocs/accept?api_key=l22085b6-7062-4b57-8869-cccb2f66f6fb&doc_id=leg_0b06-d678-4675-bd16-efd4f60f2b47
	  		  	var url = constants.nuregoApiUrl() + "/legaldocs/accept?doc_id=" + doc_id;
	            $.ajax({
			  		url:url,
			  		type:"post",
			  		async:false,
			  		/*crossDomain: true,
				    dataType: 'json', 
				    contentType: "application/x-www-form-urlencoded",*/
			  		//data:"plan_id=" + params.plan_id + "&email=" + params.email,
					//data: { plan_id: params.plan_id, email:params.email},
			  		success:function(data,req){
			  			console.log(data)
			  			console.log(req)
			  		}
			  	})
  		  	}

			this.redirect()

          },

		  render: function(){
		  	var legalDocs =  this.model.get('legal_docs');

		  	if(	_.isEmpty(this.model.toJSON()) || legalDocs.count === 0){
		  		this.redirect(); // redirect cause there are no terms to show
		  	}
		  	var html = this.template(this.model.toJSON());
		    this.$el.html(	html );
		    return this;
		  }

		});

		return activation;
})