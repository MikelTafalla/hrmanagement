//eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SectionA from "../../components/sectionA/SectionA";
import SectionB from "../../components/sectionB/SectionB";
import SectionC from "../../components/sectionC/SectionC";
import SectionD from "../../components/sectionD/SectionD";
import API from "../../utils/API"
import { Container } from "semantic-ui-react";

function EmployeeChangeForm() {
  const [form, setForm] = useState({});

  useEffect(() => {
    populateForm("5f599ddb2bb29c2c66ba7d7a");
  }, [])

  const populateForm = (id) => {
    API.findById(id)
      .then(res => setForm(res.data))
      .catch(err => console.log(err));
  }
console.log(form)

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
