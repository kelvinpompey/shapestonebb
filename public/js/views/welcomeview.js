define([
	'jquery',
	'backbone',
	'uilib/views/listview', 
	'uilib/viewcollections/listviewcollection', 
	'js/router'], 

	function($, Backbone, ListView, ListViewCollection, router){
		var WelcomeView = Backbone.View.extend({
			initialize: function() {
				this.listItems = [
					{content: 'Project'}, 
					{content: 'People'},
					{content: 'Scrumboard'},
					{content: 'Kanban Board'},								
					{content: 'Taskboard', action: '/taskboard'},
					{content: 'Calender'}, 
					{content: 'Reports'}, 
					{content: 'Planning'}, 
					{content: 'Who and What'},
					{content: 'Logout'}
				];				

				Backbone.Events.on('listView:selectionChanged', this.selectionChanged); 

			}, 

			render: function() {
				this.listView = new ListView({
					collection: new ListViewCollection(this.listItems), 
					className: 'gridview'
				});

				this.$el.append(this.listView.render().el); 
				return this; 
			}, 

			selectionChanged: function(view, model) {
				console.log("selectionChanged", model.get('content')); 
				var path = model.get('action'); 
				if(path !== undefined) {
					console.log("path: ", path, router);
					router.navigate(path, {trigger: true}); 
				}


			}
		});	

		return WelcomeView;	
});