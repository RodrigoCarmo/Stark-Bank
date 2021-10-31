const {CreateUserUseCase} = require('../useCases/CreateUserUseCase');


async function CreateUserController(request, response) {
  try {
    const {
      access_code, password,
    } = request.body;

    const UserAuthenticate = await CreateUserUseCase.create({access_code, password});

    return response.status(201).json(UserAuthenticate);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({error: error.message});
    } else {
      return response.status(403).json({error: 'Ocurred an error!'});
    }
  }
}

module.exports = {CreateUserController};
