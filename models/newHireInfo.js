const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NewHireFormSchema = new Schema({

    employee_type: {
        type: String
    },
    employee_classification: {
        type: String
    },
    position: {
        type: String
    },
    positionNumber: {
        type: String
    },
    newRoleJustification: {
        type: String
    },
    previousIncumbent: {
        type: String
    },
    employee_name: {
        type: String
    },
    employeeId: {
        type: String
    },
    title: {
        type: String
    },
    internalCandidate: {
        type: String
    },
    nameInternalCandidate: {
        type: String
    },
    work_country: {
        type: String
    },
    location: {
        type: String
    },
    function: {
        type: String
    },
    department: {
        type: String
    },
    manager: {
        type: String
    },
    salary_cost: {
        type: String
    },
    travel_cost: {
        type: String
    },
    business_unit: {
        type: String
    },
    haypoint: {
        type: String
    },
    currency: {
        type: String
    },
    vehicleAllowance: {
        type: String
    },
    midPoint: {
        type: String
    },
    target_STI: {
        type: String
    },
    maxPoint: {
        type: String
    },
    otherAllowances: {
        type: String
    },
    baseWage: {
        type: String
    },
    employeeAgreement: {
        type: String
    },
    classification: {
        type: String
    },
    leaderAllowance: {
        type: Boolean,
        default: false
    },
    handAllowance: {
        type: Boolean,
        default: false
    },
    tradeAllowance: {
        type: Boolean,
        default: false
    },
    otherAllowancesC: {
        type: String
    },
    shiftType: {
        type: String
    },
    previousIncumbentC: {
        type: String
    },
    comments: {
        type: String
    },
    submittedBy: {
        type: String
    },
    day: {
        type: String
    },
    month: {
        type: String
    },
    year: {
        type: String
    },
    position: {
        type: String
    },
    manager_partner: {
        type: String
    },
    mpSignature: {
        type: String
    },
    approverOne: {
        type: String
    },
    signatureOne: {
        type: String
    },
    approverTwo: {
        type: String
    },
    signatureTwo: {
        type: String
    },
    approverThree: {
        type: String
    },
    signatureThree: {
        type: String
    },
    approverFour: {
        type: String
    },
    signatureFour: {
        type: String
    },
    approverFive: {
        type: String
    },
    signatureFive: {
        type: String
    },
    hrCentral: {
        type: String
    },
    hrCentralSignature: {
        type: String
    },
    payroll: {
        type: String
    },
    payrollSignature: {
        type: String
    },
    newPosition: {
        type: String
    },
    uID: {
        type: String
    },
    employeeSubgroup: {
        type: String
    },
    commentsTwo: {
        type: String
    },
    open: {
        type: Boolean,
        default: true
    }
});

const NewHireForm = mongoose.model("NewHireForm", NewHireFormSchema);

module.exports = NewHireForm;
