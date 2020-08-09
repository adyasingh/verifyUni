import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import ContactUs from "./Sections/ContactUs.js";
import Services from "./Sections/Services.js";
import ServicesMob from "./Sections/ServicesMob.js";



import styles from "assets/jss/material-kit-react/views/components.js";
import logo from "assets/img/favicon.png";
import CareerInfo from "./Sections/CareerInfo.js";
const useStyles = makeStyles(styles);

export default function Career(props) {
  const classes = useStyles();
  const { ...rest } = props;

  var mob = false; 
  if (window.innerWidth<960)
    mob= true;
  return (
    <div>
      <Header
        brand="verifyuni@gmail.com"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg4.jpg")}>
      <div className={classes.container} style={{justifyContent:"center"}}>
          <GridContainer style={{textAlign:"center"}}>
            <GridItem>
              <div className={classes.brand}>
              
               <img src={logo} style={{verticalAlign: "bottom",width:"80px"}}></img>
                <h1 className={classes.title} style={{fontFamily: 'serif',  fontWeight: "500",display:"inline"}}> VerifyUni </h1>
                
                <h3 className={classes.subtitle} style={{ fontSize:"30px", fontWeight: "400"}}> 
                Career Guidance</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
     <CareerInfo/>
    {mob? <ServicesMob/> : <Services/>}
     <ContactUs/>
      </div>
   
    </div>
  );
}
