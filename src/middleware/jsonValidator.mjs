import { validate } from "jsonschema";

import { userSchema } from "../schemas/usersSchemas.mjs";
import { taskSchema, newTaskSchema, deleteTaskSchema } from "../schemas/tasksSchemas.mjs";

export function validateUserJSON(request, response, next) {
    try {
        const validation = validate(request.body, userSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Invalid user data provided");
            console.error("Invalid user data provided");
        }
    } catch (err) {
        throw "Error validating data"
    }
}

export function validateNewTaskJSON(request, response, next) {
    try {
        const validation = validate(request.body, newTaskSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Invalid user data provided");
            console.error("Invalid user data provided");
        }
    } catch (err) {
        throw "Error validating data"
    }
}

export function validateTaskJSON(request, response, next) {
    try {
        const validation = validate(request.body, taskSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Invalid user data provided");
            console.error("Invalid user data provided");
        }
    } catch (err) {
        throw "Error validating data"
    }
}

export function validateDeleteTaskJSON(request, response, next) {
    try {
        const validation = validate(request.body, deleteTaskSchema)
        if (validation.valid) {
            next();
        } else {
            response.status(400);
            response.send("Invalid user data provided");
            console.error("Invalid user data provided");
        }
    } catch (err) {
        throw "Error validating data"
    }
}
