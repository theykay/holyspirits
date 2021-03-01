const router = require('express').Router();
const product = require('./product.routes');

router.use('/api/product', product);

module.exports = router;