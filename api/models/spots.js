const mongoose = require('mongoose');

const spotSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    name: String,
    score: Number
});


module.exports = mongoose.model('Spot', spotSchema);