var mongoose = require('mongoose'); 

var activitySchema = mongoose.Schema({
  title: String,
  project: {type: mongoose.Schema.Types.ObjectId, ref: 'Project'}
}); 

var activityModel = mongoose.model('Activity', activitySchema); 

module.exports = activityModel; 