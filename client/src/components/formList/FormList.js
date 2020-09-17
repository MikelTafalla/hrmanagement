import React, { useEffect, useState } from 'react'
import { Icon, Button, Table } from 'semantic-ui-react'
import "./formlist.css"
import { Link } from 'react-router-dom'
import API from "../../utils/API"
import { Container } from "semantic-ui-react";

const FormTable = () => {
  //State to store information from the API call populateHistoryReport
  const [dbInfo, setDbInfo] = useState([])

  const EmployeeLSId = JSON.parse(localStorage.getItem("EmployeeId"))
  useEffect(() => {
    const EmployeeId = JSON.parse(localStorage.getItem("EmployeeId"))
    populateHistoryReport(EmployeeId);
    
  }, [])

  const populateHistoryReport = (id) => {
    API.findReport(id)
      .then(res => setDbInfo(res.data))
      .catch(err => console.log(err));
  }

  //Set id in looking storage to be able to access it after update refresh
  const storeDbId = (e) => {
    const dbId = e.target.value
    localStorage.setItem("DBid", JSON.stringify(dbId))
  }

  //Create function to divide database in two arrays. One would contain all the objects whose status is open and the other would contain the ones with status closed
  let openStatus = [];
  let closedStatus = [];
  const divideDbInfo = () => {
    if(dbInfo.length > 0) {
      //if key in object contains true then push object to openStatus. else push to closedStatus
      openStatus = dbInfo.filter(status => status.open === true)
      closedStatus = dbInfo.filter(status => status.open === false)

    }
  }
  divideDbInfo()
  return (
    <React.Fragment>
    {openStatus.map(item => (
    <Container>
      <Link to='employeechangeForm'><Button color='violet' type="submit" onClick={(e) => storeDbId(e)} value={item._id}>Continue with Form in Progress</Button></Link>
    </Container>
    ))}
    <Table compact celled definition>
      
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>Employee Name</Table.HeaderCell>
          <Table.HeaderCell>Created Date</Table.HeaderCell>
          <Table.HeaderCell>Created By</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    
      <Table.Body>
        {closedStatus.map(history => (
          <Table.Row key={history._id}>
            <Table.Cell collapsing>
              <Link to='employeechangeForm'><Button color='violet' type="submit" onClick={(e) => storeDbId(e)} value={history._id}>View Form</Button></Link>
            </Table.Cell>
            <Table.Cell>{history.employee_name}</Table.Cell>
            <Table.Cell>{history.submission_day} / {history.submission_month} / {history.submission_year}</Table.Cell>
            <Table.Cell>{history.hr_name}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer fullWidth>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell colSpan='4'>
            <Link to='existingemployeenewform'> <Button
              floated='right'
              icon labelPosition='left'
              size='small'
              color='violet' value={EmployeeLSId}>

              <Icon name='user' /> Create a New Form
                        </Button> </Link>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
    </React.Fragment>

  )

}

export default FormTable;

