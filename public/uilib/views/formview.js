define(['backbone', 'uilib/views/inputview'], function(Backbone, InputView){
  var FormView = Backbone.View.extend({
    tagName: 'form',
    render: function() {    
      console.log('rendering formview');
      this.collection.each(this.addItem, this); 
      return this; 
    }, 
    
    addItem: function(model) {
      var view = new InputView({
        model: model
      });
      
      this.$el.append(view.render().el); 
    }
  }); 
  
  return FormView;
}); 