define(['backbone'], function(Backbone){

	var ListItemView = Backbone.View.extend({
		tagName: 'li',

		events: {
			'click':'itemClicked'
		}, 

		render: function() {
			console.log(this); 
			this.el.innerHTML = this.model.get('content');
			return this; 
		}, 

		itemClicked: function(event) {			
			Backbone.Events.trigger('listView:selectionChanged', this, this.model); 
			$("ul li").removeClass('selected');
			this.$el.addClass('selected');
		}
	});
	return ListItemView; 
})