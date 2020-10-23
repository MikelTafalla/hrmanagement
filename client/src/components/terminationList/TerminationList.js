import React, { useEffect, useState } from 'react'
import { Icon, Button, Table } from 'semantic-ui-react'
import "./terminationlist.css"
import { Link } from 'react-router-dom'
import API from "../../utils/API"

const TerminationTable = () => {
  //State to store information from the API call populateHistoryReport
  const [dbtermination, setDbTermination] = useState([])

  useEffect(() => {
    const EmployeeId = JSON.parse(localStorage.getItem("EmployeeId"))
    terminationReport(EmployeeId);

  }, [])

  const terminationReport = (id) => {
    API.findTermination(id)
      .then(resp => setDbTermination(resp.data))
      .catch(err => console.log(err))
  }

  //Set id in looking storage to be able to access it after update refresh
  const storeDbId = (e) => {
    const dbId = e.target.value
    localStorage.setItem("DBid", JSON.stringify(dbId))
  }

  //Create function to divide database in two arrays. One would contain all the objects whose status is open and the other would contain the ones with status closed
  let terminationOpen = [];
  let terminationClosed = [];
  const divideTerminationDb = () => {
    if (dbtermination.length > 0) {
      //if key in object contains true then push object to openStatus. else push to closedStatus
      terminationOpen = dbtermination.filter(status => status.open === true)
      terminationClosed = dbtermination.filter(status => status.open === false)

    }

  }
  divideTerminationDb()

  const clicked = JSON.parse(localStorage.getItem("Click"))
  if (clicked === "clicked") {
    localStorage.setItem("Click", JSON.stringify(""))
    window.location.reload()

  }
 
  return (
    <React.Fragment>
      <Link to='employeedirectory'><Button className='ui violet inverted' >Go To Employee Directory</Button></Link>

      {terminationOpen.map(item => (

        <div key={item._id} id='formbtn'>
          <Link to='existingseparationform'><Button size='large' color='violet' onClick={(e) => storeDbId(e)} value={item._id}><Icon name='file' /> Continue with Separation Form In Progress</Button></Link>
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

          {terminationClosed.map(history => (
            <Table.Row key={history._id}>

              <Table.Cell collapsing>
                <Link to='existingseparationform'><Button color='violet' type="submit" onClick={(e) => storeDbId(e)} value={history._id}>View Form</Button></Link>
              </Table.Cell>
              <Table.Cell>{history.employee_name}</Table.Cell>
              <Table.Cell>Separation Form</Table.Cell>
              <Table.Cell>{history.submissionDay} / {history.submissionMonth} / {history.submissionYear}</Table.Cell>
              <Table.Cell>{history.hrCentral}</Table.Cell>
            </Table.Row>
          ))}

        </Table.Body>
        <Table.Footer fullWidth>
        <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan='4'>
              <Link to='separationform'> <Button
                floated='right'
                icon labelPosition='left'
                size='small'
                color='violet' value="">

                <Icon name='user' /> Create Termination Form
                        </Button> </Link>
            </Table.HeaderCell>
          </Table.Row>
          </Table.Footer>

      </Table>
    </React.Fragment>

  )

}

export default TerminationTable;