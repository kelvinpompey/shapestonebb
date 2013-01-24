define(['backbone', 'uilib/views/inputview'], function(Backbone, InputView){
  var FormView = Backbone.View.extend({
    tagName: 'form',
    events: {
      'submit': 'onSubmit'
    }, 
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
    }, 
    
    onSubmit: function(event) {
      event.preventDefault(); 
      console.log('onSubmit'); 
    }
  }); 
  
  return FormView;
}); 