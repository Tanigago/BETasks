import sqlite3 from 'sqlite3';

export const db = new sqlite3.Database('./tasks.db', (err) => {
    if (err) {
        console.error(err.task);
    }
    console.log('Connected to the tasks database.');
});

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        users(
            id INTEGER PRIMARY KEY,
            name TEXT NOT NULL,
            password TEXT NOT NULL
        )
`);

db.run(`
    CREATE TABLE
        IF NOT EXISTS
        tasks(
            id INTEGER PRIMARY KEY,
            description VARCHAR(100) NOT NULL,
            done BOOLEAN DEFAULT false NOT NULL
        )
`);

export function sqlCallback(error, data) {
    console.log("error:", error, "data:", data);
    if (error) throw error;
}

export function findUser(name, password, callback) {
    db.get(`
        SELECT id
        FROM users
        WHERE name = "${name}" AND password = "${password}"
        `,
        callback
    )
}

export function insertUser(userObject, callback) {
    const { id, name, password } = userObject;
    const sql = `
        INSERT INTO users (id, name, password)
        values (${id}, "${name}", "${password}");
    `;
    db.run(sql, callback);
}

export function getUsers(callback) {
    db.all("SELECT id, name FROM users", callback);
}

export function insertTask(taskObject, callback) {
    const { id, description, done } = taskObject;
    const sql = `
        INSERT INTO tasks (id, description, done)
        values (${id}, "${description}", ${done});
    `;
    db.run(sql, callback);
}

export function getLastTask(minutes, callback) {
    const afterTime = Date.now() - 60000 * minutes;
    db.all(`
        SELECT *
        FROM tasks
        WHERE time >= ${afterTime}
        `,
        callback
    )
}


export default db;