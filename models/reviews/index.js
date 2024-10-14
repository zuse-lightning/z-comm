const getAllReviews = "SELECT r.id, r.uid, `first_name`, `last_name`, `text`, `rating`, `date`, `image` FROM testdb.users u JOIN testdb.reviews r ON u.id = r.uid WHERE rating >= 3;";
const getReviewById = "SELECT r.id, r.uid, `first_name`, `last_name`, `text`, `rating`, `date`, `image` FROM testdb.users u JOIN testdb.reviews r ON u.id = r.uid WHERE r.id = ?;";
const addUserReview = "INSERT INTO testdb.reviews (`uid`, `text`, `rating`, `date`, `image`) VALUES (?);";
const deleteUserReview = "DELETE FROM testdb.reviews WHERE `id` = ? AND `uid` = ?;";
const updateUserReview = "UPDATE testdb.reviews SET `text` = ?, `rating` = ?, `image` = ? WHERE `id` = ? AND `uid` = ?;";

module.exports = {
    getAllReviews,
    getReviewById,
    addUserReview,
    deleteUserReview,
    updateUserReview
};