const getAllReviews = "SELECT r.id, r.uid, `first_name`, `last_name`, `text`, `rating`, `date`, `image` FROM xguq3o5tvsxchopc.users u JOIN xguq3o5tvsxchopc.reviews r ON u.id = r.uid WHERE rating >= 3;";
const getReviewById = "SELECT r.id, r.uid, `first_name`, `last_name`, `text`, `rating`, `date`, `image` FROM xguq3o5tvsxchopc.users u JOIN xguq3o5tvsxchopc.reviews r ON u.id = r.uid WHERE r.id = ?;";
const addUserReview = "INSERT INTO xguq3o5tvsxchopc.reviews (`uid`, `text`, `rating`, `date`, `image`) VALUES (?);";
const deleteUserReview = "DELETE FROM xguq3o5tvsxchopc.reviews WHERE `id` = ? AND `uid` = ?;";
const updateUserReview = "UPDATE xguq3o5tvsxchopc.reviews SET `text` = ?, `rating` = ?, `image` = ? WHERE `id` = ? AND `uid` = ?;";

module.exports = {
    getAllReviews,
    getReviewById,
    addUserReview,
    deleteUserReview,
    updateUserReview
};