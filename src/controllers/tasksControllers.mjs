import {tasks} from "../models/tasksModels.mjs"

export function getTaskController (request, response) {
    response.json(tasks)
}

export function postTaskController(request, response) {
    try {
        tasks.push (request.body);
        response.sendStatus(201);
    } catch (err) {
        console.error(err)
        response.sendStatus(500);        
    }
}

export function putTaskController (request, response) {
    const updatedTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updatedTask.id
    )
    tasks[oldTaskIdx] = updatedTask;
    response.sendStatus(200);
}

export function deleteTaskController (request, response) {
    const updateTask = request.body;
    const oldTaskIdx = tasks.findIndex(
        item => item.id === updateTask.id
    )
    tasks.splice(oldTaskIdx,1);
    response.sendStatus(200)
}