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
        	    var data =  {"object":"offering","id":"ser_f960-2778-4a5f-92a8-d53940c97b29","name":"Predix ","description":"","revision":1,"created_by":"anat.birnboim+1_3_4@nurego.com","updated_at":"2015-03-04T06:09:07-08:00","status":"assigned","plans":{"data":[{"object":"plan","id":"pla_fb74-b970-41b0-9af5-e83c42309e53","name":"basic","description":"","plan_status":"active","credit_card":false,"plan_order":0,"features":{"data":[{"object":"feature","id":"id","name":"nim","element_type":"feature","price":0.0,"min_unit":0,"max_unit":0,"period":"monthly","billing_period_interval":null,"service_feature":{"name":"nim","description":"nim","feature_id":"nim","measurable":false,"demo_content":null,"feature_order":0,"webhook_type":"","guid":"fea_fcfc-02ef-4769-9f80-7148ddc354a4"},"description":"nim"},{"object":"feature","id":"id","name":"recurring","element_type":"recurring","price":1.0,"min_unit":0,"max_unit":0,"period":"monthly","billing_period_interval":1}],"object":"list","count":2,"url":"/v1/plans/pla_fb74-b970-41b0-9af5-e83c42309e53/features"},"discounts":{"data":[{"object":"discount","id":"id","name":"basic","discount_type":"trial","price":0.0,"percent":100.0,"max_redemptions":0,"redeem_by":null,"times_to_apply":0,"days_to_apply":30,"provider_id":"org_3628-ae16-4b84-89c0-6b318a17c76b","guid":"dis_2e05-b780-4895-9588-3d7633de1c00"}],"object":"list","count":1,"url":"/v1/plans/pla_fb74-b970-41b0-9af5-e83c42309e53/discounts"}},{"object":"plan","id":"pla_9604-fb76-483d-92b8-6ff18d9c4a34","name":"advanced","description":"","plan_status":"active","credit_card":true,"plan_order":1,"features":{"data":[{"object":"feature","id":"id","name":"cpu","element_type":"feature","price":0.0,"min_unit":0,"max_unit":0,"period":"monthly","billing_period_interval":null,"service_feature":{"name":"cpu","description":"cpu","feature_id":"cpu","measurable":true,"demo_content":null,"feature_order":0,"webhook_type":"","guid":"fea_484e-3d93-4171-9927-7131a9c16f59"},"description":"cpu"},{"object":"feature","id":"id","name":"memory","element_type":"overage","price":0.01,"min_unit":0,"max_unit":1000,"period":"monthly","billing_period_interval":null,"service_feature":{"name":"memory","description":"memory","feature_id":"memory","measurable":true,"demo_content":null,"feature_order":0,"webhook_type":"","guid":"fea_5cec-4ee5-4a0a-8952-74d6209b8016"},"description":"memory"},{"object":"feature","id":"id","name":"nim","element_type":"feature","price":0.0,"min_unit":0,"max_unit":0,"period":"monthly","billing_period_interval":null,"service_feature":{"name":"nim","description":"nim","feature_id":"nim","measurable":false,"demo_content":null,"feature_order":0,"webhook_type":"","guid":"fea_fcfc-02ef-4769-9f80-7148ddc354a4"},"description":"nim"},{"object":"feature","id":"id","name":"recurring","element_type":"recurring","price":100.0,"min_unit":0,"max_unit":0,"period":"monthly","billing_period_interval":1}],"object":"list","count":4,"url":"/v1/plans/pla_9604-fb76-483d-92b8-6ff18d9c4a34/features"},"discounts":{"data":[{"object":"discount","id":"id","name":"advanced","discount_type":"trial","price":0.0,"percent":100.0,"max_redemptions":0,"redeem_by":null,"times_to_apply":0,"days_to_apply":30,"provider_id":"org_3628-ae16-4b84-89c0-6b318a17c76b","guid":"dis_5cfe-deeb-4e39-b32a-c0385df7e7f1"}],"object":"list","count":1,"url":"/v1/plans/pla_9604-fb76-483d-92b8-6ff18d9c4a34/discounts"}},{"object":"plan","id":"pla_898d-6e09-45c8-b8a5-461099037a5b","name":"expert","description":"","plan_status":"active","credit_card":false,"plan_order":2,"features":{"data":[{"object":"feature","id":"id","name":"cpu","element_type":"feature","price":0.0,"min_unit":0,"max_unit":0,"period":"monthly","billing_period_interval":null,"service_feature":{"name":"cpu","description":"cpu","feature_id":"cpu","measurable":true,"demo_content":null,"feature_order":0,"webhook_type":"","guid":"fea_484e-3d93-4171-9927-7131a9c16f59"},"description":"cpu"},{"object":"feature","id":"id","name":"memory","element_type":"feature","price":0.0,"min_unit":0,"max_unit":10000,"period":"monthly","billing_period_interval":null,"service_feature":{"name":"memory","description":"memory","feature_id":"memory","measurable":true,"demo_content":null,"feature_order":0,"webhook_type":"","guid":"fea_5cec-4ee5-4a0a-8952-74d6209b8016"},"description":"memory"},{"object":"feature","id":"id","name":"support","element_type":"feature","price":0.0,"min_unit":0,"max_unit":0,"period":"monthly","billing_period_interval":null,"service_feature":{"name":"support","description":"support","feature_id":"support","measurable":false,"demo_content":null,"feature_order":0,"webhook_type":"","guid":"fea_c3d3-b0ba-419c-8248-30a6fb7adb58"},"description":"support"},{"object":"feature","id":"id","name":"nim","element_type":"feature","price":0.0,"min_unit":0,"max_unit":0,"period":"monthly","billing_period_interval":null,"service_feature":{"name":"nim","description":"nim","feature_id":"nim","measurable":false,"demo_content":null,"feature_order":0,"webhook_type":"","guid":"fea_fcfc-02ef-4769-9f80-7148ddc354a4"},"description":"nim"},{"object":"feature","id":"id","name":"recurring","element_type":"recurring","price":500.0,"min_unit":0,"max_unit":0,"period":"monthly","billing_period_interval":1}],"object":"list","count":5,"url":"/v1/plans/pla_898d-6e09-45c8-b8a5-461099037a5b/features"},"discounts":{"data":[{"object":"discount","id":"id","name":"expert","discount_type":"trial","price":0.0,"percent":100.0,"max_redemptions":0,"redeem_by":null,"times_to_apply":0,"days_to_apply":45,"provider_id":"org_3628-ae16-4b84-89c0-6b318a17c76b","guid":"dis_3d4f-ed58-4acc-a5a4-c61fe3331566"}],"object":"list","count":1,"url":"/v1/plans/pla_898d-6e09-45c8-b8a5-461099037a5b/discounts"}}],"object":"list","count":3,"url":"/v1/offerings/ser_f960-2778-4a5f-92a8-d53940c97b29/plans"}};
        	   
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