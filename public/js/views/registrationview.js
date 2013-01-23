define([
  'jquery',
  'underscore',
  'backbone', 
  'js/views/navbar', 
  'uilib/viewcollections/listviewcollection', 
  'uilib/views/formview', 
  'uilib/viewmodels/inputmodel',
  'uilib/viewcollections/forminputcollection'], 
  
  function($, _, Backbone, NavBar, ListViewCollection, FormView, InputModel, FormInputCollection){
  var RegistrationView = Backbone.View.extend({
    render: function() {      
      $("body").addClass('registerimage');
      
      var navbar = new NavBar({        
        collection: new ListViewCollection([
          {content: 'Sign-up'}, 
          {content: 'Learn More'}, 
          {content: 'Pricing'}, 
          {content: 'About Us'}]) 
      });      
      this.$el.append(navbar.render().el); 
      
      console.log('creating form');
      var form = new FormView({
        className: 'registerForm',         
        collection: new FormInputCollection([
          {type: 'text', 'name': 'username', 'label': 'User Name'}, 
          {type: 'text', 'name': 'password', 'label': 'Password'},
          {type: 'password', 'name': 'password', 'label': 'Password Again'}, 
          {type: 'submit', 'name': 'submit', 'label': 'Submit', content: 'Register'}          
          ])
      }); 
      
      this.$el.append(form.render().el); 
      return this; 
      
    }  
  }); 
  
  return RegistrationView; 
})