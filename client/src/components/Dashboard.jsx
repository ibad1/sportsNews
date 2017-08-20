import React, { PropTypes } from 'react';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';


const Dashboard = ({ secretData }) => (
  
<div>
  <Card className="container">
    <CardTitle
      title="Dashboard"
      subtitle="You should get access to this page only after authentication."
    />

    {secretData && <CardText style={{ fontSize: '16px', color: 'green' }}>{secretData}</CardText>}
  </Card>


  <Card className="container">
	  	<CardTitle title="Add Article to DB"/>


	  	<RadioButtonGroup name="catagories" defaultSelected="not_light" style={{display:'block'}}>
      	<RadioButton 
      	value="NFL"
        label="NFL"
        style={{marginBottom: '16px', textAlign: 'left',width: '30%' }}
      />
        <RadioButton 
      	value="NBA"
        label="NBA"
        style={{marginBottom: '16px', textAlign:'left',width: '30%' }}
      />
        <RadioButton 
      	value="MLB"
        label="MLB"
        style={{marginBottom: '16px', textAlign:'left', width: '30%' }}
      />

      </RadioButtonGroup>



	    <TextField style={{border:"solid, 10px, black"}}
	      hintText="Article Name"
	      floatingLabelText="Article Name"
	      floatingLabelFixed={true}
	    />
	    <br />
	    <TextField 
	      hintText="Article Author"
	      floatingLabelText="Article Author"
	      floatingLabelFixed={true}
	    />
	    <br />
	    <TextField 
	      hintText="Write a short description about the article."
	      floatingLabelText="Short Article Description"
	      floatingLabelFixed={true}
	      style={{textAlign: 'left', padding:'20px'}}
	      //floatingLabelStyle={ { transform: 'perspective(1px) scale(0.75) translate3d(2px, -28px, 0)' } }
	      multiLine={true}
	      rows={3}
	      rowsMax={10}
	    />
	    <br />
	    <TextField
	      hintText="Full Article"
	      floatingLabelText="Full Article"
	      fullWidth={true}
	      multiLine={true}
	      rows={10}
	      rowsMax={50}
	    />

	  </Card>
</div>
);

Dashboard.propTypes = {
  secretData: PropTypes.string.isRequired
};

export default Dashboard;
