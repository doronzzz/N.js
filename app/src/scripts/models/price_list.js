define(["backbone","constants"],function(Backbone,constants){
    /*var baseClass = Backbone.Model.extend({
        fetch:function(){
            this.name 
        }
    })
    */
    var priceListModel = Backbone.Model.extend({
        initialize:function(){
            console.log('init pricelist model');
        },
        /*fetch:function(){
            this.model = $.http('nurego.com/pricelist.json');
        }*/
        fetch:function(){
            constants.baseURL() + "/prices"
        },

        parse:function(){
            if(json.plans.data == undefined){
                
            }else{

            }
        },

        defaults: {
            plans:{"object":"offering","id":"ser_17da-ea3a-45c2-9f03-ad3b4474c101","name":"Stripe LIVE Offering","description":null,"revision":1,"created_by":"prod","updated_at":"2014-10-15T13:56:52+00:00","status":"assigned","plans":{"data":[{"object":"plan","id":"pla_037c-6c0e-4fac-814f-ab773efa067b","name":"$4.99 per month","description":null,"plan_status":"active","credit_card":true,"plan_order":0,"discounts":[],"external_id":"monthly0499","features":{"data":[{"object":"feature","id":"id","name":"Stripe element","element_type":"recurring","price":4.99,"min_unit":null,"max_unit":null,"period":"monthly","billing_period_interval":1}],"object":"list","count":1,"url":"/v1/plans/pla_037c-6c0e-4fac-814f-ab773efa067b/features"}},{"object":"plan","id":"pla_bd0a-009c-400b-be8a-39a45d9bbf8d","name":"$7.99 per month","description":null,"plan_status":"active","credit_card":true,"plan_order":1,"discounts":[],"external_id":"monthly0799","features":{"data":[{"object":"feature","id":"id","name":"Stripe element","element_type":"recurring","price":7.99,"min_unit":null,"max_unit":null,"period":"monthly","billing_period_interval":1}],"object":"list","count":1,"url":"/v1/plans/pla_bd0a-009c-400b-be8a-39a45d9bbf8d/features"}},{"object":"plan","id":"pla_043a-5ebe-4ac6-a8a9-9fed18115e5f","name":"$48 Annual Fee","description":null,"plan_status":"active","credit_card":true,"plan_order":2,"discounts":[],"external_id":"yearly4800","features":{"data":[{"object":"feature","id":"id","name":"Stripe element","element_type":"recurring","price":48.0,"min_unit":null,"max_unit":null,"period":"yearly","billing_period_interval":1}],"object":"list","count":1,"url":"/v1/plans/pla_043a-5ebe-4ac6-a8a9-9fed18115e5f/features"}},{"object":"plan","id":"pla_30ea-19df-4dd8-aed5-a394eac118ec","name":"$59.88 Annual Fee","description":null,"plan_status":"active","credit_card":true,"plan_order":3,"discounts":[],"external_id":"yearly5988","features":{"data":[{"object":"feature","id":"id","name":"Stripe element","element_type":"recurring","price":59.88,"min_unit":null,"max_unit":null,"period":"yearly","billing_period_interval":1}],"object":"list","count":1,"url":"/v1/plans/pla_30ea-19df-4dd8-aed5-a394eac118ec/features"}}],"object":"list","count":4,"url":"/v1/offerings/ser_17da-ea3a-45c2-9f03-ad3b4474c101/plans"}}
        }

    });

    return priceListModel;

});