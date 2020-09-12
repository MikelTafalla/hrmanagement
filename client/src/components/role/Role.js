import React from 'react'
import { Card } from 'semantic-ui-react'
import "./Role.css"
import { Link } from 'react-router-dom'

const CardColored = () => {
    const cardClick = (selectedCard) => {
        console.log(selectedCard)
    }
    return (

        

        <Card.Group centered stackable itemsPerRow={3}>
            <Link to='employeetable'><div><Card name='manager' color='blue' image={'./images/manager.png'} /><button className='ui violet inverted fluid button large' onClick={(e) => cardClick(e.target.value)} value='manager'>Management Department</button></div></Link>
            <Link to='employeetable'><div><Card name='humanResource' color='violet' image={'./images/hrimage4.png'} /><button className='ui violet inverted fluid button large' onClick={(e) => cardClick(e.target.value)} value='humanResource'>HR Department</button></div></Link>
            <Link to='employeetable'><div><Card name='payroll' color='green' image={'./images/payroll.png'} /><button className='ui violet inverted fluid button large' onClick={(e) => cardClick(e.target.value)} value='payroll'>Payroll Department</button></div></Link>
        </Card.Group>

    )

}

export default CardColored