define([
  'underscore',
  'backbone',
  'text!uilib/templates/inputview.html'], function(_, Backbone, InputViewTemplate){
  var InputView = Backbone.View.extend({
    tagName: 'p',    
    initialize: function() {
      this.templateHTML = _.template(InputViewTemplate, this.model.toJSON()); 
      console.log('templateHTML', this.templateHTML); 
    }, 
    
    render: function() {    
      this.el.innerHTML = this.templateHTML; 
      return this; 
    }
  }); 
  
  return InputView; 
}); 