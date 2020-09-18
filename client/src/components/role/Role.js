import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const RoleSection = () => {
  const cardClick = (selectedCard) => {
    console.log(selectedCard)
  }
  return (

    <Grid centered stackable container columns={3}>
      <Grid.Column>
        <Image src='./images/manager.png' size='large' />
        <Link to='employeedirectory'><button id='btn' className='ui violet inverted fluid button large' onClick={(e) => cardClick(e.target.value)} value='manager'>Manager</button></Link>
      </Grid.Column>
      <Grid.Column>
        <Image src='./images/hrimage4.png' size='large' />
        <Link to='employeedirectory'><button className='ui violet inverted fluid button large' onClick={(e) => cardClick(e.target.value)} value='humanResource'>Human Resource</button></Link>
      </Grid.Column>
      <Grid.Column>
        <Image src='./images/payroll.png' size='large' />
        <Link to='employeedirectory'><button className='ui violet inverted fluid button large' onClick={(e) => cardClick(e.target.value)} value='payroll'>Payroll</button></Link>
      </Grid.Column>
    </Grid>





  )

}

export default RoleSection