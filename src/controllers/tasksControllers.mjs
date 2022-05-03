import { db } from "../models/db.mjs"
import { tasks } from "../models/tasksModels.mjs"

export function postTaskController(request, response) {
    const { description, done } = request.body;
    db.run(
        `INSERT INTO tasks(description, done) VALUES ("${description}", ${done})`,
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

export function getTasksController(request, response) {
    db.all(
        `SELECT id, description, done FROM tasks`,
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

export function putTaskController(request, response) {
    db.run(
        `UPDATE tasks SET description = "${request.body.description}" , done = ${request.body.done} WHERE id = "${request.body.id}"`,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(200)
            }
        }
    )
}

export function deleteTaskController(request, response) {
    db.run(
        `DELETE FROM tasks WHERE id =`+request.body.id,
        (err) => {
            if (err) {
                console.error(err);
                response.sendStatus(500)
            } else {
                response.sendStatus(200)
            }
        }
    )
}