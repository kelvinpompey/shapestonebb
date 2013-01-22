define([
	'jquery', 
	'underscore', 
	'backbone',
	'js/collections/projectcollection'], 
	function($, _, Backbone, ProjectCollection){
		var Taskboard = Backbone.View.extend({			
			initialize: function() {
				console.log("taskboard initialize"); 
				this.collection = new ProjectCollection;
				this.collection.on('reset', this.collectionReset, this); 
				this.collection.fetch(); 

				this.parent = this.options.parent;  
				this.render(); 
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