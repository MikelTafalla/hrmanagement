const router = require("express").Router();
const loginRoutesController = require("../../controllers/loginRoutesController");
const registerRoutesController = require("../../controllers/registerRoutesController");

router.route("/register")
    .post(registerRoutesController.register);
router.route("/")
    .post(loginRoutesController.login)

module.exports = router;