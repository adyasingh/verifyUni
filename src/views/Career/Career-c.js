import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";

import ContactUs from "./Sections/ContactUs.js";
import Services from "./Sections/Services-c.js";



import styles from "assets/jss/material-kit-react/views/components.js";
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
      <div className={classNames(classes.main, classes.mainRaised)}>
      <Parallax image={require("assets/img/bg4-dark.jpg")} style={{height:"30vh"}}>
      <div className={classes.container} style={{justifyContent:"center", height:"30vh"}}>
          <GridContainer style={{textAlign:"center"}}>
            <GridItem>
              <div className={classes.brand}>
              {mob?
                <h3 className={classes.subtitle} style={{ marginTop:"15vh",fontSize:"30px", fontWeight: "300"}}> 
                Career Guidance for College Students</h3>
                :
                <h3 className={classes.subtitle} style={{ marginTop:"15vh",fontSize:"50px", fontWeight: "400"}}> 
                Career Guidance for College Students</h3>
              }
              </div>
            </GridItem>
          </GridContainer>
      </div>
      </Parallax>
      </div>
      <div className={classNames(classes.main, classes.mainRaised)}>
     <CareerInfo/>
    <Services/>
     <ContactUs/>
      </div>
   
    </div>
  );
}
