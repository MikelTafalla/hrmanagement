//eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SectionA from "../../components/sectionA/SectionA";
import SectionB from "../../components/sectionB/SectionB";
import SectionC from "../../components/sectionC/SectionC";
import SectionD from "../../components/sectionD/SectionD";
import API from "../../utils/API";
import { Container } from "semantic-ui-react";
import Countries from "../../components/sectionA/countries.json";

function EmployeeChangeForm() {
  //Store information from database
  const [form, setForm] = useState({});
  //Store the state related to the country and location/city from section A. So we can access them both on SectionA and C
  const [activeLocation, setActiveLocation] = useState([]);
  const[country, setCountry] = useState("");
  const[city, setCity] = useState("");
  //Activates to retrive information from the API/DB
  useEffect(() => {
    populateForm("5f5ebfd51d0c97257d20d68a");
  }, [])

  const populateForm = (id) => {
    API.findById(id)
      .then(res => setForm(res.data))
      .catch(err => console.log(err));
  }
  //Logic to get dropdown list display the location from the database as selected on page load
  const citiesToDisplay = []
  let cities = []
  const place = !country ? form.work_country : country
  for (let i = 1; i < Countries.length; i++){
    if (place === Countries[i].name){
    cities = Countries[i].cities
    }
  }
  for(let j = 0; j < cities.length; j++){
    if(form.location === cities[j]){
      citiesToDisplay.unshift(cities[j])
    }
    citiesToDisplay.push(cities[j])
  }
  const unique = [...new Set(citiesToDisplay)]
  //It gets activated onChange from dropdown on SectionA
  const handleLocation = (selectedCountry) => {
    setCountry(selectedCountry)
    
    for (let i = 0; i < Countries.length; i++) {
      if (selectedCountry === Countries[i].value) {
        return setActiveLocation(Countries[i].cities)
      }
    }
  }
  //It gets activated onChange from dropdown on SectionA
  const handleCity = (selectedCity) => {
    setCity(selectedCity)
  }

  return (
    
    <Container>
      <div>
        <Header
          title="Employee Change Form"
          mandatory="All fields are considered mandatory"
          questions="Questions? Need Help? Contact the O-I HR Central Team"
          phone="Australia +61 3 9326 2525"
          country="New Zealand and Singapore 2525"
          message="Please use this form if an Employee is increasing / decreasing their grade and salary or classification and wage rate. For more information, please refer to the form definitions outlined on the HR Central Sharepoint"
          instruction1="Please ensure you have the following information before attempting to fill the form:"
          instruction1A="a. Organization Structure Data"
          instruction1B="b. Obtain Hay point data from HR central or Remuneration and Benefits"
          instruction2="Upon completion of this form, please submit this via HR.CENTRAL.AP@O-I.COM to initiate approvals"
          salariedChange="Salaried Change - Complete Section A, Section B and Section D"
          wagedChange="Waged Change - Complete Section A, Section C and Section D"
        />

        <br />
        <SectionA
          sectionA="Section A | Organisational Structure"
          employee_type={form.employee_type}
          employee_classification={form.employee_classification}
          position={form.position}
          employee_name={form.employee_name}
          employeeId={form.employeeId}
          typeOfChange={form.typeOfChange}
          change_reasons={form.change_reasons}
          effective_date={form.effective_date}
          current_title={form.current_title}
          new_title={form.new_title}
          work_country={form.work_country}
          location={form.location}
          function={form.function}
          department={form.department}
          manager={form.manager}
          salary_cost={form.salary_cost}
          travel_cost={form.travel_cost}
          business_unit={form.business_unit}
          handleLocation={handleLocation}
          handleCity={handleCity}
          unique={unique}
          activeLocation={activeLocation}
          country={country}
        />
        <br />
        <SectionB
          SectionB="Section B | Compensation (Salaried)"
          haypoint={form.haypoint}
          currency={form.currency}
          base_salary={form.base_salary}
          vehicle={form.vehicle}
          target_sti={form.target_sti}
          superannuation_B={form.superannuation_B}
          fixed_annual_reward={form.fixed_annual_reward}
          percentage_change={form.percentage_change}
          other_allowances_B={form.other_allowances_B}
          hours_per_day_B={form.hours_per_day_B}
          total_hours_B={form.total_hours_B}
        />
        <br />
        <SectionC
          sectionC="Section C | COMPENSATION (waged employees)"
          employee_agreement={form.employee_agreement}
          classification={form.classification}
          team_leader_allowance={form.team_leader_allowance}
          leading_hand_allowance={form.leading_hand_allowance}
          dual_trade_allowance={form.dual_trade_allowance}
          other_allowances_C={form.other_allowances_C}
          work_schedule={form.work_schedule}
          previous_incumbent={form.previous_incumbent}
          hours_per_day_C={form.hours_per_day_C}
          total_hours_C={form.total_hours_C}
          activeLocation={activeLocation}
          DBlocation={form.location}
          city={city}
          country={country}
          
        />
        <SectionD
          sectionD="Approvals - Section D"
          change_justification={form.change_justification}
          submitted_by={form.submitted_by}
          submition_date={form.submition_date}
          hr_name={form.hr_name}
          first_approver={form.first_approver}
          second_approver={form.second_approver}
          hr_central={form.hr_central}
          payroll={form.payroll}
          template={form.template}
          superannuation_D={form.superannuation_D}
          visa_check={form.visa_check}
          comments={form.comments}
        />
      </div>
    </Container>
    
  );
}
export default EmployeeChangeForm;
