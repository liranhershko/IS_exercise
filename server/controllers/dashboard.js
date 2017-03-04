const Dashboard = require('../models/dashboard');
const Promise = require('bluebird');
const localData = require('../localData/dashboard');

const dashboardCtrl = {
  addData: function() {
    return new Promise(function(resolve, reject) {
      const dashboard = new Dashboard(localData);
      dashboard.save(function(err) {
        if (err) {
          return next(err);
        }

        resolve(dashboard);
      });
    });
  },

  getData: function(req, res, next) {
    Dashboard.findOne({}, function(err, dashboard) {
      if (dashboard) {
        res.send({ dashboard });
        return;
      }

      dashboardCtrl.addData().then(function(dashboard) {
        res.send({ dashboard });
      });
    });
  }
};

module.exports = dashboardCtrl;
