define(['backbone', 'js/models/activitymodel'], function(Backbone, ActivityModel){
	var ActivityCollection = Backbone.Collection.extend({
		model: ActivityModel,
		url: '/activities.json'
	}); 

	return ActivityCollection;
}); 