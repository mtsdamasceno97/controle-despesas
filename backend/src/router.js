const express = require('express');
const router = express.Router();

const despesasController = require('./controllers/despesasController');

router.get('/despesas', despesasController.getAll);


module.exports = router;