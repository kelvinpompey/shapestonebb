var ProjectModel = require('../models/project');

exports.index = function(req, res) {
	ProjectModel
		.find()
		.populate('activities')
		.exec(function(err, data){
			res.send(data); 
	})
}