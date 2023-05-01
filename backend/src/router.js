const express = require('express');
const router = express.Router();

const despesasController = require('./controllers/despesasController');

router.get('/despesas', despesasController.getAll);
router.post('/despesas', despesasController.inserirDespesa);


module.exports = router;