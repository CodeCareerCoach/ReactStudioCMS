module.exports = function(app, db) {
  app.get("/test", (req, res) => {
    res.send("Hello Test");
  });
};
