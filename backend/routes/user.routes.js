const router = require('express').Router();
let User = require('../models/User');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const newUser = new User({
        username,
        password
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/login/:username/:password').get((req, res) => {
    const username = req.params.username;
    const password = req.params.password;

    User.find({'username':username,'password':password})
        .then(users => res.json(users),console.log("what"))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;