import React, { useEffect, useState } from 'react'
import { Icon, Button, Table } from 'semantic-ui-react'
import "./newhirelist.css"
import { Link } from 'react-router-dom'
import API from "../../utils/API"

const NewHireTable = () => {
  //State to store information from the API call populateHistoryReport
  const [dbnewhire, setDbNewHire] = useState([])

  useEffect(() => {
    const EmployeeId = JSON.parse(localStorage.getItem("EmployeeId"))
    newHireReport(EmployeeId);

  }, [])

  const newHireReport = (id) => {
    API.findHiringReport(id)
      .then(resp => setDbNewHire(resp.data))
      .catch(err => console.log(err))
  }

  //Set id in looking storage to be able to access it after update refresh
  const storeDbId = (e) => {
    const dbId = e.target.value
    localStorage.setItem("DBid", JSON.stringify(dbId))
  }

  //Create function to divide database in two arrays. One would contain all the objects whose status is open and the other would contain the ones with status closed
  let newHireOpen = [];
  let newHireClosed = [];
  const divideNewHireDb = () => {
    if (dbnewhire.length > 0) {
      //if key in object contains true then push object to openStatus. else push to closedStatus
      newHireOpen = dbnewhire.filter(status => status.open === true)
      newHireClosed = dbnewhire.filter(status => status.open === false)

    }

  }
  divideNewHireDb()

  const clicked = JSON.parse(localStorage.getItem("Click"))
  if (clicked === "clicked") {
    localStorage.setItem("Click", JSON.stringify(""))
    window.location.reload()

  }
 
  return (
    <React.Fragment>
      <Link to='employeedirectory'><Button className='ui violet inverted' >Go To Employee Directory</Button></Link>

      {newHireOpen.map(item => (

        <div key={item._id} id='formbtn'>
          <Link to='newhirecontinue'><Button size='large' color='violet' onClick={(e) => storeDbId(e)} value={item._id}><Icon name='file' /> Continue with New Hire Form In Progress</Button></Link>
        </div>

      ))}
      <Table id='tbl' singleLine sortable textAlign='center'>

        <Table.Header >
          <Table.Row>
            <Table.HeaderCell>Closed Forms</Table.HeaderCell>
            <Table.HeaderCell>Employee Name</Table.HeaderCell>
            <Table.HeaderCell>Form Type</Table.HeaderCell>
            <Table.HeaderCell>Created Date</Table.HeaderCell>
            <Table.HeaderCell>Created By</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>

          {newHireClosed.map(history => (
            <Table.Row key={history._id}>

              <Table.Cell collapsing>
                <Link to='newhirecontinue'><Button color='violet' type="submit" onClick={(e) => storeDbId(e)} value={history._id}>View Form</Button></Link>
              </Table.Cell>
              <Table.Cell>{history.employee_name}</Table.Cell>
              <Table.Cell>New Hire Form</Table.Cell>
              <Table.Cell>{history.day} / {history.month} / {history.year}</Table.Cell>
              <Table.Cell>{history.hrCentral}</Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>

      </Table>
    </React.Fragment>

  )

}

export default NewHireTable;