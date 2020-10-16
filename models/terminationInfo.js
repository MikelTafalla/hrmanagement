const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TerminationFormSchema = new Schema({

    employee_name: {
        type: String
    },
    employee_id: {
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
    separationType: {
        type: String
    },
    reasonSeparation: {
        type: String
    },
    lastWorkDay: {
        type: String
    },
    lastWorkMonth: {
        type: String
    },
    lastEmploymentDay: {
        type: String
    },
    lastEmploymentMonth: {
        type: String
    },
    fullNoticePeriod: {
        type: String
    },
    employeeBackfilled: {
        type: String
    },
    employeeManager: {
        type: String
    },
    paymentOption: {
        type: String
    },
    submissionDay: {
        type: String
    },
    submissionMonth: {
        type: String
    },
    lastWorkYear: {
        type: String
    },
    lastEmploymentYear: {
        type: String
    },
    reportUponExit: {
        type: String
    },
    additionalComments: {
        type: String
    },
    submitted: {
        type: String
    },
    submissionYear: {
        type: String
    },
    submittedByPosition: {
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
    hrCentral: {
        type: String
    },
    payrollNumber: {
        type: String
    },
    hrSignature: {
        type: String
    },
    positionNumber: {
        type: String
    },
    payrollName: {
        type: String
    },
    payrollSignature: {
        type: String
    },
    comments: {
        type: String
    },
    open: {
        type: Boolean,
        default: true
    }
});

const TerminationForm = mongoose.model("terminationForm", TerminationFormSchema);

module.exports = TerminationForm;
