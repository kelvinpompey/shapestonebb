define(['backbone'], function(Bacbone){
		var ProjectModel = Bacbone.Model.extend({
			defaults: {
				title: String				
			}
		});

		return ProjectModel; 
}); 