define([
	'backbone',
	'js/collections/activitycollection'], function(Backbone, ActivityCollection){
		var ProjectModel = Backbone.Model.extend({
			idAttribute: "_id",
			defaults: {
				title: ''				
			},

			activityCollection: function() {
				json = this.get('activities');
				this.collection = new ActivityCollection(json); 
				this.collection.url = "/project/" + this.id + "/activities.json"
				console.log('this.collection', this.collection); 

				return this.collection; 
			}
		});

		return ProjectModel; 
}); 