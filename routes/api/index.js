const router = require("express").Router();
const authRoutes = require("./authRoutes");
const reviewRoutes = require("./reviewRoutes");
const collectionRoutes = require("./collectionRoutes");
const contactRoutes = require("./contactRoutes");
const uploadRoutes = require("./uploadRoutes");

console.log("registering", authRoutes);
router.use("/auth", authRoutes);
console.log("registering", reviewRoutes);
router.use("/reviews", reviewRoutes);
console.log("registering", collectionRoutes);
router.use("/collections", collectionRoutes);
console.log("registering", contactRoutes);
router.use("/contact", contactRoutes);
console.log("registering", uploadRoutes);
router.use("/upload", uploadRoutes);

module.exports = router;