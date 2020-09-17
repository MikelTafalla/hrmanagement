const router = require("express").Router();
const employeeChangeFormController = require("../../controllers/employeeChangeFormController");



router.route("/changeform/:id")
    .get(employeeChangeFormController.findById)
    .put(employeeChangeFormController.update);


router.route("/newform")
    .post(employeeChangeFormController.create);

router.route("/existingemployeenewform")
    .post(employeeChangeFormController.createExisting);

router.route("/employeedirectory")
    .get(employeeChangeFormController.findAll);

router.route("/formlistpage/:id")
    .get(employeeChangeFormController.findReport);

module.exports = router;