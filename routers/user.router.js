const express = require('express')
const router = express.Router()
const UserController = require("../controllers/user.controller");

// middleware that is specific to this router
router.use((req, res, next) => {
    console.log('Time: ', Date.now())
    next()
})

router.get('/', UserController.index);

module.exports = router;