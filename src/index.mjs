import express from "express";

import { authMiddleware } from "./middleware/authorization.mjs";
import { requestLog } from "./middleware/requestsLog.mjs";
import { validateUserJSON, validateNewTaskJSON, validateTaskJSON, validateDeleteTaskJSON } from "./middleware/jsonValidator.mjs";

import { postUserController, getUsersController, deleteUserController, putUserController } from "./controllers/usersControllers.mjs";
import { deleteTaskController, getTasksController, postTaskController, putTaskController } from "./controllers/tasksControllers.mjs";

const PATH_PREFIX = "/api/v0.0"
const app = express();
try {
    const jsonParser = express.json();

    app.use(requestLog);

    app.post(PATH_PREFIX + "/users/", jsonParser, validateUserJSON, postUserController);
    app.get(PATH_PREFIX + "/users/", jsonParser, getUsersController);
    app.delete(PATH_PREFIX + "/users/", jsonParser, deleteUserController);
    app.put(PATH_PREFIX + "/users/", jsonParser, putUserController);

    app.get(PATH_PREFIX + "/tasks/", authMiddleware, getTasksController);
    app.post(PATH_PREFIX + "/task/", authMiddleware, jsonParser, validateNewTaskJSON, postTaskController);
    app.put(PATH_PREFIX + "/task/", authMiddleware, jsonParser, validateTaskJSON, putTaskController);
    app.delete(PATH_PREFIX + "/task/", authMiddleware, jsonParser, validateDeleteTaskJSON, deleteTaskController);

    app.listen(process.env.PORT || 3000, () => {
        console.log("Express running...");
    });
} catch (err) {
    console.error(err);
}