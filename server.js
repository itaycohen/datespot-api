// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');



// const app = express();

// app.use(cors())
// app.use(bodyParser.json());

// // const mongoDB = 'mongodb://itaycohen:dic038042651@ds145230.mlab.com:45230/datespot';
// //TODO change password to env var 
// const mongoDB = 'mongodb://itaycohen:dic038042651@cluster0-shard-00-00-mnfah.mongodb.net:27017,cluster0-shard-00-01-mnfah.mongodb.net:27017,cluster0-shard-00-02-mnfah.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true';
// mongoose.connect(mongoDB, { useNewUrlParser: true });



// // mongoose.connect("mongodb://localhost:27017/YourDB", { useNewUrlParser: true });


// //Define a schema
// // const Schema = mongoose.Schema;

// // const SomeModelSchema = new Schema({
// //     a_string: String,
// //     a_date: Date
// // });

// // // Compile model from schema
// // const SomeModel = mongoose.model('SomeModel', SomeModelSchema );

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("we're connected!");
// //   console.log(db.spots);

// });

// // app.get('/spots', (req, res)=> { 
// //     res.send(database.spots) 
// // })


// // const PORT = process.env.PORT

// app.listen(3000, () => {
//     // console.log(`app is running on port ${PORT}`);
//     console.log(`app is running on port 3000`);

// });




const http = require('http');
const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port);
