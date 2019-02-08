const survey = require('./survey/survey.service.js');
const user = require('./user/user.service.js');
const role = require('./role/role.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(survey);
  app.configure(user);
  app.configure(role);
};
