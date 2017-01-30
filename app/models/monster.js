// app/models/monster.js

// load mongoose since we need it to define a model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var monsterSchema = new Schema({
    Name: String,
    CR: Number
}, { collection: 'bestiary' });

module.exports = mongoose.model('Monster', monsterSchema);