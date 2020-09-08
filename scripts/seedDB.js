const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hrmanagement" 
);

const employeeChangeFormSeed = [
  {
    employee_classification: "permanent",
    position: "existing position",
    incumbent: "Maria Los Angeles",
    employee_name: "Chris Salgado",
    employeeId: 123456,
    typeOfChange: "Change in Pay",
    change_reasons: "He is pretty",
    effective_date: 
      {
        day: 02,
        month: 05,
        year: 2020
      },  
    current_title: "Software engineer",
    new_title: "Senior Software Architect",
    work_country: "Australia",
    location: "Adelaide",
    function: "Information Technology",
    department: "Engineer",
    manager: "Lilo Valdez",
    salary_cost: "12000",
    travel_cost: "10000",
    business_unit: "ANZ",
//Section B
    haypoint: 
      {
        current: 56000,
        proposed: 80000
      },
    currency: 
      {
        current: "AUD",
        proposed: "AUD"
      },
    base_salary: 
      {
        current: 70000,
        proposed: 100000
      },
    vehicle: 
      {
        current: 10000,
        proposed: 15000
      },
    target_sti: 
      {
        current: 50,
        proposed: 56
      },
    superannuation_B: 
      {
        current: "N/A",
        proposed: "N/A"
      },
    fixed_annual_reward: 
      {
        current: 100,
        proposed: 1000
      },
    percentage_change: 25,
    other_allowances_B: "N/A",
    hours_per_day_B: 
      {
        monday: 8,
        tuesday: 8,
        wednesday: 8,
        thursday: 8,
        friday: 8,
        saturday: 0,
        sunday: 0
      },
    total_hours_B: 40, 
// Section C
    employee_agreement: 
      {
        current: "Glassworker_Rates_A",
        proposed: "Maintenance_Rates_Metal_Trades_Mechanical_A"
      },
    classification: 
      {
        current: "G1",
        proposed: "G2"
      },
    team_leader_allowance: "N/A",
    leading_hand_allowance: "N/A",
    dual_trade_allowance: "N/A",
    other_allowances_C: "N/A",
    work_schedule: "Day",
    previous_incumbent: "N/A",
    hours_per_day_C: 
      {
        monday: 8,
        tuesday: 8,
        wednesday: 8,
        thursday: 8,
        friday: 8,
        saturday: 0,
        sunday: 0
      },
    total_hours_C: 40,
//Section D
    change_justification: "Just because",
    submitted_by: 
      {
        name: "Mikel Rodriguez",
        position: "HR"
      },
    submition_date: 
      {
        day: 07,
        month: 09,
        year: 2020
      },
    hr_name: 
      {
        name: "Shaleem Malik",
        signature: "SM"
      },
    first_approver: 
      {
        name: "Pablo Vazquez",
        signature: "PV"
      },
    second_approver: 
      {
        name: "Omar Patel",
        signature: "OP"
      },
    hr_central: 
      {
        name: "Travis Smith",
        signature: "TS"
      },
    payroll: 
      {
        name: "Natasah Vilorant",
        signature: "NV",
        number: 888565,
        position: "Payroll Rep"
      },
    template: "Letter Template",
    superannuation_D: "DB Fund",
    visa_check: "Yes",
    comments: "No Comments"
  }
];

db.EmployeeChangeForm
  .remove({})
  .then(() => db.EmployeeChangeForm.collection.insertMany(employeeChangeFormSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });