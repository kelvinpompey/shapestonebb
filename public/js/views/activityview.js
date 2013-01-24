define(['underscore', 'backbone', 'js/viewutils'], function(_, Backbone, ViewUtils){
	var ActivityView = Backbone.View.extend({
		className: 'activity',

		events: {
			'click': 'activityClicked'
		}, 

		render: function() {
			this.$el.append(ViewUtils.
				viewWithTag('div', this.model.get('title'), {className: 'title'}).render().el);
			return this; 
		}, 

		activityClicked: function(event) {
			event.stopPropagation(); 
			alert(this.model.get('title'));
		}

	});

	return ActivityView; 

});