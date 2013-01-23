define([
	'backbone',
	], function(Backbone){
		var ActivityModel = Backbone.Model.extend({
		  idAttribute: "_id",
			defaults: {
				title: ''				
			},
		});

		return ActivityModel; 
}); 