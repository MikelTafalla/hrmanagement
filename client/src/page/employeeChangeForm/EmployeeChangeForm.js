//eslint-disable-next-line
import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import SectionA from "../../components/sectionA/SectionA";
import SectionB from "../../components/sectionB/SectionB";
import SectionC from "../../components/sectionC/SectionC";
import SectionD from "../../components/sectionD/SectionD";
import API from "../../utils/API";
import { Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Countries from "../../components/sectionA/countries.json";
import Agreement from "../../components/sectionC/agreement.json";
import Classification from "../../components/sectionC/classification.json";
import "./employeechange.css";
////start changes

function EmployeeChangeForm() {
  //Store information from database
  const [form, setForm] = useState({});

  //States for section C
  const [currentAgreement, setCurrentAgreement] = useState([]);
  const [proposedAgreement, setProposedAgreement] = useState([{}]);
  const [currentClassification, setCurrentClassification] = useState([]);
  const [proposedClassification, setProposedClassification] = useState([]);

  //get Role value from localStorage to conditionally render buttons
  const role = JSON.parse(localStorage.getItem("Role"))

  //Activates to retrive information from the API/DB
  const idLSupdate = JSON.parse(localStorage.getItem("DBid"))
  useEffect(() => {
    const idLocalStorage = JSON.parse(localStorage.getItem("DBid"))
    populateForm(idLocalStorage);
  }, [])

  const populateForm = (id) => {
    API.findById(id)
      .then(res => setForm({
        open: res.data.open,
        employee_type: res.data.employee_type,
        employee_classification: res.data.employee_classification,
        position: res.data.position,
        incumbent: res.data.incumbent,
        employee_name: res.data.employee_name,
        employeeId: res.data.employeeId,
        typeOfChange: res.data.typeOfChange,
        change_reasons: res.data.change_reasons,
        effective_day: res.data.effective_day,
        effective_month: res.data.effective_month,
        effective_year: res.data.effective_year,
        current_title: res.data.current_title,
        new_title: res.data.new_title,
        work_country: res.data.work_country,
        location: res.data.location,
        function: res.data.function,
        department: res.data.department,
        manager: res.data.manager,
        salary_cost: res.data.salary_cost,
        travel_cost: res.data.travel_cost,
        business_unit: res.data.business_unit,
        haypoint_current: res.data.haypoint_current,
        haypoint_proposed: res.data.haypoint_proposed,
        currency_current: res.data.currency_current,
        currency_proposed: res.data.currency_proposed,
        baseSalary_current: res.data.baseSalary_current,
        baseSalary_proposed: res.data.baseSalary_proposed,
        vehicle_current: res.data.vehicle_current,
        vehicle_proposed: res.data.vehicle_proposed,
        sti_current: res.data.sti_current,
        sti_proposed: res.data.sti_proposed,
        superannuationB_current: res.data.superannuationB_current,
        superannuationB_proposed: res.data.superannuationB_proposed,
        reward_current: res.data.reward_current,
        reward_proposed: res.data.reward_proposed,
        percentage_change: res.data.percentage_change,
        other_allowances_B: res.data.other_allowances_B,
        hoursB_monday: res.data.hoursB_monday,
        hoursB_tuesday: res.data.hoursB_tuesday,
        hoursB_wednesday: res.data.hoursB_wednesday,
        hoursB_thursday: res.data.hoursB_thursday,
        hoursB_friday: res.data.hoursB_friday,
        hoursB_saturday: res.data.hoursB_saturday,
        hoursB_sunday: res.data.hoursB_sunday,
        total_hours_B: res.data.total_hours_B,
        employee_agreement_current: res.data.employee_agreement_current,
        employee_agreement_proposed: res.data.employee_agreement_proposed,
        classification_current: res.data.classification_current,
        classification_proposed: res.data.classification_proposed,
        locationDB: res.data.location,
        team_leader_allowance: res.data.team_leader_allowance,
        leading_hand_allowance: res.data.leading_hand_allowance,
        dual_trade_allowance: res.data.dual_trade_allowance,
        other_allowances_C: res.data.other_allowances_C,
        work_schedule: res.data.work_schedule,
        shift: res.data.shift,
        hoursC_monday: res.data.hoursC_monday,
        hoursC_tuesday: res.data.hoursC_tuesday,
        hoursC_wednesday: res.data.hoursC_wednesday,
        hoursC_thursday: res.data.hoursC_thursday,
        hoursC_friday: res.data.hoursC_friday,
        hoursC_saturday: res.data.hoursC_saturday,
        hoursC_sunday: res.data.hoursC_sunday,
        total_hours_C: res.data.total_hours_C,
        change_justification: res.data.change_justification,
        submitted_by_name: res.data.submitted_by_name,
        submitted_by_position: res.data.submitted_by_position,
        submission_day: res.data.submission_day,
        submission_month: res.data.submission_month,
        submission_year: res.data.submission_year,
        hr_name: res.data.hr_name,
        hr_signature: res.data.hr_signature,
        first_approver_name: res.data.first_approver_name,
        first_approver_signature: res.data.first_approver_signature,
        second_approver_name: res.data.second_approver_name,
        second_approver_signature: res.data.second_approver_signature,
        hr_central_name: res.data.hr_central_name,
        hr_central_signature: res.data.hr_central_signature,
        payroll_name: res.data.payroll_name,
        payroll_signature: res.data.payroll_signature,
        payroll_number: res.data.payroll_number,
        payroll_position: res.data.payroll_position,
        template: res.data.template,
        superannuation_D: res.data.superannuation_D,
        visa_check: res.data_visa_check,
        comments: res.data.comments,

      }))
      .catch(err => console.log(err));
  }


  useEffect(() => {
    //Set only cities that have an agreement 
    const cities = ["Adelaide", "Brisbane", "Melbourne CBD", "Melbourne", "Sydney"];
    for (let i = 0; i < cities.length; i++) {
      if (form.location === cities[i]) {
        for (let j = 0; j < cities.length; j++) {
          if (cities[j] === form.location) {
            setCurrentAgreement(Agreement[j]);
            setProposedAgreement(Agreement[j])
          }
          if (form.location === "Melbourne CBD") {
            setCurrentClassification([]);
            setProposedClassification([])
          }
          if (form.work_country !== "Australia") {
            setCurrentClassification([]);
            setProposedClassification([])
          }
        }
      }
    }
  }, [form.work_country, form.location]);

  const updateForm = (id) => {
    API.update(id, form)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  //Function and conditional to render open or close form button
  const toggleFunction = (id) => {
    if (form.open === true) {
      closeForm(id)
    } else {
      openForm(id)
    }
  }
  const OpenClose = form.open === true ? "Close Form" : "Open Form"

  const closeForm = (id) => {
    form.open = false
    API.update(id, form)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
  const openForm = (id) => {
    form.open = true
    API.update(id, form)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
  //Create props for section A

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value.length > 0) {
      setForm({ ...form, [name]: value });
    } else { setForm({ ...form, [name]: value }) }
  }

  const handleDropdown = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  //Logic to get dropdown list display the location from the database as selected on page load
  const citiesToDisplay = []
  let cities = []
  const place = form.work_country
  for (let i = 1; i < Countries.length; i++) {
    if (place === Countries[i].name) {
      cities = Countries[i].cities
    }
  }
  for (let j = 0; j < cities.length; j++) {
    if (form.location === cities[j]) {
      citiesToDisplay.unshift(cities[j])
    }
    citiesToDisplay.push(cities[j])
  }
  const unique = [...new Set(citiesToDisplay)]

  ////Create props for section C
  const manageClassifications = () => {
    setCurrentClassification([]);
    setProposedClassification([])
  }

  const handleCurrentClassification = (selectedValue) => {
    //changes value of agreement current
    const { name, value } = selectedValue.target
    setForm({ ...form, [name]: value })

    Classification.forEach(element => {
      const item = element.agreement
      for (var i = 0; i < item.length; i++) {
        if (value === item[i].name) {
          return setCurrentClassification(item[i].classification)
        }
      }
    });
  }

  const handleProposedClassification = (selectedValue) => {
    //changes value of agreement proposed
    const { name, value } = selectedValue.target
    setForm({ ...form, [name]: value })
    Classification.forEach(element => {
      const item = element.agreement
      for (var i = 0; i < item.length; i++) {
        if (value === item[i].name) {
          return setProposedClassification(item[i].classification)
        }
      }
    });
  }

  //Start with an empty array to push all the agreements that correspond to the group where the agreement from the DB belongs to
  const agrCurrentDisplay = []
  console.log(form.employee_agreement_current)
  //We store the agreement from the database. Ternary needed to avoid load conflicts.
  const agrcurrentInDB = form.employee_agreement_current
  //Loop through the agreement JSON and store each agreement object to loop through that object on nested loop
  for (let i = 0; i < Agreement.length; i++) {
    let currentagr = Agreement[i]
    //Loop through nested array on agreement.json looking for a match to the database info
    for (let j = 0; j < currentagr.length; j++) {
      //when match is found, we push it as the first element of the array
      if (agrcurrentInDB === currentagr[j].name) {
        agrCurrentDisplay.unshift(currentagr[j].name)
      }
      else {
        agrCurrentDisplay.push(currentagr[j].name)
      }

    }

  }
  const agrCurrentUnique = [...new Set(agrCurrentDisplay)]

  //end of logic
  //Repeat the logic for agreement proposed and classificatio current and proposed

  //AGREEMENT PROPOSED
  const agrProposedDisplay = []
  const agrProposedInDB = form.employee_agreement_proposed
  for (let i = 0; i < Agreement.length; i++) {
    let proposedagr = Agreement[i]
    for (let j = 0; j < proposedagr.length; j++) {
      if (agrProposedInDB === proposedagr[j].name) {
        agrProposedDisplay.unshift(proposedagr[j].name)
      } else {
        agrProposedDisplay.push(proposedagr[j].name)
      }
    }

  }

  const agrProposedUnique = [...new Set(agrProposedDisplay)]
  //CLASSIFICATION CURRENT

  const classCurrentDisplay = []
  const classCurrentInDB = form.classification_current
  for (let i = 0; i < Classification.length; i++) {
    let currentClass = Classification[i].agreement
    for (let j = 0; j < currentClass.length; j++) {

      if (currentClass[j].name === agrcurrentInDB) {

        let currentClassArr = currentClass[j].classification
        for (let k = 0; k < currentClassArr.length; k++) {
          if (classCurrentInDB === currentClassArr[k]) {
            classCurrentDisplay.unshift(currentClassArr[k])
          } else {
            classCurrentDisplay.push(currentClassArr[k])
          }
        }
      }
    }

  }

  const classCurrentUnique = [...new Set(classCurrentDisplay)]

  //CLASSIFICATION PROPOSED

  const classProposedDisplay = []
  const classProposedInDB = form.classification_proposed
  for (let i = 0; i < Classification.length; i++) {
    let proposedClass = Classification[i].agreement

    for (let j = 0; j < proposedClass.length; j++) {

      if (proposedClass[j].name === agrProposedInDB) {

        let proposedClassArr = proposedClass[j].classification
        for (let k = 0; k < proposedClassArr.length; k++) {
          if (classProposedInDB === proposedClassArr[k]) {
            classProposedDisplay.unshift(proposedClassArr[k])
          } else {
            classProposedDisplay.push(proposedClassArr[k])
          }
        }
      }
    }

  }

  const classProposedUnique = [...new Set(classProposedDisplay)]


  return (

    <Container>
      <div>
        <form>
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
            incumbent={form.incumbent}
            employee_name={form.employee_name}
            employeeId={form.employeeId}
            typeOfChange={form.typeOfChange}
            change_reasons={form.change_reasons}
            effective_day={form.effective_day}
            effective_month={form.effective_month}
            effective_year={form.effective_year}
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
            unique={unique}
            handleDropdown={handleDropdown}
            handleInputChange={handleInputChange}
            manageClassifications={manageClassifications}
            effective_date={form.effective_date}
          />
          <br />
          <SectionB
            SectionB="Section B | Compensation (Salaried)"
            handleInputChange={handleInputChange}
            haypoint_current={form.haypoint_current}
            haypoint_proposed={form.haypoint_proposed}
            currency_current={form.currency_current}
            currency_proposed={form.currency_proposed}
            baseSalary_current={form.baseSalary_current}
            baseSalary_proposed={form.baseSalary_proposed}
            vehicle_current={form.vehicle_current}
            vehicle_proposed={form.vehicle_proposed}
            sti_current={form.sti_current}
            sti_proposed={form.sti_proposed}
            superannuationB_current={form.superannuationB_current}
            superannuationB_proposed={form.superannuationB_proposed}
            reward_current={form.reward_current}
            reward_proposed={form.reward_proposed}
            percentage_change={form.percentage_change}
            other_allowances_B={form.other_allowances_B}
            hoursB_monday={form.hoursB_monday}
            hoursB_tuesday={form.hoursB_tuesday}
            hoursB_wednesday={form.hoursB_wednesday}
            hoursB_thursday={form.hoursB_thursday}
            hoursB_friday={form.hoursB_friday}
            hoursB_saturday={form.hoursB_saturday}
            hoursB_sunday={form.hoursB_sunday}
            total_hours_B={form.total_hours_B}
          />
          <br />
          <SectionC
            sectionC="Section C | COMPENSATION (waged employees)"
            handleDropdown={handleDropdown}
            handleInputChange={handleInputChange}
            work_country={form.work_country}
            location={form.location}
            locationDB={form.locationDB}
            team_leader_allowance={form.team_leader_allowance}
            leading_hand_allowance={form.leading_hand_allowance}
            dual_trade_allowance={form.dual_trade_allowance}
            other_allowances_C={form.other_allowances_C}
            work_schedule={form.work_schedule}
            shift={form.shift}
            previous_incumbent={form.previous_incumbent}
            currentAgreement={currentAgreement}
            proposedAgreement={proposedAgreement}
            currentClassification={currentClassification}
            proposedClassification={proposedClassification}
            handleCurrentClassification={handleCurrentClassification}
            handleProposedClassification={handleProposedClassification}
            agrCurrentUnique={agrCurrentUnique}
            classProposedUnique={classProposedUnique}
            agrProposedUnique={agrProposedUnique}
            classCurrentUnique={classCurrentUnique}
            hoursC_monday={form.hoursC_monday}
            hoursC_tuesday={form.hoursC_tuesday}
            hoursC_wednesday={form.hoursC_wednesday}
            hoursC_thursday={form.hoursC_thursday}
            hoursC_friday={form.hoursC_friday}
            hoursC_saturday={form.hoursC_saturday}
            hoursC_sunday={form.hoursC_sunday}
            total_hours_C={form.total_hours_C}

          />
          <SectionD
            sectionD="Approvals - Section D"
            handleDropdown={handleDropdown}
            handleInputChange={handleInputChange}
            change_justification={form.change_justification}
            submitted_by_name={form.submitted_by_name}
            submitted_by_position={form.submitted_by_position}
            submission_day={form.submission_day}
            submission_month={form.submission_month}
            submission_year={form.submission_year}
            hr_name={form.hr_name}
            hr_signature={form.hr_signature}
            first_approver_name={form.first_approver_name}
            first_approver_signature={form.first_approver_signature}
            second_approver_name={form.second_approver_name}
            second_approver_signature={form.second_approver_signature}
            hr_central_name={form.hr_central_name}
            hr_central_signature={form.hr_central_signature}
            payroll_name={form.payroll_name}
            payroll_signature={form.payroll_signature}
            payroll_number={form.payroll_number}
            payroll_position={form.payroll_position}
            template={form.template}
            superannuation_D={form.superannuation_D}
            visa_check={form.visa_check}
            comments={form.comments}


          />
          <hr></hr>
          {role === "payroll" ?
            <Container textAlign='center' className='distance'>

              <Link to="formlistpage"><Button size='large' centered color='violet' type="submit" onClick={() => { toggleFunction(idLSupdate) }}>{OpenClose}</Button></Link>

              <Button size='large' color='violet' type="submit" onClick={(event) => { event.preventDefault(); updateForm(idLSupdate); window.location.reload(true) }}>Update Form</Button>

              <br></br>
              <br></br>
              <br></br>
            </Container>

            :
            (form.open === true
              ?
              <button className='ui violet button stuck attached big' type="submit" onClick={(event) => { event.preventDefault(); updateForm(idLSupdate); window.location.reload(true) }}>Update Form</button>
              : <Container textAlign='center' className='distance'><button class="ui orange button huge">Please Contact Payroll to Re-Open if changes are required</button>
              </Container>

            )


          }


        </form>
      </div>

    </Container>

  );
}
export default EmployeeChangeForm;
