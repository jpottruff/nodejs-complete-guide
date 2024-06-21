const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

// * NOTE: obviously dont put your password here...
const mongoConnect = (cb) => {
  MongoClient.connect(
    "mongodb://root:example@localhost:27017/node-course-shop?serverSelectionTimeoutMS=5000&connectTimeoutMS=10000&authSource=admin&authMechanism=SCRAM-SHA-256"
  )
    .then((client) => {
      console.log("Connected to Mongo!");
      _db = client.db();
      cb();
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }

  throw "No database found";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
