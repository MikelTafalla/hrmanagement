import React from "react";
import {Segment,Header,Image} from 'semantic-ui-react'


function HeaderTermination(props) {
  return (

    <div>
      <Segment padded='very' vertical>
        <Image centered src={'./images/hrimage3.png'} size={'tiny'} />
        <Header as='h1' textAlign='center'>{props.title}</Header>
      </Segment>

      <div className="ui equal width padded grid container inverted">
        <div className="eight wide column">
          <ul className="bold">
            <li>{props.mandatory}</li>
            <li>{props.questions}</li>
            <li>{props.phone}</li>
            <li>{props.country}</li>
          </ul>
        </div>
        <div className="sixteen wide column text"><span className="bold">Purpose:</span>{props.message}</div>
        <div className="ten wide column"> </div>

      </div>
    </div>
  )
};

export default HeaderTermination;