const router = require("express").Router();
const employeeChangeFormController = require("../../controllers/employeeChangeFormController")



router.route("/changeform/:id")
    .get(employeeChangeFormController.findById);



module.exports = router;