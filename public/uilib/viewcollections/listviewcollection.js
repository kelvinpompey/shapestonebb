define(['backbone', 'uilib/viewmodels/listitemmodel'], function(Backbone, ListItemModel){
	var ListViewCollection = Backbone.Collection.extend({
		model: ListItemModel
	}); 

	return ListViewCollection; 
}); 