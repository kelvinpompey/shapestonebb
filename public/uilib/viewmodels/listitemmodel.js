define(['backbone'], function(Backbone){
	var ListItemModel = Backbone.Model.extend({
		defaults: {
			content: 'List Item'			
		}
	});

	return ListItemModel;  
}); 