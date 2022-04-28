export const userSchema = {
    $id: "/user",
    type: "object",
    properties: {
        id: {
            description: "User unique identificator",
            type: "integer",
            minimum: 0
        },
        name: {
            description: "Unique user name",
            type: "string"
        },
        password: {
            description: "Secret password",
            type: "string"
        }
    },
    additionalProperties: false
}