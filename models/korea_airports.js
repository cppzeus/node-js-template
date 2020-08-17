var mongoose = require('mongoose');
const { log } = require('debug');

// Define Schemes
const koreaairportSchema = new mongoose.Schema({
    airport_name: String,
    airport_district: String,
    latitude: Number,
    longitude: Number
});

// Create new korea airport document
koreaairportSchema.statics.create = function(payload) {
    // this === Model
    const koreaairport = new this(payload);
    // return Promise
    return koreaairport.save();
};

// Find All
koreaairportSchema.statics.findAll = function() {
    // return promise
    // Over V4 don't need exec()
    return this.find({});
};

// Find one by airport name
koreaairportSchema.statics.findOneByAirportname = function(airportname) {
    console.log(airportname);
    return this.findOne({ airport_name: airportname });
};

// Update by airport name
koreaairportSchema.statics.updateByAirportname = function(airportname, payload) {
    // {new: true}: return the modified documnet rather than the original. defaults to false.
    return this.findOneAndUpdate({ airport_name: airportname }, payload, { new: true });
};

// Delete by airport name
koreaairportSchema.statics.deleteByAirportname = function(airportname) {
    return this.remove({ airport_name: airportname });
};

// Create Model & Export
module.exports = mongoose.model('info_koreaairports', koreaairportSchema);