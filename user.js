import fs from "fs";

const DB_FILE = "./PaxBank.json";

export async function registerUser(username, email, password) {
    const db = fs.existsSync(DB_FILE) ? JSON.parse(fs.readFileSync(DB_FILE)) : { users: [] };
    db.users.push({ username, email, password });
    fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

export async function resetPassword(email, newPassword) {
    const db = JSON.parse(fs.readFileSync(DB_FILE));
    const user = db.users.find(u => u.email === email);
    if (user) {
        user.password = newPassword;
        fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
    }
}
