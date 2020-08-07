import React from "react";
import emailjs from 'emailjs';

// @material-ui/core components

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import TextField from '@material-ui/core/TextField';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";
import { useState } from 'react';

// const useStyles = makeStyles(styles);

export default function EmailUs() {
//   const classes = useStyles();
const [email, setEmail] = useState('');
const [name, setName] = useState('');
const [message, setMessage] = useState('');

function handleEmail(e){
    setEmail(e.target.value);
    console.log(email)
}

function handleName(e){
    setName(e.target.value);
    console.log(name)
}

function handleMessage(e){
    setMessage(e.target.value);
}
function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }
  return (
      <div >
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={6}>
            <Card>
                <CardHeader color="rose" >
                  <h4>Email Us</h4>
                </CardHeader>
                <CardBody>
                <form className="contact-form" onSubmit={sendEmail}>
                    <TextField
                        id="name"
                        label="Name"
                        variant="outlined"
                        onChange={handleName}
                        style={{marginRight:"20px",  marginBottom:"20px", width:"30vw"}}
                    />
                    <br></br>
                     <TextField
                        id="email"
                        label="Email"
                        type="email"
                        onChange={handleEmail}

                        variant="outlined"
                        style={{marginRight:"20px",  marginBottom:"20px", width:"30vw"}}
                    />
                      <TextField
                        id="message"
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={5}
                        style={{marginRight:"20px",  marginBottom:"20px", width:"40vw"}}
                        onChange={handleMessage}

                    />
                    <Button type="submit" color="rose">Submit </Button>
                  
                    </form>
               
                </CardBody>
             
            
            </Card>
          </GridItem>
        </GridContainer>
      </div>
   
  );
}
