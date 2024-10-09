import React, { useState, useEffect } from "react";
import { Header, Rating, Image, Button, Icon } from "semantic-ui-react";
import { useLocation, useNavigate } from "react-router-dom";
import DeleteReviewModal from "../../components/DeleteReviewModal";
import axios from "axios";
import moment from "moment";

import "./style.css";

const Review = (props) => {

    const { currentUser } = props.auth;
    const [review, setReview] = useState({});

    const location = useLocation();
    const navigate = useNavigate();
    const reviewId = location.pathname.split("/")[2];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/reviews/${reviewId}`);
                setReview(res.data);
            } catch (err) {
                console.log(err);
            };
            fetchData();
        };
    }, [reviewId]);

    const handleAccess = async () => {
        if (currentUser.id !== review.uid) {
            alert("You are not authorized to edit this review.");
        } else {
            navigate(`/edit/${reviewId}`);
        };
    };

    const handleDelete = async () => {
        try {
            if (currentUser.id !== review.uid) alert("You are not authorized to delete this review.");
            await axios.delete(`http://localhost:5000/api/reviews/${reviewId}`);
            navigate("/reviews");
        } catch (err) {
            console.log(err);
        };
    };

    return (
        <div id="review-container">
            <div id="review-header-container">
                <div className="review-header-col">
                    <Header as="h1" id="review-header">{review.first_name} {review.last_name} Said</Header>
                </div>
                <div className="review-header-col">
                    <Button id="review-edit-btn" onClick={handleAccess} icon>
                        <Icon name="edit outline" />
                    </Button>
                    <DeleteReviewModal handleDelete={handleDelete} />
                </div>
            </div>
            <div id="review">
                <div className="review-col">
                    <Rating id="review-rating" maxRating={5} rating={review.rating} icon="star" size="massive" disabled />
                    <p id="review-text">{review.text}</p>
                    <p id="review-date">{moment(review.date).format("MMMM Do YYYY")}</p>
                </div>
                <div className="review-col">
                    <Image src={review.image} />
                </div>
            </div>
        </div>
    );
};

export default Review;