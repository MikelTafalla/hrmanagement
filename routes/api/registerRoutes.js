const router = require("express").Router();
const registerRoutesController = require("../../controllers/registerRoutesController");

router.route("/register")
    .post(registerRoutesController.register);

module.exports = router;