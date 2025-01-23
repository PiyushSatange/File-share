const express = require('express');
const router = express.Router();

const {uploadFile, getFile} = require('../controllers/fileController')

router.get("/getFile", getFile);

module.exports = {
    router
}