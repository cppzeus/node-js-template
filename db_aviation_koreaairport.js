// ENV
require('dotenv').config();

// DEPENDENCIES
var mongoose = require('mongoose');

var db_uri = process.env.MONGO_DB_PROTOCOL + process.env.DB_USER + ':' + process.env.DB_PASS + '@' + process.env.MONGO_DB_HOST + ':' + process.env.MONGO_DB_PORT + '/' + process.env.COL_AVIATION;
console.log("db_uri=>" + db_uri);

// Using native Promise for Node.js
mongoose.Promise = global.Promise;

// CONNECT TO MONGODB SERVER
mongoose.connect(db_uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Successfully connected to mongodb for aviation info"))
    .catch(e => console.error(e));

module.exports = mongoose;