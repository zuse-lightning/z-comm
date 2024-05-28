require("dotenv").config();
const express = require("express");
const cors = require("cors");
const AWS = require("aws-sdk");

const app = express();
const server = require("http").createServer(app);
const path = require("path");
const PORT = process.env.PORT || 5000;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    return res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
};

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});