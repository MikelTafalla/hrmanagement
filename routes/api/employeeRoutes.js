const router = require("express").Router();
const employeeChangeFormController = require("../../controllers/employeeChangeFormController");
const separationFormController = require("../../controllers/separationFormController");

router.route("/employeechangeForm/:id")
    .get(employeeChangeFormController.findById)
    .put(employeeChangeFormController.update);

router.route("/newchangeform")
    .post(employeeChangeFormController.create);

router.route("/existingemployeenewform")
    .post(employeeChangeFormController.createExisting);

router.route("/employeedirectory")
    .get(employeeChangeFormController.findAll)

router.route("/employeedirectory/:username")
    .get(employeeChangeFormController.findRole);

router.route("/formlistpage/:id")
    .get(employeeChangeFormController.findReport);

router.route("/separationform")
    .post(separationFormController.createTerminationForm);

router.route("/terminationlistpage/:id")
    .get(separationFormController.findTermination);
    
module.exports = router;