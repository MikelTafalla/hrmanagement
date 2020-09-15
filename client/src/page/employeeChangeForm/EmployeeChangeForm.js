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
import Agreement from "../../components/sectionC/agreement.json";
import Classification from "../../components/sectionC/classification.json";


function EmployeeChangeForm() {
  //Store information from database
  const [form, setForm] = useState({});

  //Store the state related to the country and location/city from section A. So we can access them both on SectionA and C
  const [activeLocation, setActiveLocation] = useState([]);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");

  //States for section A
  const [employeeType, setEmployeeType] = useState("");
  const [activePosition, setActivePosition] = useState("");
  const[renderPosition, setRenderPosition] = useState("");
  const[employeeClass, setEmployeeClass] = useState("");
  const[renderTypeOfChange, setRenderTypeOfChange] = useState("");
  const[activeFunction, setActiveFunction] = useState("");
  const[businessUnit, setBusinessUnit] = useState("");
  const[inputName, setInputName] = useState("");
  
  //States for section B

  //States for section C
  const [currentAgreement, setCurrentAgreement] = useState([]);
  const [proposedAgreement, setProposedAgreement] = useState([{}]);
  const [renderWorkSchedule, setRenderWorkSchedule] = useState("");
  const [currentClassification, setCurrentClassification] = useState([]);
  const [proposedClassification, setProposedClassification] = useState([]);

  //States for section D
  const[day, setDay] = useState("");
  const[month, setMonth] = useState("");
  const[superannuationD, setSuperannuationD] = useState("");
  const[visa, setVisa] = useState("");
  
  //Activates to retrive information from the API/DB
  useEffect(() => {
    populateForm("5f5ebfd51d0c97257d20d68a");
  }, [])

  const populateForm = (id) => {
    API.findById(id)
      .then(res => setForm(res.data))
      .catch(err => console.log(err));
  }
  //Create props for section A

  //Logic to get dropdown list display the location from the database as selected on page load
  const citiesToDisplay = []
  let cities = []
  const place = !country ? form.work_country : country
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

  const handlePosition = (selectedPosition) => {

    if(selectedPosition === form.position){
      setRenderPosition(renderPosition)
    } else setRenderPosition(selectedPosition)
    
    if (selectedPosition === "new Position") {
      return setActivePosition(
        <div className="five wide column warning">DO NOT PROCEED. Please contact HR central to arrange a Job Evaluation</div>
      )
    }
    if (selectedPosition === "existing Position") {
      return setActivePosition(
        <React.Fragment>
          <div className="two wide column">Name of previous Incumbent</div>
          <input className="five wide column border" defaultValue={form.incumbent}></input>
        </React.Fragment>
      )
    }
  }

  const handleEmployeeClassification = (selectedValue) => {
    setEmployeeClass(selectedValue)
  }

  const handleTypeOfChange = (selectedValue) => {
   setRenderTypeOfChange(selectedValue)
  }

  const handleFunction = (selectedValue) => {
    setActiveFunction(selectedValue)
  }

  const handleBusinessUnit = (selectedValue) => {
    setBusinessUnit(selectedValue)
  }

  const handleEmployeeType = (selectedValue) => {
    setEmployeeType(selectedValue)
  }

  const handleInputName = (e) => {
    setInputName(e)
  }

  ////Create props for section B

  ////Create props for section C
 
  useEffect(() => {
    //Set only cities that have an agreement 
    const cities = ["Adelaide", "Brisbane", "Melbourne CBD", "Melbourne", "Sydney"];
    for (let i = 0; i < cities.length; i++) {
      if (form.location === cities[i] || city === cities[i]) {
        for (let j = 0; j < cities.length; j++) {
          if (cities[j] === city) {
            setCurrentAgreement(Agreement[j]);
            setProposedAgreement(Agreement[j])
          }
          if (city === "Melbourne CBD") {
            setCurrentClassification([]);
            setProposedClassification([])
          }
          if (country !== "Australia") {
            setCurrentClassification([]);
            setProposedClassification([])
          }
        }
      }
    }
  }, [country, city, form.location]);

  const handleWorkSchedule = (selectedValue) => {
    setRenderWorkSchedule(selectedValue)
  }

  const handleCurrentClassification = (selectedValue) => {
    Classification.forEach(element => {
      const item = element.agreement
      for (var i = 0; i < item.length; i++) {
        if (selectedValue === item[i].name) {
          return setCurrentClassification(item[i].classification)
        }
      }
    });
  }
  
  const handleProposedClassification = (selectedValue) => {
    Classification.forEach(element => {
      const item = element.agreement
      for (var i = 0; i < item.length; i++) {
        if (selectedValue === item[i].name) {
          return setProposedClassification(item[i].classification)
        }
      }
    });
  }
 
  //Start with an empty array to push all the agreements that correspond to the group where the agreement from the DB belongs to
  const agrCurrentDisplay = []
  //We store the agreement from the database. Ternary needed to avoid load conflicts.
  const agrcurrentInDB = form && form.employee_agreement ? form.employee_agreement.current : []
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
    break
  }
  const agrCurrentUnique = [...new Set(agrCurrentDisplay)]

  //end of logic
  //Repeat the logic for agreement proposed and classificatio current and proposed

  //AGREEMENT PROPOSED
  const agrProposedDisplay = []
  const agrProposedInDB = form && form.employee_agreement ? form.employee_agreement.proposed : []
  for (let i = 0; i < Agreement.length; i++) {
    let proposedagr = Agreement[i]
    for (let j = 0; j < proposedagr.length; j++) {
      if (agrProposedInDB === proposedagr[j].name) {
        agrProposedDisplay.unshift(proposedagr[j].name)
      } else {
        agrProposedDisplay.push(proposedagr[j].name)
      }
    }
    break
  }
 
  const agrProposedUnique = [...new Set(agrProposedDisplay)]
  //CLASSIFICATION CURRENT
  
  const classCurrentDisplay = []
  const classCurrentInDB = form && form.classification ? form.classification.current : []
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
    break
  }

  const classCurrentUnique = [...new Set(classCurrentDisplay)]
  
  //CLASSIFICATION PROPOSED
  
  const classProposedDisplay = []
  const classProposedInDB = form && form.classification ? form.classification.proposed : []
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
    break
  }

  const classProposedUnique = [...new Set(classProposedDisplay)]

  //Props for section D

  const handleDay = (selectedValue) => {
    setDay(selectedValue)
  }

  const handleMonth = (selectedValue) => {
    setMonth(selectedValue)
  }

  const handleSuperannuation = (selectedValue) => {
    setSuperannuationD(selectedValue)
  }

  const handleVisa = (selectedValue) => {
    setVisa(selectedValue)
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
          ///
          employeeType = {employeeType}
          activePosition = {activePosition}
          renderPosition = {renderPosition}
          employeeClass = {employeeClass}
          renderTypeOfChange = {renderTypeOfChange}
          activeFunction = {activeFunction}
          businessUnit = {businessUnit}
          inputName = {inputName}
          handlePosition = {handlePosition}
          handleEmployeeClassification={handleEmployeeClassification}
          handleTypeOfChange={handleTypeOfChange}
          handleFunction={handleFunction}
          handleBusinessUnit={handleBusinessUnit}
          handleEmployeeType={handleEmployeeType}
          handleInputName={handleInputName}
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
          ///
          currentAgreement={currentAgreement}
          proposedAgreement={proposedAgreement}
          currentClassification={currentClassification}
          proposedClassification={proposedClassification}
          handleWorkSchedule={handleWorkSchedule}
          handleCurrentClassification={handleCurrentClassification}
          handleProposedClassification={handleProposedClassification}
          agrCurrentUnique={agrCurrentUnique}
          classProposedUnique={classProposedUnique}
          agrProposedUnique={agrProposedUnique}
          classCurrentUnique={classCurrentUnique}
          agrCurrentDisplay = {agrCurrentDisplay}
          agrcurrentInDB = {agrcurrentInDB}
          agrProposedDisplay = {agrProposedDisplay}
          agrProposedInDB = {agrProposedInDB}
          classCurrentDisplay = {classCurrentDisplay}
          classCurrentInDB = {classCurrentInDB}
          classProposedDisplay = {classProposedDisplay}
          classProposedInDB = {classProposedInDB}
          renderWorkSchedule={renderWorkSchedule}

        />
        <SectionD
          sectionD="Approvals - Section D"
          change_justification={form.change_justification}
          submitted_by={form.submitted_by}
          submission_date={form.submission_date}
          hr_name={form.hr_name}
          first_approver={form.first_approver}
          second_approver={form.second_approver}
          hr_central={form.hr_central}
          payroll={form.payroll}
          template={form.template}
          superannuation_D={form.superannuation_D}
          visa_check={form.visa_check}
          comments={form.comments}
          day={day}
          month={month}
          superannuationD={superannuationD}
          visa={visa}
          handleDay={handleVisa}
          handleMonth={handleMonth}
          handleSuperannuation={handleSuperannuation}
          handleVisa={handleVisa}
        />
      </div>
    </Container>

  );
}
export default EmployeeChangeForm;
