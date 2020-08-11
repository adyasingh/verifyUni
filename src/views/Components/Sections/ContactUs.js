import React from "react";
// @material-ui/core components

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import TextField from '@material-ui/core/TextField';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js";

// const useStyles = makeStyles(styles);

export default function ContactUs() {
//   const classes = useStyles();
  return (
      <div >
        <GridContainer >
          <GridItem xs={12} sm={6} md={6}> 
            <Card style={{marginLeft:"10vw", width:"80vw"}}>
                <CardHeader color="rose" >
                  <h4>Contact Us</h4>
                </CardHeader>
                <CardBody>
                <div style={{display:"inline-block"}}>
                <TextField
                    id="email"
                    label="Email"
                    variant="outlined"
                    defaultValue="verifyuni@gmail.com"
                    InputProps={{
                        readOnly: true,
                    }}
                    style={{marginRight:"20px",  marginBottom:"20px"}}
                />
                     <TextField
                    id="phone"
                    label="Phone"
                    variant="outlined"
                    defaultValue="+91 98180 98463"
                    InputProps={{
                        readOnly: true,
                    }}
                    style={{marginRight:"20px", marginBottom:"20px"}}
                />
                  <TextField
                    id="location"
                    label="Location"
                    multiline
                    variant="outlined"
                    defaultValue="South Extension - Part I, New Delhi, India"
                    InputProps={{
                        readOnly: true,
                    }}
                    style={{width:"90%"}}
                />
              
                 <TextField
                    id="location"
                    variant="outlined"
                    multiline
                    defaultValue="San Francisco, California, USA"
                    InputProps={{
                        readOnly: true,
                    }}
                    style={{width:"90%", marginTop:"10px"}}
                />
                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/VerifyUni">
                <Button color = "rose">Find us on Facebook</Button>

                </a>
                
                <a target="_blank"rel="noopener noreferrer" href="https://twitter.com/UniVerif">
                <Button color = "rose">Find us on Twitter</Button>
                </a>
                </div>
                
                
                </CardBody>
             
            
            </Card>
          </GridItem>
        </GridContainer>
      </div>
   
  );
}
