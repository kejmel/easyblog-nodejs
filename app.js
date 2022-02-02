const express = require('express');
const app = express();
const PORT = process.env.PORT || 3030;
var cors = require('cors');
const router = express.Router();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', router);

router.post('/auth/signup', (req, res) => {
  res.status(200).json({"success" : true, "message" : "Post request for sign up"});
})

router.post('/auth/signin', (req, res) => {
  res.status(200).json({"success" : true, "message" : "Post request for sign in"});
})

router.get('/test/all', (req, res) => {
  res.status(200).json({"success" : true, "message" : "Retrieve public's content"});
})

router.get('/test/user', (req, res) => {
  res.status(200).json({"success" : true, "message" : "Retrieve user's content"});
})

router.get('/test/mod', (req, res) => {
  res.status(200).json({"success" : true, "message" : "Retrieve moderator's content"});
})

router.get('/test/admin', (req, res) => {
  res.status(200).json({"success" : true, "message" : "Retrieve admin's content"});
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

