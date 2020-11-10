const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Book = require('./Books.js').schema;

const reviewSchema = new Schema({
    name: String,
    rating: Number,
    review: String,
    book: {type:Schema.Types.ObjectID,ref: 'Book'}
/*    book: {
        type: Schema.Types.ObjectId,
        ref: "Book"
    }*/
}, {
    timestamps: true,
});

module.exports = mongoose.model('Review', reviewSchema);