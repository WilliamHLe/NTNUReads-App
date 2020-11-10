const router = require('express').Router();
let Book = require('../models/Books');
let User = require('../models/User');
const async = require("async");

router.route('/user/:user').get((req, res) => {
    User.findOne({_id: req.params.user})
        .populate("books")
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/book/:book').get((req, res) => {
    Book.findOne({_id: req.params.book})
        .populate("users")
        .then(books => res.json(books))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').put((req, res) => {
    User.findOneAndUpdate({_id: req.body.user},
        {$push: {books: req.body.book}},
        { new: true, useFindAndModify: false })
        .then(users => {
            Book.findOneAndUpdate({_id: req.body.book},
                {$push: {users: req.body.user}},
                { new: true, useFindAndModify: false })
            User.findOne({_id: req.body.user, books:req.body.book})
                .then(user => {
                    res.json(user)
                })
        })
})

router.route('/remove').put((req, res) => {
    User.findOneAndUpdate({_id: req.body.user},
        {$pull: {books: req.body.book}},
        { new: true, useFindAndModify: false })
        .then(users => {
            Book.findOneAndUpdate({_id: req.body.book},
                {$pull: {users: req.body.user}},
                { new: true, useFindAndModify: false })
            User.findOne({_id: req.body.user, books:req.body.book})
                .then(user => {
                    res.json(user)
                })
        })

})

router.route('/find/:user/:book').get((req, res) => {
    User.findOne({_id: req.params.user, books:req.params.book})
        .then(users => {
            res.json(users)
        })
})



module.exports = router;