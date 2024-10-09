import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Header, Button, Message } from "semantic-ui-react";
import axios from "axios";

import "./style.css";

const Register = (props) => {

    const { currentUser, alreadyLoggedIn } = props.auth;
    console.log(props);
    const [inputs, setInputs] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });
    const [err, setError] = useState(null);
    const navigate = useNavigate();

    const handleChange = async (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("/auth/register", inputs);
            navigate("/login");
        } catch (err) {
            setError(err.response.data);
        };
    };

    useEffect(() => {
        alreadyLoggedIn();
    }, [currentUser]);

    return (
        <div id="register-container">
            <Header id="register-header" as="h1">Register</Header>
            <form onSubmit={handleSubmit} id="register-form">
                <div className="register-form-col">
                    <input required id="register-first-name-input" onChange={handleChange} name="first_name" type="text" placeholder="First Name" />
                </div>
                <div className="register-form-col">
                    <input required id="register-last-name-input" onChange={handleChange} name="last_name" type="text" placeholder="Last Name" />
                </div>
                <div className="register-form-col">
                    <input required id="register-email-input" onChange={handleChange} name="email" type="email" placeholder="Email" />
                </div>
                <div className="register-form-col">
                    <input required id="register-password-input" onChange={handleChange} name="password" type="password" placeholder="Password" />
                </div>
                <div className="register-form-col">
                    <Button id="register-submit-btn" fluid type="submit">Register</Button>
                </div>
                <div className="register-form-col">
                    <Message>
                        Already have an account? <Link to="/login">Log In</Link>
                    </Message>
                </div>
                <div className="register-form-col">
                    {err ? <Message error>{err}</Message> : null}
                </div>
            </form>
        </div>
    );
};

export default Register;