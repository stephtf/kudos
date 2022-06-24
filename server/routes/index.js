const router = require('express').Router();
const kudosRoutes = require('./kudosRoutes');

router.use('/', kudosRoutes);

router.use((req, res) => {
    return res.send('Wrong route!');
  });

module.exports = router; 