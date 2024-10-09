const getUserByEmail = "SELECT * FROM testdb.users WHERE email = ?";
const getUserById = "SELECT * FROM testdb.users WHERE user_id = ?";
const getUserIds = "SELECT user_id FROM testdb.users";
const setUserData = "INSERT INTO testdb.users (user_id, first_name, last_name, email, password) VALUES (?)";
const getUser = "SELECT * FROM testdb.users WHERE email = ? OR (first_name = ? AND last_name = ?)";
const resetUserPassword = "UPDATE testdb.users SET `password` = ? WHERE `id` = ?";

module.exports = {
    getUserByEmail,
    getUserById,
    getUserIds,
    setUserData,
    getUser,
    resetUserPassword
};