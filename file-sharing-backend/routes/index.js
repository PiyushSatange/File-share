const express = require('express');
const router = express.Router();

const {sendFile, getFile} = require('../controllers/fileController')

router.get("/getFile", getFile);
router.post("/sendFile", sendFile);

module.exports = {
    router
}