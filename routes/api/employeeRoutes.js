const router = require("express").Router();
const employeeChangeFormController = require("../../controllers/employeeChangeFormController");
const separationFormController = require("../../controllers/separationFormController");
const newHireFormController = require("../../controllers/newHireFormController");

router.route("/employeechangeForm/:id")
    .get(employeeChangeFormController.findById)
    .put(employeeChangeFormController.update);

router.route("/existingemployeenewform")
    .post(employeeChangeFormController.createExisting);

    
router.route("/employeedirectory/:username")
    .get(employeeChangeFormController.findRole);

router.route("/formlistpage/:id")
    .get(employeeChangeFormController.findReport);

router.route("/separationform")
    .post(separationFormController.createTerminationForm);

router.route("/terminationlistpage/:id")
    .get(separationFormController.findTermination);

router.route("/existingseparationform/:id")
    .get(separationFormController.findterminatedemployee)
    .put(separationFormController.updateTerminationForm);

router.route("/newhirecontinue/:id")
    .get(newHireFormController.findNewHire)
    .put(newHireFormController.updateNewHire);

router.route("/newhirelistpage/:id")
    .get(newHireFormController.findHiringReport)

router.route("/employeedirectory")
    .get(newHireFormController.findAll)

router.route("/newhireform")
    .post(newHireFormController.postNewHire);
module.exports = router;