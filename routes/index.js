const path = require("path");
const router = require("express").Router();
const employeeRoutes = require("./api/employeeRoutes");
// API Routes
router.use("/api", employeeRoutes);
// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build"));
});
module.exports = router;

//testing