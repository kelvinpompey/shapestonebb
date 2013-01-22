define([
	'jquery', 
	'underscore', 
	'backbone',
	'js/collections/projectcollection',
	'async'], 
	function($, _, Backbone, ProjectCollection, async){
		var Taskboard = Backbone.View.extend({
			className: 'taskboard', 			
			initialize: function() {
				var self = this; 
				console.log("taskboard initialize"); 
				this.collection = new ProjectCollection;
				this.collection.on('reset', this.collectionReset, this); 
				this.collection.fetch({
					err: function() {
						console.log('error fetching projects'); 
					},
					success: function(data){
						self.render(); 
					}
				});			

				this.parent = this.options.parent;  
				
			}, 

			render: function() {
				var project = this.collection.first(); 
				this.el.innerHTML = project.get('title');
				console.log(this.el); 				
				this.parent.$el.append(this.el); 
				return this; 
			}, 

			collectionReset: function() {
				this.render(); 
			}

		});

		return Taskboard; 
}); 