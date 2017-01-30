// app/models/spell.js

// load mongoose since we need it to define a model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var spellSchema = new Schema({
    name: String,
    school: String,
    descriptor: String,
    sor: Number,
    wiz: Number,
    cleric: Number,
    druid: Number,
    ranger: Number,
    bard: Number,
    paladin: Number,
    alchemist: Number,
    summoner: Number,
    witch: Number,
    inqusitor: Number,
    oracle: Number,
    antipaldin: Number,
    magus: Number,
    adept: Number,
    shaman: Number,
    hunter: Number,
    bloodrager: Number
}, { collection: 'spells' });

module.exports = mongoose.model('Spell', spellSchema);