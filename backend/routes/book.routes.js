const router = require('express').Router();
let Book = require('../models/Books');
const async = require("async");

router.route('/').get((req, res) => {
    Book.find()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Used to return the count of the result
router.route('/search/:search').get((req, res) => {
    Book.find({$text: {$search: `\"${req.params.search}\"`}})
        .count()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Used to return the count of the result with filter
router.route('/search/:search/:rating').get((req, res) => {
    const rating = parseInt(req.params.rating)
    Book.find({$text: {$search: `\"${req.params.search}\"`},
        average_rating: {$gte: rating, $lte: rating+0.99}

    })
        .count()
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Skip and limit are used for pagination
router.route('/search/:search/:skip').get((req, res) => {
    Book.find({$text: {$search: `\"${req.params.search}\"`}})
        .skip(parseInt(req.params.skip))
        .limit(10)
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Filter rating
router.route('/search/:search/:skip/:sort/:rating').get((req, res) => {
    const sortt = req.params.sort
    const rating = parseInt(req.params.rating)
    Book.find({$text: {$search: `\"${req.params.search}\"`},
            average_rating: {$gte: rating, $lte: rating+0.99}
        }
    )
        .sort(sortt)
        .skip(parseInt(req.params.skip))
        .limit(10)
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Skip and limit are used for pagination
router.route('/search/:search/:skip/:sort').get((req, res) => {
    const sortt = req.params.sort

    Book.find({$text: {$search: `\"${req.params.search}\"`}})
        .sort(sortt)
        .skip(parseInt(req.params.skip))
        .limit(10)
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Book.find({_id: req.params.id})
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err))
});


router.route('/add').post((req, res) => {
    const bookID = req.body.bookID;
    const title = req.body.title;
    const authors = req.body.authors;
    const average_rating = req.body.average_rating;
    const isbn = req.body.isbn;
    const isbn13 = req.body.isbn13;
    const language_code = req.body.language_code;
    const num_pages = req.body.num_pages;
    const ratings_count = req.body.ratings_count;
    const text_reviews_count = req.body.text_reviews_count;
    const publication_date = req.body.publication_date;
    const publisher = req.body.publisher;

    const newBook = new Book({bookID,title,authors,average_rating,isbn,isbn13,language_code,num_pages,ratings_count,text_reviews_count,publication_date,publisher});

    newBook.save()
        .then(() => res.json('Book added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/adds').post((req, res) => {
    console.log(req.body);
    async.mapSeries(req.body,function iterator(book,cb) {
        const newBook = new Book(book);

        newBook.save(function(error){
            cb(error, newBook);
        });
        //    .then(() => res.json('Book added!'))
        //    .catch(err => res.status(400).json('Error: ' + err));

    }).catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;
