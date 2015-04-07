define(["backbone","text!priceListHTML","utils",
		"text!../components/price_list/price_list.css",
		"tosModel","absNuregoView","text!priceListSingleTierHTML"],
		function(bb,tmpl,utils,css,tosModel,absNuregoView,priceListSingleTierHTML){
		var priceList = absNuregoView.extend({
		  tagName: "div",
		  className: "login",
		  template: _.template(tmpl),
		  events: {
		    "click .plan-select":   "registration",
		    "click .terms":   "openTerms",
		    "click .postNoSSo" : "postRegistration"
		  },

		  initialize: function(model,customTmpl){
		  	//this.__super__.initialize.apply(this);
		  	this.params = utils.URLToArray(window.location.href);
		  	var themes = {
		  		singleTier:priceListSingleTierHTML,
		  		multitier:tmpl
		  	};
		  	if(!this.params.preview){
		  		this.tosModel = new tosModel();
		    	this.tosModel.fetch({dataType:"jsonp"});
		  	}

		    this.selectedPlan = "";
		  	this.model = model;
		  	if(customTmpl){
		  		this.template = _.template(customTmpl);
		  	}else if(this.params.theme && themes[this.params.theme]){
		  		this.template = _.template(themes[this.params.theme])
		  	}
		    this.listenToOnce(this.model, "change", this.render);
		    this.model.fetch({dataType:"jsonp",error:_.bind(this.modelHttpErrorsHandler,this)});
		    this.addStyle();
		  },
		  
		  openTerms:function(){
		  	var url = this.params.parent + this.params['terms-of-service-url'];
		  	var flag = "preRegistration=true";
		  	
		  	if(url.indexOf("?") === -1){
		  		url += "?" + flag;
		  	}else{
		  		url += "&" + flag;
		  	};

		  	var win = window.open(url, '_blank');
  			win.focus();

		  },

		  addStyle:function(){
		  	var styleEl = document.createElement('style');
		  	styleEl.innerHTML = css;
		  	$('body').append(styleEl);
		  }, 

		  registerWithSSo:function(){
		  	this.$el.addClass('fillEmail');
		  },

		  postRegistration:function(){
		  	var plan = this.selectedPlan;
		  	var baseURL = constants.nuregoApiUrl();
		  	var legal_doc_id = this.tosModel.get('id'); // need to get this from a model
		  	var email = this.$el.find('input.email').val()
		  	var params = {
		  		plan_id:plan
		  	};

		  	var url = baseURL+'/registrations?api_key=' + constants.getNuregoApiKey()+ "&plan_id=" + plan;
		  	if(this.$el.hasClass('noSSO') && email.indexOf("@") != -1){
		  		url += "&email=" + encodeURIComponent(email); 
		  		params.email =  encodeURIComponent(email);
		  	}

		  	if(legal_doc_id){
		  		url += "&legal_doc_id=" + legal_doc_id;
		  	}
		  	//var data = "&plan_id=" + encodeURI(plan) + "&email=" + encodeURI(email);
		  	var zis = this;
		  	var parent = utils.URLToArray(window.location.href).parent;
		  	var callback = function(data,req){
		  		if(data.error){
		  			zis.errorMsgHandler(data);
		  		}
		  		var url,redirectUrl;
		  		redirectUrl = zis.params['redirect-url'];
		  		if(!redirectUrl){
		  			zis.$el.addClass('done');
		  			return;
		  		}
		  		url = redirectUrl;
		  		if(redirectUrl.indexOf("?") == -1){
		  			url += "?registrationId=" + data.id;
		  		}else{
		  			url += "&registrationId=" + data.id;
		  		};

	  			window.top.location.href = parent + url;
	  			console.log(data);
	  			//alert(JSON.stringify(data));
		  	};

		  	$.ajax({
		  		url:url,
		  		type:"post",
		  		crossDomain: true,
			    dataType: 'json', 
			    contentType: "application/x-www-form-urlencoded",
		  		//data:"plan_id=" + params.plan_id + "&email=" + params.email,
				//data: { plan_id: params.plan_id, email:params.email},
				error:_.bind(this.genericHttpErrorsHandler,this),
		  		success:callback
		  	})

		  },

		  registration:function(e){
		  	//https://BASEURL/v1/registrations?api_key=l1120591-dedd-406b-9319-5e3174fab10f
		  	//alert($(window.top).width())
		  	this.selectedPlan = $(e.target).attr('data-id');
		  	if(this.$el.hasClass('unchecked')){
		  		return;
		  	}
		  	if(this.$el.hasClass('noSSO') && !this.params.theme){
		  		this.registerWithSSo()
		  	}else{
			 	this.postRegistration();
		  	}
		  },

		  bindEvents:function(){
		  	var zis = this;
		  	$('#checkbox .termsCheckbox').click(function() {
			    var $this = $(this);
			    // $this will contain a reference to the checkbox   
			    if ($this.is(':checked')) {
			    	zis.$el.addClass('checked');
			    	zis.$el.removeClass('unchecked');
			        // the checkbox was checked 
			    } else {
			    	zis.$el.addClass('unchecked');
			    	zis.$el.removeClass('checked');
			    }
			});
		  },
		  render: function(){
		  	var sso = utils.URLToArray(window.location.href).sso;
		  	this.model.set('urlParams',this.params);
		  	var html = this.template(this.model.attributes);
		    this.$el.html(	html );
		    this.bindEvents()
		    if(sso && sso === "false"){
		    	this.$el.addClass('noSSO');
		    }
		    return this;
		  }

		});

		return priceList;
})