export const newTaskSchema = {
    $id: "/newTask",
    type: "object",
    properties: {
        description: {
            description: "Task description",
            type: "string"
        },
        done: {
            description: "Task status",
            type: "boolean"
        }
    },
    additionalProperties: false
}

export const taskSchema = {
    $id: "/task",
    type: "object",
    properties: {
        id: {
            description: "Task unique identificator",
            type: "integer",
            minimum: 0
        },
        description: {
            description: "Task description",
            type: "string"
        },
        done: {
            description: "Task status",
            type: "boolean"
        }
    },
    additionalProperties: false
}

export const deleteTaskSchema = {
    $id: "/deleteTask",
    type: "object",
    properties: {
        id: {
            description: "Task unique identificator",
            type: "integer",
            minimum: 0
        }
    },
    additionalProperties: false
}