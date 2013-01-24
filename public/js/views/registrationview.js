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
    initialize: function() {
      Backbone.Events.on('listView:selectionChanged',this.selectionChanged); 
    }, 
    
    render: function() {      
      $("body").addClass('registerimage');
      $(document.body).height($(window).height());      
      var navbar = new NavBar({        
        collection: new ListViewCollection([
          {content: 'Sign-up'}, 
          {content: 'Learn More'}, 
          {content: 'Pricing'}, 
          {content: 'About Us'}]) 
      });      
      this.$el.append(navbar.render().el); 
      
      console.log('creating form');
      
      var left = $(window).width() / 2 - 100; 
      var top = $(window).height() / 2 - 100; 
      
      var form = new FormView({
        attributes: {
          style: ['left: ' + left + 'px', 
                  "top: " + top + 'px'].join(';')
        }, 
        className: 'registerForm',         
        collection: new FormInputCollection([
          {type: 'text', 'name': 'username', 'label': 'User Name'}, 
          {type: 'password', 'name': 'password', 'label': 'Password'},
          {type: 'password', 'name': 'password', 'label': 'Password Again'}, 
          {type: 'submit', 'name': 'submit', 'label': 'Submit', content: 'Register'}          
          ])
      }); 
      
      this.$el.append(form.render().el); 
      
      var bottomBar = new NavBar({        
        className: 'bottombar',
        collection: new ListViewCollection([
          {content: '&copy; 2008-13 ShapeStone. All rights reserved.'}, 
          {content: 'Terms of Service', action: '/terms'},
          {content: 'Privacy Policy/Your Privacy Rights', action: '/privacy'}]) 
      });      
      
      this.$el.append(bottomBar.render().el); 
      return this; 
      
    }, 
    
    selectionChanged: function(sender, model) {
      console.log('selectionChanged', sender.cid, model.get('content'), model.get('action'));
    }
  }); 
  
  return RegistrationView; 
})