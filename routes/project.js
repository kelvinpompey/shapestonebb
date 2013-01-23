var ProjectModel = require('../models/project');
var ActivityModel = require('../models/activity');

module.exports = {
	index: function(req, res) {
	ProjectModel
		.find()
		.populate('activities')
		.exec(function(err, data){
			res.send(data); 
	}); 
	},  

 activities: function(req, res) {

 	var projectid = req.params.projectid; 
 	var activity = new ActivityModel({
 		title: req.body.title,
 		project: req.params.projectid 
 	})

 	console.log(req.body); 
 	
 	ProjectModel.update(
 		{_id: projectid}, 
 		{$push: {activities: activity.id }}, {},function(err, data){
 		if(err) {
 			console.log('error');
 		}
 		else {
 			console.log('success', data); 
 			activity.save(function(err, data){
 				if(err) {
 					console.log('error');
 				}
 				else {
 					res.send(data); 
 				}
 			});
 		}
 	}); 

 }
}