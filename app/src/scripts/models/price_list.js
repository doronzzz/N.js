define(["backbone","constants"],function(Backbone,constants){
    /*var baseClass = Backbone.Model.extend({
        fetch:function(){
            this.name 
        }
    })
    */ 
    var priceListModel = Backbone.Model.extend({
        initialize:function(opt){
            console.log('init pricelist model');
            this.opt = opt;
        },

        url:function(){
        	console.log(this.opt)
        	return constants.nuregoApiUrl() + "/offerings?api_key=" + this.opt.apiKey;
        	//return "https://api.nurego.com/v1/offerings?api_key=lc14de81-587e-49d8-ba0e-487498ae297a&callback=jQuery19108296897902619094_1424775818134&_=1424775818135";
        },

        parse:function(data,req){
        	return data; 
        }

    });

    return priceListModel;

});