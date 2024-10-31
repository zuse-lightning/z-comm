const getUserByEmail = "SELECT * FROM xguq3o5tvsxchopc.users WHERE email = ?";
const getUserById = "SELECT * FROM xguq3o5tvsxchopc.users WHERE user_id = ?";
const getUserIds = "SELECT user_id FROM xguq3o5tvsxchopc.users";
const setUserData = "INSERT INTO xguq3o5tvsxchopc.users (user_id, first_name, last_name, email, password) VALUES (?)";
const getUser = "SELECT * FROM xguq3o5tvsxchopc.users WHERE email = ? OR (first_name = ? AND last_name = ?)";
const resetUserPassword = "UPDATE xguq3o5tvsxchopc.users SET `password` = ? WHERE `id` = ?";

module.exports = {
    getUserByEmail,
    getUserById,
    getUserIds,
    setUserData,
    getUser,
    resetUserPassword
};