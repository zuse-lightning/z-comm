const router = require('express').Router();
const { getCollections } = require('../../../controllers/collectionController');

router.get('/', getCollections);
// router.get('/:collection', getCollection);

module.exports = router;