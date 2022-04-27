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
        item => item.name === updateUser.name
    )
    users.splice(oldUserIdx,2);
    response.sendStatus(200)
}

export function putUserController (request, response) {
    const updatedUser = request.body;
    const oldUserIdx = users.findIndex(
        item => item.name === updatedUser.name
    )
    users[oldUserIdx] = updatedUser;
    response.sendStatus(200);
}