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
  "https://www.zcomm.store",
  "https://www.allweatherhiviz.com",
  "https://www.dxnheadwear.com",
  "https://www.fishlifeusa.com",
  "https://www.pbrcorpshop.com",
  "http://localhost:3000",
  "http://localhost:3001",
  "https://z-comm-7cc9724e1fa7.herokuapp.com"
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
      "connect-src": [
        "'self'",
        "www.zcomm.store",
        "www.allweatherhiviz.com",
        "www.dxnheadwear.com",
        "www.fishlifeusa.com",
        "www.pbrcorpshop.com",
        "www.formbackend.com",
        "monorail-edge.shopifysvc.com",
        "ct-schools-store.myshopify.com",
        "bfb312-ir.myshopify.com"
      ],
      "img-src": [
        "'self'",
        "zuse-inc-bucket.s3.amazonaws.com",
        "zuse-inc-bucket.s3.us-east-1.amazonaws.com",
        "zcomm-site.s3.us-east-1.amazonaws.com",
        "cdn.shopify.com",
        "sdks.shopifycdn.com",
        "fastly.picsum.photos",
        "picsum.photos"
      ],
      "form-action": [
        "'self'",
        "www.zcomm.store",
        "www.allweatherhiviz.com",
        "www.dxnheadwear.com",
        "www.fishlifeusa.com",
        "www.pbrcorpshop.com",
        "www.formbackend.com"
      ],
      "script-src": [
        "'self'",
        (req, res) => `'nonce-${res.locals.cspNonce}'`,
        "ct-schools-store.myshopify.com",
        "bfb312-ir.myshopify.com",
        "sdks.shopifycdn.com",
        "ajax.googleapis.com",
        "js.stripe.com"
      ]
    }
  }
}));

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    return res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });
}

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});