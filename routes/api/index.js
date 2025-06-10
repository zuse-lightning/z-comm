const router = require("express").Router();
const authRoutes = require("./authRoutes");
const reviewRoutes = require("./reviewRoutes");
const collectionRoutes = require("./collectionRoutes");
const contactRoutes = require("./contactRoutes");
const uploadRoutes = require("./uploadRoutes");

router.use("/auth", authRoutes);
router.use("/reviews", reviewRoutes);
router.use("/collections", collectionRoutes);
router.use("/contact", contactRoutes);
router.use("/upload", uploadRoutes);

module.exports = router;