const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

// * NOTE: obviously dont put your password here...
const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb://root:example@localhost:27017/?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-256"
  )
    .then((client) => {
      console.log("Connected!");
      cb(client);
    })
    .catch((err) => console.log(err));
};

module.exports = mongoConnect;
