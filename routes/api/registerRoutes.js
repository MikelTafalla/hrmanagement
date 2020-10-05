const router = require("express").Router();
const registerRoutesController = require("../../controllers/registerRoutesController");

router.route("/")
    .post(registerRoutesController.signup);

module.exports = router;