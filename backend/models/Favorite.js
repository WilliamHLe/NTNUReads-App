const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Book = require('./Books.js').schema;
const User = require('./User.js').schema;

const favoriteSchema = new Schema({
    book: {type:Schema.Types.ObjectID,ref: 'Books'},
    user: {type:Schema.Types.ObjectID,ref: 'User'}
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = Favorite;