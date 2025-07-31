const db = require("../../config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");
const sendEmail = require("../../utils/sendEmail");
const {
    getUserByEmail,
    getUserById,
    getUserIds,
    setUserData,
    getUser,
    resetUserPassword
} = require("../../models/users");

module.exports = {
    register: (req, res) => {
        const user_id = uuidv4();
        db.query(getUserIds, (err, data) => {
            if (err) return res.json(err);
            for (let i = 0; i < data.length; i++) {
                if (data[i].user_id === user_id) {
                    return res.json("User ID already exists");
                }
            };
            db.query(getUser, [req.body.email, req.body.first_name, req.body.last_name], (err, data) => {
                if (err) return res.json(err);
                if (data.length) return res.json("User already exists");
                if (req.body.password.length < 8) return res.status(403).json("Password must be at least 8 characters long!");

                const salt = bcrypt.genSaltSync(10);
                const hash = bcrypt.hashSync(req.body.password, salt);

                const values = [
                    user_id,
                    req.body.first_name,
                    req.body.last_name,
                    req.body.email,
                    hash
                ];

                db.query(setUserData, [values], (err) => {
                    if (err) return res.json(err);
                    return res.status(200).json("User registered");
                });
            });
        });
    },
    login: (req, res) => {
        db.query(getUserByEmail, [req.body.email], (err, data) => {
            if (err) return res.json(err);
            if (data.length === 0) return res.status(404).json("User not found");

            const isPassword = bcrypt.compareSync(req.body.password, data[0].password);
            if (!isPassword) return res.status(400).json("Invalid user or password");

            const token = jwt.sign({ id: data[0].id }, process.env.SECRET);
            const { password, ...other } = data[0];

            res.cookie("access_token", token, {
                httpOnly: true
            }).status(200).json(other);
        });
    },
    logout: (req, res) => {
        res.clearCookie("access_token", {
            sameSite: "none",
            secure: true
        }).status(200).json("User logged out");
    },
    resetPassword: (req, res) => {
        try {
            db.query(getUserById, [req.params.id], (err, data) => {
                if (err) return res.json(err);
                const { id, token } = req.params;
                if (id !== data[0].user_id) return res.status(403).json("Invalid user ID");
                if (req.body.newPassword !== req.body.confirmPassword) return res.status(400).json("Passwords do not match");
                if (!req.body.newPassword || !req.body.confirmPassword) return res.status(400).json("Password is required");

                jwt.verify(token, process.env.SECRET, (err) => {
                    if (err) return res.status(403).json("Invalid token");
                    
                    const salt = bcrypt.genSaltSync(10);
                    const hash = bcrypt.hashSync(req.body.newPassword, salt);

                    db.query(resetUserPassword, [hash, data[0].id], (err) => {
                        if (err) return res.json(err);
                        return res.status(200).json("Password reset");
                    });
                });
            });
        } catch (err) {
            console.log(err);
        };
    },
    forgotPassword: (req, res) => {
        try {
            db.query(getUserByEmail, [req.body.email], (err, data) => {
                if (err) return res.json(err);
                if (data.length === 0) return res.status(404).json("User not found");
                const token = jwt.sign({ id: data[0].user_id }, process.env.SECRET, { expiresIn: "1h" });

                const values = [
                    data[0].first_name,
                    `http://localhost:3000/reset/${data[0].user_id}/${token}`
                ];

                sendEmail("reset-password", req.body.email, "Password Reset", values);
            });
        } catch (err) {
            console.log(err);
        };
    },
    test: (req, res) => {
        try {
            console.log("Test route is working");
            res.json("Test route works on heroku too");
        } catch (err) {
            console.log(err);
        };
    }
};