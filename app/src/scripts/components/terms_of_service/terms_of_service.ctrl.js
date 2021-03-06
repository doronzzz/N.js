define(["backbone","text!tosHTML","utils",
		"text!../components/terms_of_service/terms_of_service.css",
		"tosStatusModel","tosModel","absNuregoView","jquery"],
		function(bb,tmpl,utils,css,tosStatusModel,tosModel,absNuregoView,$Nurego){

		var activation = absNuregoView.extend({
		  tagName: "div",
		  className: "terms_of_service",
		  template: _.template(tmpl),
		  events: {
		    "click .acceptTerms": "acceptTerms"
		  },
 
		  initialize: function(model,customTmpl){
		  	//this.__super__.initialize.apply(this);
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
		  	this.model.fetch({
		  			dataType:"jsonp",
		  			error:_.bind(this.modelHttpErrorsHandler,this),
		  		});
		    this.addStyle();
		  },

		  addStyle:function(){
		  	var styleEl = document.createElement('style');
		  	styleEl.innerHTML = css;
		  	$Nurego('body').append(styleEl);
		  },

		  redirect:function(){
		  	var redirectURL = this.params['redirect-url'];
		  	window.top.location.href = this.params.parent + redirectURL;
		  },

  		  acceptTerms:function(){

  		  	var docs = this.model.get('legal_docs');

  		  	var callback = function(data,req){
	  			console.log(data);
	  			console.log(req);
  				this.docs.sent += 1;
  				if(this.docs.sent >= this.docs.total){
  					this.redirect();
  				}
			};

			this.docs = {
			 	total:docs.data.length,
			 	sent:0
			};

  		  	for(var i = 0; i <docs.data.length; i++){
  		  		var doc_id = docs.data[i].id;
  		  		//POST /v1/legaldocs/accept?api_key=l22085b6-7062-4b57-8869-cccb2f66f6fb&doc_id=leg_0b06-d678-4675-bd16-efd4f60f2b47
	  		  	var url = constants.nuregoApiUrl() + "/legaldocs/accept?doc_id=" + doc_id;
	            $Nurego.ajax({
			  		url:url,
			  		type:"post",
			  		//async:false, //firefox dont like async 
			  		xhrFields:{
				        withCredentials: true
				    },
				    error:_.bind(this.genericHttpErrorsHandler,this),
				    crossDomain: true,
			  		/*
				    dataType: 'json', 
				    contentType: "application/x-www-form-urlencoded",*/
			  		//data:"plan_id=" + params.plan_id + "&email=" + params.email,
					//data: { plan_id: params.plan_id, email:params.email},
			  		success:_.bind(callback,this)
			  	})
  		  	}
          },

		  render: function(){
		  	var legalDocs =  this.model.get('legal_docs');
		  	if(legalDocs){
		  		if(	_.isEmpty(this.model.toJSON()) || legalDocs.count === 0){
		  			this.redirect(); // redirect cause there are no terms to show
		  			return;
		  		}
		  	}
		  	var html = this.template(this.model.toJSON());
		    this.$el.html(	html );
		    return this;
		  }

		});

		return activation;
})