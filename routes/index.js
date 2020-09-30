const path = require("path");
const router = require("express").Router();
const employeeRoutes = require("./api/employeeRoutes");
const registerRoutes = require("./api/registerRoutes");
// API Routes
router.use("/api", employeeRoutes);
router.use("/api", registerRoutes);
// If no API routes are hit, send the React app
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});
module.exports = router;

//testing