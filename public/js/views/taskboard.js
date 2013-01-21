define([
	'jquery', 
	'underscore', 
	'backbone'], 
	function($, _, Backbone){
		var Taskboard = Backbone.View.extend({			
			initialize: function() {
				console.log("taskboard initialize"); 
				this.parent = this.options.parent;  
				this.render(); 
			}, 

			render: function() {				
				console.log(this.el); 				
				this.parent.$el.append(this.el); 
				return this; 
			}			 
		});

		return Taskboard; 
}); 