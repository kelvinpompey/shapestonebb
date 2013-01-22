define([
	'jquery', 
	'underscore', 
	'backbone',
	'js/views/activityview',
	'js/collections/projectcollection',
	'js/viewutils'], 
	function($, _, Backbone, ActivityView, ProjectCollection, ViewUtils){
		var Taskboard = Backbone.View.extend({
			className: 'taskboard', 			
			events: {
				'click':'itemClicked'
			}, 

			initialize: function() {
				var self = this; 
				_.bindAll(this, 'itemClicked'); 
				console.log("taskboard initialize"); 
				this.collection = new ProjectCollection;
				this.collection.on('reset', this.collectionReset, this); 
				this.collection.fetch({
					err: function() {
						console.log('error fetching projects'); 
					},
					success: function(data){
						//self.render(); 
					}
				});			

				this.parent = this.options.parent;  
				
			}, 

			render: function() {
				var project = this.collection.first(); 
				var title = project.get('title');
				var elem = ViewUtils.viewWithTag('div', title, {className: 'title'}).render().el; 
				this.$el.append(elem); 
				project.collection.each(this.addActivity, this); 
				this.parent.$el.append(this.el); 
				return this; 
			}, 

			collectionReset: function(collection) {
				console.log('collection reset', collection);
				this.model = collection.first(); 
				console.log(this.model, this.model.activityCollection()); 
				this.render(); 
			}, 

			addActivity: function(model) { 
				console.log('add activity', model); 
				var view = new ActivityView({
					model: model
				}); 

				this.$el.append(view.render().el); 
			}, 

			itemClicked: function(event) {
				console.log('project clicked', this.model.collection.url);
				var activity = this.model.collection.create({
					title: 'Second Activity'
				}); 
				console.log(activity); 
			}
		});

		return Taskboard; 
}); 