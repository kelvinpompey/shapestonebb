define([	
	'underscore',	
	'backbone', 	
	'uilib/views/listitemview', 
	'uilib/viewmodels/listitemmodel'], 

	function(_, Backbone, ListItemView, ListItemModel){
	var ListView = Backbone.View.extend({

		tagName: 'ul',
		className: 'listview', 

		render: function() {			
			this.collection.each(this.addListViewItem, this); 
			return this; 
		},

		addListViewItem: function(model) {
			console.log(model);
			view = new ListItemView({ model: model }); 
			this.$el.append(view.render().el); 
		}
	})

	return ListView; 
}); 