var mongoose = require ('mongoose'); 
var ActivityModel = require('./activity'); 

var projectSchema = mongoose.Schema({
  title: String,
  activities: [{type: mongoose.Schema.Types.ObjectId, ref: 'Activity'}]
});

var projectModel = mongoose.model('Project', projectSchema); 

module.exports = projectModel;