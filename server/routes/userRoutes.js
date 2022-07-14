const router = require('express').Router();
const Users = require('../models/User');

// localhost/users - get all the users
router.get('/users', async (req,res) => {
    try {
        const allUsers = await Users.find();
        res.status(200).json(allUsers);
    } catch (err) {
        res.status(500).json(err);
    }
});

// localhost/users - create a new user 
router.post('/users', async (req,res) => {
    try {
        const newUser = await Users.create(req.body);
        res.status(200).json(newUser); 
    } catch (err) {
        res.status(500).json(err);
    }
})

// localhost/users/:_id - delete a user 
router.delete('/users/:_id', async (req, res) => {
    try { 
        const deletedUser = await Users.findOneAndDelete({ _id: req.params._id });
        res.status(200).json(deletedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

// localhost/users/_:id - update a user 
router.put('/users/:_id', async (req, res) => {
    try { 
        const updatedUser = await Users.findOneAndUpdate({ _id: req.params._id });
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
