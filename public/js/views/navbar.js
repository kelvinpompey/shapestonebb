define(['backbone', 'uilib/views/listview'], function(Backbone, ListView){
  var NavBar = ListView.extend({
    className: 'navbar'
  }); 
  
  return NavBar; 
}); 