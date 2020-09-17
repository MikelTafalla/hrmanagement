const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeChangeFormSchema = new Schema({
    //Section A
    employee_type: {
        typed: String,
    },
    employee_classification: {
        type: String
    },
    position: {
        type: String
    },
    incumbent: {
        type: String
    },
    employee_name: {
        type: String
    },
    employeeId: {
        type: String
    },
    typeOfChange: {
        type: String
    },
    change_reasons: {
        type: String
    },
    effective_day: {
        type: String
    },
    effective_month: {
        type: String
    },
    effective_year: {
        type: String
    },
    current_title: {
        type: String
    },
    new_title: {
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
    //Section B
    haypoint_current: {
        type: String,
    },
    haypoint_proposed: {
        type: String,
    },
    currency_current: {
        type: String,
    },
    currency_proposed: {
        type: String,
    },
    baseSalary_current: {
        type: String,
    },
    baseSalary_proposed: {
        type: String,
    },
    vehicle_current: {
        type: String,
    },
    vehicle_proposed: {
        type: String,
    },
    sti_current: {
        type: String,
    },
    sti_proposed: {
        type: String,
    },
    superannuationB_current: {
        type: String,
    },
    superannuationB_proposed: {
        type: String,
    },
    reward_current: {
        type: String,
    },
    reward_proposed: {
        type: String,
    },
    percentage_change: {
        type: Number
    },
    other_allowances_B: {
        type: String
    },
    hoursB_monday: {
        type: String,
    },
    hoursB_tuesday: {
        type: String,
    },
    hoursB_wednesday: {
        type: String,
    },
    hoursB_thursday: {
        type: String,
    },
    hoursB_friday: {
        type: String,
    },
    hoursB_saturday: {
        type: String,
    },
    hoursB_sunday: {
        type: String,
    },
    total_hours_B: {
        type: Number
    },
    // Section C
    employee_agreement_current: {
        type: String,
    },
    employee_agreement_proposed: {
        type: String,
    },
    classification_current: {
        type: String,
    },
    classification_proposed: {
        type: String,
    },
    team_leader_allowance: {
        type: String
    },
    leading_hand_allowance: {
        type: String
    },
    dual_trade_allowance: {
        type: String
    },
    other_allowances_C: {
        type: String
    },
    work_schedule: {
        type: String
    },
    shift: {
        type: String
    },
    previous_incumbent: {
        type: String
    },
    hoursC_monday: {
        type: String,
    },
    hoursC_tuesday: {
        type: String,
    },
    hoursC_wednesday: {
        type: String,
    },
    hoursC_thursday: {
        type: String,
    },
    hoursC_friday: {
        type: String,
    },
    hoursC_saturday: {
        type: String,
    },
    hoursC_sunday: {
        type: String,
    },
    total_hours_C: {
        type: Number
    },
    //Section D
    change_justification: {
        type: String
    },
    submitted_by_name: {
        type: String,
    },
    submitted_by_position: {
        type: String,
    },
    submission_day: {
        type: String,
    },
    submission_month: {
        type: String,
    },
    submission_year: {
        type: String,
    },
    hr_name: {
        type: String,
    },
    hr_signature: {
        type: String,
    },
    first_approver_name: {
        type: String,
    },
    first_approver_signature: {
        type: String,
    },
    second_approver_name: {
        type: String,
    },
    second_approver_signature: {
        type: String,
    },
    hr_central_name: {
        type: String,
    },
    hr_central_signature: {
        type: String,
    },
    payroll_name: {
        type: String,
    },
    payroll_signature: {
        type: String,
    },
    payroll_number: {
        type: String,
    },
    payroll_position: {
        type: String,
    },
    template: {
        type: String
    },
    superannuation_D: {
        type: String
    },
    visa_check: {
        type: String
    },
    comments: {
        type: String
    },
    open: {
        type: Boolean
    }
});

const EmployeeChangeForm = mongoose.model("EmployeeChangeForm", EmployeeChangeFormSchema);

module.exports = EmployeeChangeForm;
