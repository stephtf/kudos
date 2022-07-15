const router = require('express').Router();
const Kudos = require('../models/Kudo_collection');

// localhost/kudos/:user_id - get all the kudos of a single user
router.get('/kudos/:user_id', async (req,res) => {
    try {
        const userKudos = await Kudos.find({ user_id: req.params.user_id });
        res.status(200).json(userKudos);
    } catch (err) {
        res.status(500).json(err);
    }
});

// localhost/users - get all the kudos
router.get('/kudos', async (req,res) => {
    try {
        const allKudos = await Kudos.find();
        res.status(200).json(allKudos);
    } catch (err) {
        res.status(500).json(err);
    }
});

// localhost/kudos - post a new kudo (associated with single user)
router.post('/kudos', async (req,res) => {
    try {
        const newKudo = await Kudos.create(req.body);
        res.status(200).json(newKudo); 
    } catch (err) {
        res.status(500).json(err);
    }
})

// localhost/kudos/:_id - delete a kudo (associated with a single user)
router.delete('/kudos/:_id', async (req, res) => {
    try { 
        const deletedKudo = await Kudos.findOneAndDelete({ _id: req.params._id });
        res.status(200).json(deletedKudo);
    } catch (err) {
        res.status(500).json(err);
    }
});

// localhost/kudos/_:id - update a kudo (associated with a single user)
// requires user_id in req.body
router.put('/kudos/:_id', async (req, res) => {
    try { 
        const updatedKudo = await Kudos.findOneAndUpdate({ _id: req.params._id }, { date: req.body.date, text: req.body.text, category: req.body.category, img_url: req.body.img_url, gif_url: req.body.gif_url, personal_notes: req.body.personal_notes });
        res.status(200).json(updatedKudo);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;