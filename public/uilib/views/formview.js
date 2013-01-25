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
      var obj = {};      
      this.$el.serialize().split('&').forEach(function(item){
        var parts = item.split('=');         
        obj[parts[0]] = parts[1];        
      }); 
      Backbone.Events.trigger('formView:submit', this, obj);          
    }
  }); 
  
  return FormView;
}); 