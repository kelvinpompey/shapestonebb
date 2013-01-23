
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , projectRoute = require('./routes/project')
  , http = require('http')
  , mongoose = require('mongoose')
  , projectModel = require('./models/project')
  , activityModel = require('./models/activity')
  , path = require('path');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(path.join(__dirname, 'public')));  
  app.use(app.router);
});

app.configure('development', function(){
  app.use(express.errorHandler());
});

var db = mongoose.connect("mongodb://localhost/shapestonedb");

console.dir(projectRoute); 
app.get('/projects.json', projectRoute.index); 
app.post('/project/:projectid/activities.json', projectRoute.activities); 
app.get('/*', routes.index);
app.get('/users', user.list);

var run = function() {
  http.createServer(app).listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));  
  });  
}

console.log("require.main: " + require.main); 
if(require.main === module) {
  run(); 
}
else {
  exports.run = run; 
  exports.ProjectModel = projectModel; 
  exports.ActivityModel = activityModel; 
  exports.mongoose = mongoose; 
}


