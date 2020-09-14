const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/hrmanagement"
);

const employeeChangeFormSeed = [
  {
    employee_type: "salaried",
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
      current: "4%",
      proposed: "3%"
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
      proposed: "C8"
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
    submission_date:
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
      position: 14
    },
    template: "Letter Template",
    superannuation_D: "DB Fund",
    visa_check: "Yes",
    comments: "No Comments",
    open: false


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


//   {
//       "employee_type": "salaried",
//   "employee_classification": "permanent",
//   "position": "existing position",
//   "incumbent": "San Judas Tadeo",
//   "employee_name": "Mikel Tafalla",
//   "employeeId": 7891011,
//   "typeOfChange": "Promotion",
//   "change_reasons": "The Best",
//   "effective_date": {
//       "day": 25,
//       "month": "December",
//       "year": 2020
//     },
//   "current_title": "Software Master",
//   "new_title": "Senior Software Architect",
//   "work_country": "New Zealand",
//   "location": "Auckland",
//   "function": "Computer Science",
//   "department": "Engineering",
//   "manager": "Shaleem Malik",
//   "salary_cost": "15000",
//   "travel_cost": "10000",
//   "business_unit": "Regional",
//     "haypoint":
//   {
//     "current": 65000,
//     "proposed": 93000
//   },
//   "currency":
//   {
//     "current": "USD",
//     "proposed": "USD"
//   },
//   "base_salary":
//   {
//     "current": 70000,
//     "proposed": 100000
//   },
//   "vehicle":
//   {
//     "current": 5000,
//     "proposed": 20000
//   },
//   "target_sti":
//   {
//     "current": 15,
//     "proposed": 25
//   },
//   "superannuation_B":
//   {
//     "current": "4%",
//     "proposed": "6%"
//   },
//   "fixed_annual_reward":
//   {
//     "current": 150,
//     "proposed": 2000
//   },
//   "percentage_change": 15,
//   "other_allowances_B": "N/A",
//   "hours_per_day_B":
//   {
//     "monday": 8,
//     "tuesday": 8,
//     "wednesday": 8,
//     "thursday": 8,
//     "friday": 8,
//     "saturday": 0,
//     "sunday": 0
//   },
//   "total_hours_B": 40,
//   "change_justification": "He's the best!",
//   "submitted_by":
//   {
//     "name": "Chris 'El Grande' Conquistador",
//     "position": "Owner"
//   },
//   "submission_date":
//   {
//     "day": 2,
//     "month": 14,
//     "year": 2020
//   },
//   "hr_name":
//   {
//     "name": "Pablo 'Escobar' Vazquez",
//     "signature": "PV"
//   },
//   "first_approver":
//   {
//     "name": "Lilo Vasquez",
//     "signature": "LV"
//   },
//   "second_approver":
//   {
//     "name": "Tasha Vilorant",
//     "signature": "TV"
//   },
//   "hr_central":
//   {
//     "name": "Kevin Choi",
//     "signature": "KC"
//   },
//   "payroll":
//   {
//     "name": "Omar Patel",
//     "signature": "OP",
//     "number": 11235,
//     "position": 10
//   },
//   "template": "Letter Template",
//   "superannuation_D": "Retirement Fund",
//   "visa_check": "Maybe",
//   "comments": "Very good looking!",
//   "open": true
// }