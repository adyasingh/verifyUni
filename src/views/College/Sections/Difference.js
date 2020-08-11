import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
import PublicIcon from '@material-ui/icons/Public';
import ScheduleIcon from '@material-ui/icons/Schedule';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import CollectionsBookmarkIcon from '@material-ui/icons/CollectionsBookmark';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function Difference() {
    const classes = useStyles();
    return (

        <div>
        
            <div className={classes.sections}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2 className={classes.title}>Why Us?</h2>

                        
                    </div>
          <GridContainer>
           
          <GridItem xs={12} sm={12} md={4} >
            <InfoArea
              title="Worldwide Experience"
              description="Our team’s past and ongoing collective experiences across diverse global backgrounds enables us to provide college counselling and career guidance to our clients at various stages of their academic and professional lives."
              icon={PublicIcon}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea 
              title="Certified College Counsellors"
              description="Our consultants received their College Admissions training from the preeminent UC Berkeley College Admissions Planning program.  All are certified College Admissions Planners."
              icon={VerifiedUser}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Professional and Ethical"
              description="All our consultants belong to professional College Admission associations such as the Intl. Assoc. for College Admission Counseling and WACAC  and adhere to the ethical principles and practices put forth by the NACAC."
              icon={Fingerprint}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Current"
              description="As part of our professional obligation to our clients our consultants stay up to date on all the latest trends and developments in the College Admissions world by attending conferences and workshops and touring schools, so you can be assured the information you receive is correct."
              icon={ScheduleIcon}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Business and Educational Experience"
              description="With backgrounds in marketing, counseling, research and public relations, our consultants bring a variety of skills sets that serve our clients well."
              icon={CollectionsBookmarkIcon}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Personal Experience"
              description="We all have personal experience going through the college application process with our own children and are sensitive to the challenges and opportunities and how to deal with the roadblocks as they arise."
              icon={SupervisedUserCircleIcon}
              iconColor="rose"
              vertical
            />
          </GridItem>
        </GridContainer>
                </div>
            </div>

            
        </div>
       

    )

}