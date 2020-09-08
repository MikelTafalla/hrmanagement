const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeChangeFormSchema = new Schema({
    //Section A
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
        type: Number
    },
    typeOfChange: {
        type: String
    },
    change_reasons: {
        type: String
    },
    effective_date: {
        day: Number,
        month: Number,
        year: Number
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
    haypoint: {
        current: Number,
        proposed: Number,
    },
    currency: {
        current: String,
        proposed: String
    },
    base_salary: {
        current: Number,
        proposed: Number
    },
    vehicle: {
        current: Number,
        proposed: Number
    },
    target_sti: {
        current: Number,
        proposed: Number
    },
    superannuation_B: {
        current: String,
        proposed: String
    },
    fixed_annual_reward: {
        current: Number,
        proposed: Number
    },
    percentage_change: {
        type: Number
    },
    other_allowances_B: {
        type: String
    },
    hours_per_day_B: {
        monday: Number,
        tuesday: Number,
        wednesday: Number,
        thursday: Number,
        friday: Number,
        saturday: Number,
        sunday: Number
    },
    total_hours_B: {
        type: Number
    },
    // Section C
    employee_agreement: {
        current: String,
        proposed: String
    },
    classification: {
        current: String,
        proposed: String
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
    previous_incumbent: {
        type: String
    },
    hours_per_day_C: {
        monday: Number,
        tuesday: Number,
        wednesday: Number,
        thursday: Number,
        friday: Number,
        saturday: Number,
        sunday: Number
    },
    total_hours_C: {
        type: Number
    },
    //Section D
    change_justification: {
        type: String
    },
    submitted_by: {
        name: String,
        position: String
    },
    submition_date: {
        day: Number,
        month: Number,
        year: Number
    },
    hr_name: {
        name: String,
        signature: String
    },
    first_approver: {
        name: String,
        signature: String
    },
    second_approver: {
        name: String,
        signature: String
    },
    hr_central: {
        name: String,
        signature: String
    },
    payroll: {
        name: String,
        signature: String,
        number: Number,
        position: String
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
    }

});

const EmployeeChangeForm = mongoose.model("EmployeeChangeForm", EmployeeChangeFormSchema);

module.exports = EmployeeChangeForm;
