const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dashboardSchema = new Schema({
  ClearWeb: Schema.Types.Mixed,
  DarkWeb: Schema.Types.Mixed
});

const ModelClass = mongoose.model('dashboard', dashboardSchema);

module.exports = ModelClass;
