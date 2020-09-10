import React from "react";
// @material-ui/core components
import IconButton from '@material-ui/core/IconButton';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import TextField from '@material-ui/core/TextField';
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import InputAdornment from '@material-ui/core/InputAdornment';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';

// const useStyles = makeStyles(styles);
export default function ContactUs() {
  //   const classes = useStyles();
  return (
    <div >
      <GridContainer >
        <GridItem xs={12} sm={6} md={6}>
          <Card style={{ marginLeft: "10vw", width: "80vw" }}>
            <CardHeader color="rose" >
              <h3 style={{ fontWeight: "400", marginBottom:"15px" }}>Contact Us</h3>
            </CardHeader>
            <CardBody>
              <div style={{ display: "inline-block" }}>

                <TextField
                  
                  id="email"
                  variant="outlined"
                  defaultValue="verifyuni@gmail.com"
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),

                  }}
                  style={{ marginBottom: "20px",marginRight: "20px", fontFamily: "sans-serif", color: "#000000", fontWeight: "600" }}
                />
                <br></br>
               
                <TextField
                  
                  id="phone"
                  variant="outlined"
                  defaultValue="+91 98180 98463"
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),

                  }}
                  style={{marginBottom: "20px", marginRight: "20px", fontFamily: "sans-serif", color: "#000000", fontWeight: "600" }}
                />
                 <TextField
                  
                  id="phone2"
                  variant="outlined"
                  defaultValue="+1 (925) 395 6217"
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <PhoneIcon />
                      </InputAdornment>
                    ),

                  }}
                  style={{marginBottom: "20px", marginRight: "20px", fontFamily: "sans-serif", color: "#000000", fontWeight: "600" }}
                />
               
                 <TextField
                  
                  id="location1"
                  variant="outlined"
                  multiline
                  defaultValue="South Extension - Part I, New Delhi, India"
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),

                  }}
                  style={{marginBottom: "20px",  width: "80%",marginRight: "20px", fontFamily: "sans-serif", color: "#000000", fontWeight: "600" }}
                />
                 <TextField
                  
                  id="location2"
                  variant="outlined"
                  multiline
                  defaultValue="San Francisco, California, USA"
                  InputProps={{
                    readOnly: true,
                    startAdornment: (
                      <InputAdornment position="start">
                        <LocationOnIcon />
                      </InputAdornment>
                    ),

                  }}
                  style={{ marginBottom: "20px", width: "80%",marginRight: "20px", fontFamily: "sans-serif", color: "#000000", fontWeight: "600" }}
                />
                <br></br>


                <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/VerifyUni">
                  <IconButton> <FacebookIcon fontSize="large"  style={{color:"#e91e63"}}></FacebookIcon></IconButton>
                
                </a>

                <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/UniVerif">
                  <IconButton><TwitterIcon fontSize="large" style={{color:"#e91e63"}}></TwitterIcon></IconButton>
                  
                </a>
              </div>


            </CardBody>


          </Card>
        </GridItem>
      </GridContainer>
    </div>

  );
}
