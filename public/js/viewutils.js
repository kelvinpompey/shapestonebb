define(['backbone'], function(Backbone){
	var ViewUtils = {
		viewWithTag: function (tagName, model, attrs) {
			var view = Backbone.View.extend({
				tagName: tagName,
				model: model,
				className: attrs !== undefined ? attrs.className : '', 
				render: function() {
					this.el.innerHTML = this.model.get('content'); 
					return this; 
				}				
			});
			return new view; 
		}
	}

	return ViewUtils; 
}); 