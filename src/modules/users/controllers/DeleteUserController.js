const {DeleteUserUseCase} = require('../useCases/DeleteUserUseCase');


async function DeleteUserController(request, response) {
  try {
    const {
      _id,
    } = request.params;

    const UserAuthenticate = await DeleteUserUseCase.delete({_id});

    return response.status(201).json(UserAuthenticate);
  } catch (error) {
    if (error instanceof Error) {
      return response.status(401).json({error: error.message});
    } else {
      return response.status(403).json({error: 'Ocurred an error!'});
    }
  }
}

module.exports = {DeleteUserController};
