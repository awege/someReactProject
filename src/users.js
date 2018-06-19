
export function getUsers() {
    const users = JSON.parse('{"users": [{ "username": "Superdevaaja","password": "esko"},{"username": "pekka","password": "esko"}]}');
    return users.users;
}