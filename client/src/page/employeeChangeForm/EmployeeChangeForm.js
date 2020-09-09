//eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SectionA from "../../components/sectionA/SectionA";
import SectionB from "../../components/sectionB/SectionB";
import SectionC from "../../components/sectionC/SectionC";
import SectionD from "../../components/sectionD/SectionD";
import API from "../../utils/API"

function EmployeeChangeForm() {
  const [form, setForm] = useState({});


  useEffect(() => {
    populateForm("5f57eb32f88f7412400b3401");
  }, [])

  const populateForm = (id) => {
    API.findById(id)
      .then(res => setForm(res.data))
      .catch(err => console.log(err));
  }
  console.log(form);

  return (
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
      <SectionB SectionB="Section B | Compensation (Salaried)" />
      <br />
      <SectionC sectionC="Section C | COMPENSATION (waged employees)" />
      <SectionD sectionD="Approvals - Section D" />
    </div>
  );
}
export default EmployeeChangeForm;
