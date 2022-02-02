const express = require('express');
const app = express();
const port = 3030;

var cors = require('cors');
const bodyParser = require("body-parser");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const db = require("./app/models"); // this module is exported in index.js 
const Role = db.role; // in that index js , that role is defined again with exported value from role.model.js , where is exported 
// we are calling that db.role as where is located + (sequalize, Sequalize)

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

