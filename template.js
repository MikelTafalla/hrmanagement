import React, { useState, useEffect } from "react";
import HeaderTermination from "../../components/terminationForm/HeaderTermination";
import TerminationForm from "../../components/terminationForm/Separation";
import { Container } from "semantic-ui-react";
import API from "../../utils/API";
import Countries from "../../components/sectionA/countries.json";
import SeparationReasons from "../../components/terminationForm/SeparationReasons.json";

const SeparationForm = () => {
    //Store information from database
    const [form, setForm] = useState({});


    useEffect(() => {
        terminationForm();
    }, [])

    const terminationForm = () => {
        API.createTerminationForm()
            .then(res => {
                console.log(res)
                setForm({
                    open: res.data.open,
                    employee_name: res.data.employee_name,
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
                })
            })
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
        if (dropdowns.separationType === SeparationReasons[i].name) {
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
                        work_country={form.work_country}
                        location={form.location}
                        function={form.function}
                        unique={unique}
                        separationType={form.separationType}
                        reasonSeparation={form.reasonSeparation}
                        displayReasons={displayReasons}
                        reasonSeparation={form.reasonSeparation}
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

                </form>
            </div>

        </Container>

    );
}
export default SeparationForm;
