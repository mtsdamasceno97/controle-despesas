const express = require('express');
const router = express.Router();

const despesasController = require('./controllers/despesasController');
const despesasMiddleware = require('./middlewares/despesasMiddleware');

router.get('/despesas', despesasController.getAll);
router.post('/despesas', despesasMiddleware.validarTitulo, despesasController.inserirDespesa);
router.delete('/despesas/:id', despesasController.deletarDespesa);
router.put('/despesas/:id', despesasController.atualizarDespesa);

module.exports = router;