define(['backbone'], function(Backbone){
	var ViewUtils = {
		viewWithTag: function (tagName, content, attrs) {
			var view = Backbone.View.extend({
				tagName: tagName,
				model: new Backbone.Model({content: content}),
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