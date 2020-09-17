import React from 'react'
import { Icon, Button, Table } from 'semantic-ui-react'
import "./formlist.css"
import { Link } from 'react-router-dom'

const FormTable = () => {
    const openBtn = (selectedUser) => {
        console.log(selectedUser)
    }
    return (


        <Table compact celled definition>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Created Date</Table.HeaderCell>
                    <Table.HeaderCell>Created By</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                <Table.Row>
                    <Table.Cell collapsing>
                        <Button color='violet' onClick={(e) => openBtn(e.target.value)} value='open'>View Form</Button>
                    </Table.Cell>
                    <Table.Cell>John Lilki</Table.Cell>
                    <Table.Cell>September 14, 2013</Table.Cell>
                    <Table.Cell>jhlilk22@yahoo.com</Table.Cell>
                </Table.Row>
            </Table.Body>

            <Table.Footer fullWidth>
                <Table.Row>
                    <Table.HeaderCell />
                    <Table.HeaderCell colSpan='4'>
                       <Link to='employeechangeform'> <Button 
                            floated='right'
                            icon labelPosition='left'
                            size='small'
                            color='violet' onClick={(e) => openBtn(e.target.value)} value='EmployeeID'>
                      
                            <Icon name='user' /> Create a New Form
                        </Button> </Link>
                    </Table.HeaderCell>
                </Table.Row>
            </Table.Footer>
        </Table>


    )

}

export default FormTable

// function Table(props) {
//     return (
//         <table className="table table-light">
//             <thead>
//                 <tr>
//                     <th scope="col">Name<span onClick={props.sortedUsers}><i className={props.className} id="name"></i></span></th>
//                     <th scope="col">Created Date<span onClick={props.sortedUsers}><i className={props.className} id="phone"></i></span></th>
//                     <button  className='ui violet inverted fluid button '>View<span onClick={props.sortedUsers}><i className={props.className} id="email"></i></span></button>
//                 </tr>

//             </thead>
//             {/* <tbody>
//                 {props.users.map(user => (
//                     <tr key={user.phone}>
//                         <td><img src={user.picture.large} alt="user" /></td>
//                         <td>{user.name.last}, {user.name.first}</td>
//                         <td>{user.phone}</td>
//                         <td>{user.email}</td>
//                         <td>{user.location.country}</td>
//                     </tr>
//                 ))}
//             </tbody> */}
//         </table >
//     )
// };

// export default Table;