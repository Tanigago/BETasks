import { users } from "../models/usersModels.mjs";
import { tasks } from "../models/tasksModels.mjs";

export function requestLog ( request, response, next ) {
    next();
    const { url, method, body } = request
    console.log( method, url, body );
    console.log("Users:", users);
    console.log("Tasks:", tasks);
}