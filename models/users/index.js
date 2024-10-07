const getUserByEmail = "SELECT * FROM zuse.users WHERE email = ?";
const getUserById = "SELECT * FROM zuse.users WHERE user_id = ?";
const getUserIds = "SELECT user_id FROM zuse.users";
const setUserData = "INSERT INTO zuse.users (user_id, first_name, last_name, email, password) VALUES (?)";
const getUser = "SELECT * FROM zuse.users WHERE email = ? OR (first_name = ? AND last_name = ?)";
const resetUserPassword = "UPDATE zuse.users SET `password` = ? WHERE `id` = ?";

module.exports = {
    getUserByEmail,
    getUserById,
    getUserIds,
    setUserData,
    getUser,
    resetUserPassword
};