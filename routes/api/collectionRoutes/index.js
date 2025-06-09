const router = require('express').Router();
const { getCollections } = require('../../../controllers/collectionController');

router.get('/', getCollections);

module.exports = router;