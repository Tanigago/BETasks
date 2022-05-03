import { users } from "../models/usersModels.mjs";
import { db } from "../models/db.mjs"

function decodeAuthBasic(headerContent) {
    try {
        const [method, token] = headerContent.split(" ");
        const tokenString = atob(token);
        const [name, password] = tokenString.split(":");
        return { method, name, password }
    } catch (error) {
        throw "Autenticación pocha";
    }
}

export function authMiddleware(request, response, next) {
    try {
        const { method, name, password } = decodeAuthBasic(request.headers.authorization);

        if (method != "Basic") throw "El método de autorización no furula, usa Basic neno."

        db.get(
            `SELECT * FROM users WHERE name = "${name}" AND password = "${password}"`,
            (err, data) => {
                if (err) {
                    response.status(500);
                    response.send(err)
                } else if (data) {
                    next();
                } else {
                    throw "Usuario inexistente o contraseña incorrecta"
                }
            }
        )
     
    } catch (err) {
        console.error(err);
        response.sendStatus(401)
        return;
    }
}