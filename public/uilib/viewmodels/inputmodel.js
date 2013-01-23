define(['backbone'],function(Backbone){
  var InputModel = Backbone.Model.extend({
    defaults: {
      content: ''
    }
  });   
  
  return InputModel; 
}); 