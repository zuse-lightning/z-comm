require("dotenv").config();
console.log(`NODE_ENV at start: ${process.env.NODE_ENV}`);
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const crypto = require("crypto");
const helmet = require("helmet");

const app = express();
const server = require("http").createServer(app);
const path = require("path");
const routes = require("./routes");
const allowedOrigins = [
  "https://www.zusetestinggrounds.com", 
  "http://localhost:3000", 
  "http://localhost:3001", 
  "https://zuse-testing-grounds-3ca8bc72f89d.herokuapp.com"
];
const PORT = process.env.PORT || 3001;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
  origin: (origin, callback) => {
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Origin not allowed by CORS"));
    }
  },
  credentials: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use((req, res, next) => {
  res.locals.cspNonce = crypto.randomBytes(32).toString("hex");
  next();
});
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      ...helmet.contentSecurityPolicy.getDefaultDirectives(),
      "connect-src": ["'self'", "www.zusetestinggrounds.com"],
      "img-src": ["'self'", "zuse-inc-bucket.s3.amazonaws.com", "zuse-inc-bucket.s3.us-east-1.amazonaws.com"],
      "script-src": [
        "'self'", 
        "ct-schools-store.myshopify.com", 
        "sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js",
        (req, res) => `'nonce-${res.locals.cspNonce}'`
      ]
    }
  }
}));

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    return res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
};

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});