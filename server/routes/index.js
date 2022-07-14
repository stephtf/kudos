const router = require('express').Router();
const kudosRoutes = require('./kudosRoutes');
const userRoutes = require('./userRoutes');

router.use('/', kudosRoutes);
router.use('/', userRoutes);

router.use((req, res) => {
    return res.send('Something is wrong with the routes');
  });

module.exports = router; 