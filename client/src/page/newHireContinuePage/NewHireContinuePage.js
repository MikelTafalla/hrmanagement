import React, { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import SectionANewHire from "../../components/newHireForm/SectionA";
import SectionBNewHire from "../../components/newHireForm/SectionB";
import SectionCNewHire from "../../components/newHireForm/SectionC";
import SectionDNewHire from "../../components/newHireForm/SectionD";
import { Container, Button } from "semantic-ui-react";
import { Link } from "react-router-dom";
import Countries from "../../components/newHireForm/countries.json";
import Currency from "../../components/newHireForm/currency.json";
import Agreement from "../../components/sectionC/agreement.json";
import API from "../../utils/API"


function NewHireForm() {
  //   Store information from database
  const [form, setForm] = useState({});

  //get Role value from localStorage to conditionally render buttons
  const role = JSON.parse(localStorage.getItem("Role"))

  //Activates to retrive information from the API/DB
  const idLSupdate = JSON.parse(localStorage.getItem("DBid"))
  useEffect(() => {
    const idLocalStorage = JSON.parse(localStorage.getItem("DBid"))
    populateNewHireForm(idLocalStorage);
  }, [])

  const populateNewHireForm = (id) => {
    API.findNewHire(id)
      .then(res => setForm({
      employee_type: res.data.employee_type,
      employee_classification: res.data.employee_classification,
      position: res.data.position,
      positionNumber: res.data.positionNumber,
      newRoleJustification: res.data.newRoleJustification,
      previousIncumbent: res.data.previousIncumbent,
      employee_name: res.data.employee_name,
      employeeId: res.data.employeeId,
      title: res.data.title,
      internalCandidate: res.data.internalCandidate,
      nameInternalCandidate: res.data.nameInternalCandidate,
      work_country: res.data.work_country,
      location: res.data.location,
      cityInDB: res.data.location,
      function: res.data.function,
      department: res.data.department,
      manager: res.data.manager,
      salary_cost: res.data.salary_cost,
      travel_cost: res.data.travel_cost,
      business_unit: res.data.business_unit,
      haypoint: res.data.haypoint,
      currency: res.data.currency,
      vehicleAllowance: res.data.vehicleAllowance,
      midPoint: res.data.midPoint,
      target_STI: res.data.target_STI,
      maxPoint: res.data.maxPoint,
      otherAllowances: res.data.otherAllowances,
      baseWage: res.data.baseWage,
      employeeAgreement: res.data.employeeAgreement,
      classification: res.data.classification,
      leaderAllowance: res.data.leaderAllowance,
      handAllowance: res.data.handAllowance,
      tradeAllowance: res.data.tradeAllowance,
      otherAllowancesC: res.data.otherAllowancesC,
      shiftType: res.data.shiftType,
      previousIncumbentC: res.data.previousIncumbentC,
      comments: res.data.comments,
      submittedBy: res.data.submittedBy,
      day: res.data.day,
      month:res.data.month,
      year:res.data.year,
      positionD:res.data.positionD,
      manager_partner:res.data.manager_partner,
      mpSignature:res.data.mpSignature,
      approverOne:res.data.approverOne,
      signatureOne:res.data.signatureOne,
      approverTwo:res.data.approverTwo,
      signatureTwo:res.data.signatureTwo,
      approverThree:res.data.approverThree,
      signatureThree:res.data.signatureThree,
      approverFour:res.data.approverFour,
      signatureFour:res.data.signatureFour,
      approverFive:res.data.approverFive,
      signatureFive:res.data.signatureFive,
      hrCentral:res.data.hrCentral,
      hrCentralSignature:res.data.hrCentralSignature,
      payroll:res.data.payroll,
      payrollSignature:res.data.payrollSignature,
      newPosition:res.data.newPosition,
      uID:res.data.uID,
      employeeSubgroup:res.data.employeeSubgroup,
      commentsTwo:res.data.commentsTwo,
      open: res.data.open
      }))
      .catch(err => console.log(err));
  }

  const updateNewHireForm = (id) => {
    API.updateNewHire(id, form)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  //Function and conditional to render open or close form button
  const toggleFunction = (id) => {
    if (form.open === true) {
      localStorage.setItem("Click", JSON.stringify("clicked"))
      closeForm(id)
    } else {
      localStorage.setItem("Click", JSON.stringify("clicked"))
      openForm(id)
    }
  }
  const OpenClose = form.open === true ? "Close Form" : "Open Form"

  const closeForm = (id) => {
    form.open = false
    API.updateNewHire(id, form)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
  const openForm = (id) => {
    form.open = true
    API.updateNewHire(id, form)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
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

  //Logic to set currency depending on Country
  let money;
  Currency.map(currency => {
    if (form.work_country === currency.country) {
      money = currency.currency
      return money
    }
    return money
  })

  const australianCities = ["Adelaide", "Brisbane", "Melbourne CBD", "Melbourne", "Sydney"];
  let agrCurrentUnique = [];
  for (let i = 0; i < australianCities.length; i++) {
    if (form.location === australianCities[i]) {
      for (let j = 0; j < australianCities.length; j++) {
        if (australianCities[j] === form.location) {
          agrCurrentUnique = Agreement[j];
        }
      }
    }
  }
  let agrDisplay = [];

  for (let i = 0; i < agrCurrentUnique.length; i++) {
    if (form.employeeAgreement === agrCurrentUnique[i].value && form.cityInDB === form.location){
      
      agrDisplay.unshift(agrCurrentUnique[i].value)
    } 
    agrDisplay.push(agrCurrentUnique[i].value)

  }


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

  const handleCheckbox = (e) => {
    const { name } = e.target
    const target = e.target
    const value = target.type === "checkbox" ? target.checked : target.value;
    setForm({ ...form, [name]: value })
  }
  const email = JSON.parse(localStorage.getItem("ActiveLoggedInUser"))
  return (
    !email ? window.location = "/" : (
    <Container>
      <div>
        <form>
          <Header
            title="Request to Hire"
            mandatory="All fields are considered mandatory"
            questions="Questions? Need Help? Contact the O-I HR Central Team"
            phone="Australia +61 3 9326 2525"
            country="New Zealand and Singapore 2525"
            message=" Please use this form if you are hiring externally to fill a position"
            instruction1="Please ensure you have the following information before attempting to fill the form:"
            instruction1A="a. Organisation Structure Data"
            instruction1B="b. Obtain Hay point data from HR central or Remuneration and Benefits"
            note="**For Salaried roles, this form needs to be submitted with an up to date position description reviewed by your HRBP"
            instruction2="Upon completion of this form, please submit this via your Talent Acquisition Consultant to initiate approvals"
            salariedChange="Salaried Change - Complete Section A, Section B and Section D"
            wagedChange="Waged Change - Complete Section A, Section C and Section D"
          />
          <br></br>
          <SectionANewHire
            sectionA="Section A | Organisational Structure"
            employee_type={form.employee_type}
            employee_classification={form.employee_classification}
            position={form.position}
            positionNumber={form.positionNumber}
            newRoleJustification={form.newRoleJustification}
            previousIncumbent={form.previousIncumbent}
            employee_name={form.employee_name}
            employeeId={form.employeeId}
            title={form.title}
            internalCandidate={form.internalCandidate}
            nameInternalCandidate={form.nameInternalCandidate}
            work_country={form.work_country}
            location={form.location}
            unique={unique}
            function={form.function}
            department={form.department}
            manager={form.manager}
            salary_cost={form.salary_cost}
            travel_cost={form.travel_cost}
            business_unit={form.business_unit}
            handleDropdown={handleDropdown}
            handleInputChange={handleInputChange}
          />
          <SectionBNewHire
            SectionB="Section B - Salaried | Compensation (Salaried Employees)"
            haypoint={form.haypoint}
            money={money}
            vehicleAllowance={form.vehicleAllowance}
            midPoint={form.midPoint}
            target_STI={form.target_STI}
            maxPoint={form.maxPoint}
            otherAllowances={form.otherAllowances}
            handleDropdown={handleDropdown}
            handleInputChange={handleInputChange}
          />
          <SectionCNewHire
            sectionC="Section C - Waged | Compensation (Waged Employees)"
            work_country={form.work_country}
            baseWage={form.baseWage}
            agrDisplay={agrDisplay}
            classification={form.classification}
            leaderAllowance={form.leaderAllowance}
            handAllowance={form.handAllowance}
            tradeAllowance={form.tradeAllowance}
            otherAllowancesC={form.otherAllowancesC}
            shiftType={form.shiftType}
            previousIncumbentC={form.previousIncumbent}
            handleDropdown={handleDropdown}
            handleInputChange={handleInputChange}
            handleCheckbox={handleCheckbox}
          />
          <SectionDNewHire
            sectionD="Section D - Approvals"
            comments={form.comments}
            submittedBy={form.submittedBy}
            day={form.day}
            month={form.month}
            year={form.year}
            positionD={form.positionD}
            manager_partner={form.manager_partner}
            mpSignature={form.mpSignature}
            approverOne={form.approverOne}
            signatureOne={form.signatureOne}
            approverTwo={form.approverTwo}
            signatureTwo={form.signatureTwo}
            approverThree={form.approverThree}
            signatureThree={form.signatureThree}
            approverFour={form.approverFour}
            signatureFour={form.signatureFour}
            approverFive={form.approverFive}
            signatureFive={form.signatureFive}
            hrCentral={form.hrCentral}
            hrCentralSignature={form.hrCentralSignature}
            payroll={form.payroll}
            payrollSignature={form.payrollSignature}
            newPosition={form.newPosition}
            uID={form.uID}
            employeeSubgroup={form.employeeSubgroup}
            commentsTwo={form.commentsTwo}
            handleDropdown={handleDropdown}
            handleInputChange={handleInputChange}
          />

          <hr></hr>
          {role === "payroll" ?
            <Container textAlign='center' className='distance'>

              <Link to="newhirelistpage"><Button size='large' centered="true" color='violet' type="submit" onClick={() => { toggleFunction(idLSupdate) }}>{OpenClose}</Button></Link>

              <Button size='large' color='violet' type="submit" onClick={(event) => { event.preventDefault(); updateNewHireForm(idLSupdate); window.location.reload(true) }}>Update Form</Button>

              <br></br>
              <br></br>
              <br></br>
            </Container>

            :
            (role !== "payroll" && form.open === false
              ?             
               <Container textAlign='center' className='distance'><button class="ui orange button huge">Please Contact Payroll to Re-Open if changes are required</button>
              </Container>
              : <Container textAlign='center' className='distance'><button className='ui violet button big' type="submit" onClick={(event) => { event.preventDefault(); updateNewHireForm(idLSupdate); window.location.reload(true) }}>Update Form</button>
              </Container>

            )


          }

        </form>
      </div>

    </Container> )

  );
}
export default NewHireForm;
