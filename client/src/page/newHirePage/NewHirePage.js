// import React, { useState } from "react";
// import Header from "../../components/header/Header";
// import SectionANewHire from "../../components/newHireForm/SectionA";
// import SectionBNewHire from "../../components/newHireForm/SectionB";
// import SectionCNewHire from "../../components/newHireForm/SectionC";
// import SectionDNewHire from "../../components/newHireForm/SectionD";
// import { Container, Button} from "semantic-ui-react";
// import { Link } from "react-router-dom";
// import Countries from "../../components/newHireForm/countries.json";
// import Currency from "../../components/newHireForm/currency.json";
// import Agreement from "../../components/sectionC/agreement.json";
// import API from "../../utils/API";

// const NewHireForm=()=> {
//     //   Store information from database
//     const [form, setForm] = useState(
//       {
//         employee_type: "",
//         employee_classification: "",
//         position: "",
//         positionNumber: "",
//         newRoleJustification: "",
//         previousIncumbent: "",
//         employee_name: "",
//         employeeId: "",
//         title: "",
//         internalCandidate: "",
//         nameInternalCandidate: "",
//         work_country: "",
//         location: "",
//         function: "",
//         department: "",
//         manager: "",
//         salary_cost: "",
//         travel_cost: "",
//         business_unit: "",
//         haypoint: "",
//         currency: "",
//         vehicleAllowance: "",
//         midPoint: "0.00",
//         target_STI: "0%",
//         maxPoint: "0.00",
//         otherAllowances: "",
//         baseWage: "",
//         employeeAgreement: "",
//         classification: "",
//         leaderAllowance: false,
//         handAllowance: false,
//         tradeAllowance: false,
//         otherAllowancesC: "",
//         shiftType: "",
//         previousIncumbentC: "",
//         comments: "",
//         submittedBy:"",
//         day:"",
//         month:"",
//         year:"",
//         positionD:"",
//         manager_partner:"",
//         mpSignature:"",
//         approverOne:"",
//         signatureOne:"",
//         approverTwo:"",
//         signatureTwo:"",
//         approverThree:"",
//         signatureThree:"",
//         approverFour:"",
//         signatureFour:"",
//         approverFive:"",
//         signatureFive:"",
//         hrCentral:"",
//         hrCentralSignature:"",
//         payroll:"",
//         payrollSignature:"",
//         newPosition:"",
//         uID:"",
//         employeeSubgroup:"",
//         commentsTwo:""
//       });
  
//     //Logic to get dropdown list display the location from the database as selected on page load
//     const citiesToDisplay = []
//     let cities = []
//     const place = form.work_country
//     for (let i = 1; i < Countries.length; i++) {
//       if (place === Countries[i].name) {
//         cities = Countries[i].cities
//       }
//     }
//     for (let j = 0; j < cities.length; j++) {
//       if (form.location === cities[j]) {
//         citiesToDisplay.unshift(cities[j])
//       }
//       citiesToDisplay.push(cities[j])
//     }
//     const unique = [...new Set(citiesToDisplay)]
  
//     //Logic to set currency depending on Country
//     let money;
//     Currency.map(currency => {
//       if (form.work_country === currency.country) {
//         money = currency.currency
//         return money
//       }
//       return money
//     })
  
//     const australianCities = ["Adelaide", "Brisbane", "Melbourne CBD", "Melbourne", "Sydney"];
//     let agrCurrentUnique = [];
//     for (let i = 0; i < australianCities.length; i++) {
//       if (form.location === australianCities[i]) {
//         for (let j = 0; j < australianCities.length; j++) {
//           if (australianCities[j] === form.location) {
//             agrCurrentUnique = Agreement[j];
//           }
//         }
//       }
//     }
//     let agrDisplay = [];
//     for (let i = 0; i < agrCurrentUnique.length; i++) {
//       agrDisplay.push(agrCurrentUnique[i].value)
//     }
  
//     const postNewHireForm = () => {
//       API.postNewHire(form)
//       .then(res => console.log(res))
//       .catch(err => console.log(err))
//     }
  
  
//     const handleInputChange = (e) => {
//       const { name, value } = e.target;
//       if (value.length > 0) {
//         setForm({ ...form, [name]: value });
//       } else { setForm({ ...form, [name]: value }) }
//     }
  
//     const handleDropdown = (e) => {
//       const { name, value } = e.target
//       setForm({ ...form, [name]: value })
//     }

//     const handleCheckbox = (e) => {
//       const { name } = e.target
//       const target = e.target
//       const value = target.type === "checkbox" ? target.checked : target.value;
//       setForm({ ...form, [name]: value })
//     }
  
//     return (
  
//       <Container>
//         <div>
//           <form>
//             <Header
//               title="Request to Hire"
//               mandatory="All fields are considered mandatory"
//               questions="Questions? Need Help? Contact the O-I HR Central Team"
//               phone="Australia +61 3 9326 2525"
//               country="New Zealand and Singapore 2525"
//               message=" Please use this form if you are hiring externally to fill a position"
//               instruction1="Please ensure you have the following information before attempting to fill the form:"
//               instruction1A="a. Organisation Structure Data"
//               instruction1B="b. Obtain Hay point data from HR central or Remuneration and Benefits"
//               note="**For Salaried roles, this form needs to be submitted with an up to date position description reviewed by your HRBP"
//               instruction2="Upon completion of this form, please submit this via your Talent Acquisition Consultant to initiate approvals"
//               salariedChange="Salaried Change - Complete Section A, Section B and Section D"
//               wagedChange="Waged Change - Complete Section A, Section C and Section D"
//             />
//             <br></br>
//             <SectionANewHire
//               sectionA="Section A | Organisational Structure"
//               employee_type={form.employee_type}
//               employee_classification={form.employee_classification}
//               position={form.position}
//               positionNumber={form.positionNumber}
//               newRoleJustification={form.newRoleJustification}
//               previousIncumbent={form.previousIncumbent}
//               employee_name={form.employee_name}
//               employeeId={form.employeeId}
//               title={form.title}
//               internalCandidate={form.internalCandidate}
//               nameInternalCandidate={form.nameInternalCandidate}
//               work_country={form.work_country}
//               location={form.location}
//               unique={unique}
//               function={form.function}
//               department={form.department}
//               manager={form.manager}
//               salary_cost={form.salary_cost}
//               travel_cost={form.travel_cost}
//               business_unit={form.business_unit}
//               handleDropdown={handleDropdown}
//               handleInputChange={handleInputChange}
//             />
//             <SectionBNewHire
//               SectionB="Section B - Salaried | Compensation (Salaried Employees)"
//               haypoint={form.haypoint}
//               money={money}
//               vehicleAllowance={form.vehicleAllowance}
//               midPoint={form.midPoint}
//               target_STI={form.target_STI}
//               maxPoint={form.maxPoint}
//               otherAllowances={form.otherAllowances}
//               handleDropdown={handleDropdown}
//               handleInputChange={handleInputChange}
//             />
//             <SectionCNewHire
//               sectionC="Section C - Waged | Compensation (Waged Employees)"
//               work_country={form.work_country}
//               baseWage={form.baseWage}
//               agrDisplay={agrDisplay}
//               classification={form.classification}
//               leaderAllowance={form.leaderAllowance}
//               handAllowance={form.handAllowance}
//               tradeAllowance={form.tradeAllowance}
//               otherAllowancesC={form.otherAllowancesC}
//               shiftType={form.shiftType}
//               previousIncumbentC={form.previousIncumbent}
//               handleDropdown={handleDropdown}
//               handleInputChange={handleInputChange}
//               handleCheckbox={handleCheckbox}
//             />
//             <SectionDNewHire
//               sectionD="Section D - Approvals"
//               comments={form.comments}
//               submittedBy={form.submittedBy}
//               day={form.day}
//               month={form.month}
//               year={form.year}
//               positionD={form.positionD}
//               manager_partner={form.manager_partner}
//               mpSignature={form.mpSignature}
//               approverOne={form.approverOne}
//               signatureOne={form.signatureOne}
//               approverTwo={form.approverTwo}
//               signatureTwo={form.signatureTwo}
//               approverThree={form.approverThree}
//               signatureThree={form.signatureThree}
//               approverFour={form.approverFour}
//               signatureFour={form.signatureFour}
//               approverFive={form.approverFive}
//               signatureFive={form.signatureFive}
//               hrCentral={form.hrCentral}
//               hrCentralSignature={form.hrCentralSignature}
//               payroll={form.payroll}
//               payrollSignature={form.payrollSignature}
//               newPosition={form.newPosition}
//               uID={form.uID}
//               employeeSubgroup={form.employeeSubgroup}
//               commentsTwo={form.commentsTwo}
//               handleDropdown={handleDropdown}
//               handleInputChange={handleInputChange}
//             />
//             <Container textAlign='center' className='distance'>
//             <Link to='employeedirectory'><Button className='ui violet button large' type="submit" onClick={() =>  postNewHireForm()}>Save Form </Button></Link>
//             </Container>
//           </form>
//         </div>
  
//       </Container>
  
//     );
//   }
//   export default NewHireForm;
  