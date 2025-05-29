import fs from "fs";

const DB_FILE = "./PaxBank.json";

export async function setupDB() {
    if (!fs.existsSync(DB_FILE)) {
        fs.writeFileSync(DB_FILE, JSON.stringify({ users: [] }, null, 2));
    }
}

export async function addUser(username, password) {
    const db = JSON.parse(fs.readFileSync(DB_FILE));
    db.users.push({ username, password });
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

export async function findUser(username) {
    const db = JSON.parse(fs.readFileSync(DB_FILE));
    return db.users.find(user => user.username === username);
}
