define(['backbone', 'js/models/projectmodel'], function(Backbone, ProjectModel){
	var ProjectCollection = Backbone.Collection.extend({
		model: ProjectModel,
		url: '/projects.json'
	}); 

	return ProjectCollection; 
}); 