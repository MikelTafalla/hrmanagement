import React from 'react'
import { Grid, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const formTypeSection = () => {
  
  return (

    <Grid centered stackable container columns={3}>
      
      <Grid.Column>
        <Image src='./images/hrimage4.png' size='large' />
        <Link to='terminationlistpage'><button className='ui violet inverted fluid button large'  value='terminationform'>Termination Form</button></Link>
      </Grid.Column>
      <Grid.Column>
        <Image src='./images/payroll.png' size='large' />
        <Link to='newhirelistpage'><button className='ui violet inverted fluid button large' value='newhireform'>New Hire Form</button></Link>
      </Grid.Column>
      <Grid.Column>
        <Image src='./images/manager.png' size='large' />
        <Link to='formlistpage'><button id='btn' className='ui violet inverted fluid button large' value='changeform'>Employee Change Forms</button></Link>
      </Grid.Column>
    </Grid>

  )

}

export default formTypeSection