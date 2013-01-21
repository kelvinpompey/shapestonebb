define([
	'jquery', 
	'underscore', 
	'backbone'], function($, _, Backbone){
		var AppView = Backbone.View.extend({
			el: "#appmain",

			initialize: function() {
				this.render(); 
			},
			render: function() {
				console.log("in appview.render"); 
				console.log(this.model); 
				this.el.innerHTML = this.model.get('content'); 
				return this; 
			}
		});

		return AppView;  
	}); 
