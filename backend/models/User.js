const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Book = require('./Books.js').schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true
    },
    books: [{type:Schema.Types.ObjectID,ref: 'Book'}]
}, {
    timestamps: true,
});

const User = mongoose.model('User', userSchema);

module.exports = User;