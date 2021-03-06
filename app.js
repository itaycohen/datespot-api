const express = require("express");
// const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const spotRoutes = require("./api/routes/spots");



const app = express();

app.use(cors())


// mongoose.connect(
//   "mongodb://node-shop:" +
//     process.env.MONGO_ATLAS_PW +
//     "@node-rest-shop-shard-00-00-wovcj.mongodb.net:27017,node-rest-shop-shard-00-01-wovcj.mongodb.net:27017,node-rest-shop-shard-00-02-wovcj.mongodb.net:27017/test?ssl=true&replicaSet=node-rest-shop-shard-0&authSource=admin",
//   {
//     useMongoClient: true
//   }
// );


// //TODO change password to env var 
const mongoDB = 'mongodb://itaycohen:dic038042651@cluster0-shard-00-00-mnfah.mongodb.net:27017,cluster0-shard-00-01-mnfah.mongodb.net:27017,cluster0-shard-00-02-mnfah.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
mongoose.connect(mongoDB, { useNewUrlParser: true });

// app.use(morgan("dev"));
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept, Authorization"
//   );
//   if (req.method === "OPTIONS") {
//     res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
//     return res.status(200).json({});
//   }
//   next();
// });

// Routes which should handle requests

app.use("/spots", spotRoutes);
// app.use("/orders", orderRoutes);

app.use((req, res, next) => {
  const error = new Error("Not found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;