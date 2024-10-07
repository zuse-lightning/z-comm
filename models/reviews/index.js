const getAllReviews = "SELECT r.id, r.uid, `first_name`, `last_name`, `text`, `rating`, `date`, `image` FROM zuse.users u JOIN zuse.reviews r ON u.id = r.uid WHERE rating >= 3;";
const getReviewById = "SELECT r.id, r.uid, `first_name`, `last_name`, `text`, `rating`, `date`, `image` FROM zuse.users u JOIN zuse.reviews r ON u.id = r.uid WHERE r.id = ?;";
const addUserREview = "INSERT INTO zuse.reviews (`uid`, `text`, `rating`, `date`, `image`) VALUES (?);";
const deleteUserReview = "DELETE FROM american_contract.reviews WHERE `id` = ? AND `uid` = ?;";
const updateUserReview = "UPDATE zuse.reviews SET `text` = ?, `rating` = ?, `image` = ? WHERE `id` = ? AND `uid` = ?;";

module.exports = {
    getAllReviews,
    getReviewById,
    addUserREview,
    deleteUserReview,
    updateUserReview
};