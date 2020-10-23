import React, { useState, useEffect } from "react";
import HeaderTermination from "../../components/terminationForm/HeaderTermination";
import TerminationForm from "../../components/terminationForm/Separation";
import { Container, Button } from "semantic-ui-react";
import API from "../../utils/API";
import Countries from "../../components/sectionA/countries.json";
import SeparationReasons from "../../components/terminationForm/SeparationReasons.json";
import { Link } from "react-router-dom";


const ExistingSeparationForm = () => {
  //Store information from database
  const [form, setForm] = useState({});

  const idUpdateAndGet = JSON.parse(localStorage.getItem("DBid"))
  useEffect(() => {
    const idUpdateAndGet = JSON.parse(localStorage.getItem("DBid"))
    populateForm(idUpdateAndGet)
  }, [])

  const populateForm = (id) => {
    API.findterminatedemployee(id)
    .then(res => setForm({
      open: res.data.open,
      employee_name: res.data.employee_name,
      employee_id: res.data.employee_id, 
      work_country: res.data.work_country,
      location: res.data.location,
      function: res.data.function,
      fullNoticePeriod: res.data.fullNoticePeriod,
      employeeBackfilled: res.data.employeeBackfilled,
      employeeManager: res.data.employeeManager,
      paymentOption: res.data.paymentOption,
      submissionDay: res.data.submissionDay,
      submissionMonth: res.data.submissionMonth,
      lastWorkYear: res.data.lastWorkYear,
      lastEmploymentYear: res.data.lastEmploymentYear,
      reportUponExit: res.data.reportUponExit,
      additionalComments: res.data.additionalComments,
      submitted: res.data.submitted,
      submissionYear: res.data.submissionYear,
      submittedByPosition: res.data.submittedByPosition,
      approverOne: res.data.approverOne,
      signatureOne: res.data.signatureOne,
      approverTwo: res.data.approverTwo,
      signatureTwo: res.data.signatureTwo,
      hrCentral: res.data.hrCentral,
      payrollNumber: res.data.payrollNumber,
      hrSignature: res.data.hrSignature,
      positionNumber: res.data.positionNumber,
      payrollName: res.data.payrollName,
      payrollSignature: res.data.payrollSignature,
      comments: res.data.comments
    }))
    .catch(err => console.log(err));
  }

  const UpdateTerminationForm = (id) => {
    API.updateTerminationForm(id, form)
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

  //Logic to display reasons for separation depending on separation type
  let displayReasons = ["First Select Separation Type"]
  for (let i = 0; i < SeparationReasons.length; i++) {
    if (form.separationType === SeparationReasons[i].name) {
      displayReasons = SeparationReasons[i].reasons;
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (value.length > 0) {
      setForm({ ...form, [name]: value });

    } else {
      setForm({ ...form, [name]: value })

    }
  }

  const handleDropdown = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value });

  }

  //Function and conditional to render open or close form button
  //get Role value from localStorage to conditionally render buttons
  const role = JSON.parse(localStorage.getItem("Role"))

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
    API.updateTerminationForm(id, form)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }
  const openForm = (id) => {
    form.open = true
    API.updateTerminationForm(id, form)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }

  return (

    <Container>
      <div>
        <form>
          <HeaderTermination
            title="Separation Form"
            mandatory="All fields are considered mandatory"
            questions="Questions? Need Help? Contact the O-I HR Central Team"
            phone="Australia +61 3 9326 2525"
            country="New Zealand and Singapore 2525"
            message="This form is to be filled out by the Manager and sent to HR Central via HR.Central.AP@o-i.com to inform of Employee's exit."
          />
          <TerminationForm
            employee_name={form.employee_name}
            employee_id={form.employee_id}
            work_country={form.work_country}
            location={form.location}
            function={form.function}
            unique={unique}
            separationType={form.separationType}
            reasonSeparation={form.reasonSeparation}
            displayReasons={displayReasons}           
            lastWorkDay={form.lastWorkDay}
            lastWorkMonth={form.lastWorkMonth}
            lastWorkYear={form.lastWorkYear}
            lastEmploymentDay={form.lastEmploymentDay}
            lastEmploymentMonth={form.lastEmploymentMonth}
            lastEmploymentYear={form.lastEmploymentYear}
            fullNoticePeriod={form.fullNoticePeriod}
            employeeBackfilled={form.employeeBackfilled}
            employeeManager={form.employeeManager}
            paymentOption={form.paymentOption}
            submissionDay={form.submissionDay}
            submissionMonth={form.submissionMonth}
            reportUponExit={form.reportUponExit}
            additionalComments={form.additionalComments}
            submitted={form.submitted}
            submissionYear={form.submissionYear}
            submittedByPosition={form.submittedByPosition}
            approverOne={form.approverOne}
            signatureOne={form.signatureOne}
            approverTwo={form.approverTwo}
            signatureTwo={form.signatureTwo}
            hrCentral={form.hrCentral}
            payrollNumber={form.payrollNumber}
            hrSignature={form.hrSignature}
            positionNumber={form.positionNumber}
            payrollName={form.payrollName}
            payrollSignature={form.payrollSignature}
            comments={form.comments}
            handleDropdown={handleDropdown}
            handleInputChange={handleInputChange}
          />
          
          {role === "payroll" ?
            <Container textAlign='center' className='distance'>

              <Link to="terminationlistpage"><Button size='large' centered="true" color='violet' type="submit" onClick={() => { toggleFunction(idUpdateAndGet) }}>{OpenClose}</Button></Link>

              <Button size='large' color='violet' type="submit" onClick={(event) => { event.preventDefault(); UpdateTerminationForm(idUpdateAndGet); window.location.reload(true) }}>Update Form</Button>

              <br></br>
              <br></br>
              <br></br>
            </Container>

            :
            (role !== "payroll" && form.open === false
              ?  
              <Container textAlign='center' className='distance'><button class="ui orange button huge">Please Contact Payroll to Re-Open if changes are required</button>
              </Container>
                       
               
              : <Container textAlign='center' className='distance'>
              <Link to='terminationlistpage'><Button className='ui violet button large' type="submit" onClick={(event) => { event.preventDefault(); UpdateTerminationForm(idUpdateAndGet); window.location.reload(true) }}>Update Form </Button></Link>
            </Container>  

            )


          }
        </form>
      </div>

    </Container>

  );
}
export default ExistingSeparationForm;
