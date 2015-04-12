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
            this.params = utils.URLToArray(window.location.href);
        },

        url:function(){
        	console.log(this.opt)
            //var key = this.attr.find('apiParams') // {param1:val1,params2:val2}

            var url = constants.nuregoApiUrl() + "/offerings?api_key=" + this.opt.apiKey;
            /*for(val in key){
                url += "&" + key +"=" + val;
            }*/
            if(this.params['api-params']){
                var customApiParams = JSON.parse(this.params['api-params']);
                _.forEach(customApiParams,function(v,k){
                    url += "&"+k+"="+v;
                });
            }

            return url;
        	
        	//return "https://api.nurego.com/v1/offerings?api_key=lc14de81-587e-49d8-ba0e-487498ae297a&callback=jQuery19108296897902619094_1424775818134&_=1424775818135";
        },

        parse:function(data,req){

        	   
        	   function containsFeature(featuresArr,featuresObj){
        	   		var ans = false;
        	   		_.each(featuresArr,function(feature){
        	   			if(feature === featuresObj.name){
        	   				ans = true;
        	   			}
        	   		})
        	   		return ans;
        	   }

        	   function getMissingFeatures(plan_features,featuresArr){
        	   		console.log('difference:::')
        	   		console.log(_.difference(featuresArr,plan_features))

        	   		return _.difference(featuresArr,plan_features);
        	   		
        	   }

        	   function customParser(response) {
		        var raw_plans = response.plans.data;
		        var features = [];
		        var plans = [];

		        //Get all features
		        for (var i = 0; i < raw_plans.length; i++) {
		                var plan_features = raw_plans[i].features.data;
		                raw_plans[i].features.map = {};

		                for (j = 0; j < plan_features.length; j++) {
		                		raw_plans[i].features.map[plan_features[j].name] = plan_features[j] ;
		                    	if(!containsFeature(features,plan_features[j])){
		                    		features.push(plan_features[j].name);	
		                    	}
		                }
		        }

		        //_.reduce(data, function (o, item) { o[item.key] = item.value; return o }, {})


		        // add empty features to plans
		       for (var i = 0; i < raw_plans.length; i++) {
		                var featuresList = _.keys(raw_plans[i].features.map);
		                var featuresArr = getMissingFeatures(featuresList,features);
		                _.each(featuresArr,function(item){  
		                	raw_plans[i].features.map[item] = {missingFeature:item};
		                })

		        }


		        return {
		            offering_description: response.description,
		            features: features,
		            plans: raw_plans
		        };
		    }

		    var parsed = customParser(data);
		    console.log(parsed)
		    return parsed;
        }

    });

    return priceListModel;

});