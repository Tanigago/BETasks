import { users } from "../models/usersModels.mjs";

function decodeAuthBasic(headerContent) {
    try {
        const [method, token] = headerContent.split(" ");
        const tokenString = atob(token);
        const [username, password] = tokenString.split(":");
        return { method, username, password }
    } catch (error) {
        throw "Autenticación pocha";
    }
}

export function authMiddleware(request, response, next) {
    try {
        const { method, username, password } = decodeAuthBasic(request.headers.authorization);
        if (method != "Basic") throw "El método de autorización no furula, usa Basic neno."
        const user = users.find(
            item => item.name === username && item.password === password
        )
        if (user) {
            next()
        } else {
            throw "Error con la autorización"
        }
    } catch (err) {
        console.error(err);
        response.sendStatus(401)
        return;
    }
}