import React, {useEffect, useState} from 'react'
import { Icon, Button, Table } from 'semantic-ui-react'
import "./formlist.css"
import { Link } from 'react-router-dom'
import API from "../../utils/API"

const FormTable = () => {
    //State to store information from the API call populateHistoryReport
    const[dbInfo, setDbInfo] = useState([])

    const EmployeeLSId = JSON.parse(localStorage.getItem("EmployeeId"))
    useEffect(() => {
        const EmployeeId = JSON.parse(localStorage.getItem("EmployeeId"))
        populateHistoryReport(EmployeeId);
      }, [])
    
    const populateHistoryReport= (id) => {
        API.findReport(id)
          .then(res => setDbInfo(res.data))
          .catch(err => console.log(err));
      }

      //Set id in looking storage to be able to access it after update refresh
    const storeDbId = (e) => {
    const dbId = e.target.value
    localStorage.setItem("DBid", JSON.stringify(dbId))
    }
    return (

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
                {dbInfo.map(history => (
                <Table.Row key={history._id}>
                    <Table.Cell collapsing>
                    <Link to='employeechangeForm'><Button color='violet' type="submit" onClick={(e) =>   storeDbId(e)} value={history._id}>View Form</Button></Link>
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


    )

}

export default FormTable;

