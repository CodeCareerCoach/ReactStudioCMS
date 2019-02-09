const testRoutes = require("./test_route");

module.exports = function(app, db) {
  testRoutes(app, db);
};
