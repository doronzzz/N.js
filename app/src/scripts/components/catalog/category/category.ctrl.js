define(["backbone","text!categoryHTML","utils",
		"text!../components/catalog/category/category.css",
		"categoryModel","absNuregoView","jquery"],
		function(bb,tmpl,utils,css,categoryModel,absNuregoView,$Nurego){


/*
        categoryViewCtrl: '../components/catalog/category/category.ctrl',
        categoryHTML: '../components/catalog/category/category.html',
        categoryModel: '../models/category',
*/

		var categoryView = absNuregoView.extend({
		  tagName: "div",
		  className: "category_view",
		  template: _.template(tmpl),
		  events: {
		    
		  },

		  initialize: function(model,customTmpl){
		  	//this.__super__.initialize.apply(this);
		  	this.params = utils.URLToArray(window.location.href);
		  	this.model = model; 
		  	
		  	if(customTmpl){
		  		this.template = _.template(customTmpl);
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

		  render: function(){
		  	var html = this.template(this.model.toJSON());
		    this.$el.html(	html );
		    return this;
		  }

		});

		return categoryView;
})