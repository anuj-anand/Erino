const express = require("express");

const router = express.Router();

const {
    getFunction,
    postFunction,
    putFunction,
    deleteFunction
} = require("../controller/index");

router.get('/contacts', getFunction);
router.post('contacts', postFunction);
router.put('/contacts/:id', putFunction);
router.delete('/contacts/:id', deleteFunction);

module.exports = router;