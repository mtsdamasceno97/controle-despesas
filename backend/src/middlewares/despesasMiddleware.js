const validarTitulo = (request, response, next) => {
    const { body } = request;
  
    if (body.titulo === undefined) {
      return response.status(400).json({ message: 'O campo titulo é obrigatório' });
    }
  
    if (body.titulo === '') {
      return response.status(400).json({ message: 'O campo titulo não pode ser vazio' });
    }
  
    next();
  };

module.exports = {
    validarTitulo
}