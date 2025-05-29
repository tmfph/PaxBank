export async function registerUser(username, email, password) {
    const db = JSON.parse(fs.readFileSync("./PaxBank.json"));
    db.users.push({ username, email, password });
    fs.writeFileSync("./PaxBank.json", JSON.stringify(db, null, 2));
}

export async function resetPassword(email, newPassword) {
    const db = JSON.parse(fs.readFileSync("./PaxBank.json"));
    const user = db.users.find(u => u.email === email);
    if (user) user.password = newPassword;
    fs.writeFileSync("./PaxBank.json", JSON.stringify(db, null, 2));
}
