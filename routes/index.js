const router = require("express").Router();
const apiRoutes = require("./api");

console.log("Registering API routes", apiRoutes);
router.use("/api", apiRoutes);

module.exports = router;