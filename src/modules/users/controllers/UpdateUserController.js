
const {UpdateUserUseCase} = require('../useCases/UpdateUserUseCase');

async function UpdateUserController(request, response) {
  try {
    const {
      _id, password,
    } = request.body;

    await UpdateUserUseCase.update({_id, password});

    return response.status(201).send();
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({error: error.message});
    }

    return response.status(400).json({error: 'An error ocurred.'});
  }
}

module.exports = {UpdateUserController};
