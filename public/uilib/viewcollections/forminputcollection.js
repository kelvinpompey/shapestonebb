define(['backbone', 'uilib/viewmodels/inputmodel'], function(Backbone, InputModel){
  var FormInputCollection = Backbone.Collection.extend({
    model: InputModel, 
    initialize: function() {
      console.log('initializing form collection');
    }
  }); 
  
  return FormInputCollection; 
}); 