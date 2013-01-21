define([
	'jquery', 
	'underscore', 
	'backbone', 
	'js/views/appview', 
	'js/views/taskboard'], function($, _, Backbone, AppView, Taskboard){
		var Router = Backbone.Router.extend({
			routes: {
				"": 'homeRoute',
				"taskboard": "taskboardRoute",
				"*actions" : 'defaultRoute'
			},

			initialize: function()  {
				console.log('Initializing router');
				console.log(window.location.pathname); 
				var path = window.location.pathname.slice(1); 
				route = this.routes[path];
				if(route != undefined) {
					this[route](); 
				}
				else {
					this.defaultRoute(); 
				}
			},

			homeRoute: function(){
				console.log('homeRoute');
				new AppView( { model : new Backbone.Model({ content: 'Home'}) });  
			},

			taskboardRoute: function(){
				console.log('taskboardRoute');
				var appView = new AppView({ model : new Backbone.Model({ content: 'Taskboard'}) });				
				var taskboard = new Taskboard({parent: appView}); 
				console.log(Taskboard);
				
			},

			defaultRoute: function() {
				console.log('defaultRoute');				
				new AppView( { model : new Backbone.Model({ content: 'Default Route'}) });  
			}
		}); 

		Backbone.history.start({
			pushState: true
		});

		return Router; 
}); 