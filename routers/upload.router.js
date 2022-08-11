const express = require('express')
const router = express.Router()
const uploadController = require("../controllers/upload.controller");

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', uploadController.index);

module.exports = router;