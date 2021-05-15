const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>res.json({username:'walang'}));
router.get('/group', (req, res)=>res.json({username:'dev group. walang'}));

module.exports = router;