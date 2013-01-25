define(['backbone'], function(Backbone){
  var UserModel = Backbone.Model.extend({
    defaults: {
      username: ''
    }
  });
  
  return UserModel; 
});