import { db } from "../models/db.mjs"
import { users } from "../models/usersModels.mjs";

export function postUserController(request, response) {
    const { name, password } = request.body;
    db.run(
        `INSERT INTO users(name, password) VALUES ("${name}", "${password}")`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(201)
            }
        }
    )
}

export function getUsersController(request, response) {
    db.all(
        `SELECT id, name, password FROM users`,
        (err, data) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.json(data)
            }
        }
    )
}

export function putUserController(request, response) {
    const updatedUser = request.body;
    const oldUserIdx = users.findIndex(
        item => item.id === updatedUser.id
    )
    users[oldUserIdx] = updatedUser;
    response.sendStatus(200);
}

export function deleteUserController(request, response) {
    db.run(
        `DELETE FROM users WHERE id =`+request.body.id,
        (err, data) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(200)
            }
        }
    )
}