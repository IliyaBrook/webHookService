const app = require('../app');
module.exports = app.post("/monday/webhook/changeStatus", function(req, res) {
    res.status(200).send(req.body);
})