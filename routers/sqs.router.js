const express = require('express')
const router = express.Router()
const queueController = require("../controllers/queue.controller");

router.get('/', queueController.index);

module.exports = router;