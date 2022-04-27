import {users} from "../models/usersModels.mjs";

export function postUserController (request, response) {
    users.push(request.body);
    response.sendStatus(201)
}

export function getUserController (request, response) {
    response.json(users)
}

export function deleteUserController (request, response) {
    const updateUser = request.body;
    const oldUserIdx = users.findIndex(
        item => item.id === updateUser.id
    )
    users.splice(oldUserIdx,1);
    response.sendStatus(200)
}