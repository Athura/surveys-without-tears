// Initializes the `survey` service on path `/survey`
const createService = require('feathers-sequelize');
const createModel = require('../../models/survey.model');
const hooks = require('./survey.hooks');
const filters = require('./survey.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'survey',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/survey', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('survey');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
