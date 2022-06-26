const express = require('express');
const router = express.Router();

/* GET home page. */
router.post('/', async (req, res, next) => {
  console.log('Monday request:', JSON.stringify(req.body, null , 2))
  return res.status(200).send(req.body)
});

module.exports = router;


app.post("/", function(req, res) { })