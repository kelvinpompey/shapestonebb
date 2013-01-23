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
			subViews: [], 
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
				this.model.collection.on('add', this.collectionAdd, this);

				this.render(); 
			}, 

			collectionAdd: function(model) {
				console.log('new model added ', this.model.collection.length, model); 
				this.addActivity(model, this.model.collection.length - 1);
			},

			addActivity: function(model, index) {
				var lastView = _.last(this.subViews); 		
				var left = 0;
				var width = 0;  
				if(lastView) {
					left = parseInt(_.first(lastView.$el.css('left').split('px'))); 		
					width = parseInt(_.first(lastView.$el.css('width').split('px')));
					console.log('lastview', lastView !== undefined ? left + ":" + width : 'nolastview');
				}				
				
				var view = new ActivityView({
					model: model, 
					attributes: {
						style: ["left:" + (left + width) + "px", 
										"width: 200px"].join(';') 
					}
				}); 
				this.subViews.push(view); 
				window.view = view;
				this.$el.append(view.render().el); 
			}, 

			itemClicked: function(event) {
				console.log('project clicked', this.model.collection.url);
				var activity = this.model.collection.create({
					title: 'Activity ' + this.model.collection.length
				}); 
				console.log(activity); 
			}
		});

		return Taskboard; 
}); 