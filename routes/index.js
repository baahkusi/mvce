const express = require('express');
const ctrl = require('./../controllers/api');

const router = express.Router();

router.get('/bills/:lastModified/:offset', ctrl.bills);

module.exports = router;
