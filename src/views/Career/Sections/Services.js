import React from "react";
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function Services() {
    const classes = useStyles();
    var mob = false; 
    if (window.innerWidth<960)
      mob= true;
      

    return (
<div>
    {mob?

<div className={classes.sections}>
<div className={classes.container}>
    <div className={classes.title}>
        <h2 className={classes.title}>Services</h2>
        {/* <h4 className={classes.subtitle} style={{fontWeight:"bold"}}>Comprehensive Package</h4> */}
        <GridContainer xs={12} sm={12} md={8} lg={12}>
            <GridItem xs={12} sm={12} md={12} lg={9}>
                <NavPills
                    color="rose"
                    vertical={{
                        tabsGrid: { xs: 12, sm: 7, md: 4},
                        contentGrid: { xs: 12, sm: 6, md: 8 }
                    }}
                    tabs={[
                  
                        {
                            tabButton: "High School Students",
                            tabIcon: ArrowDownward,
                            tabContent: (
                                <span>
                                We believe career exploration is a lifelong process - it can begin as a visualization process as early as 
                                for 7th grade students to shortlisting of career streams for 11th/12th graders. 
                                Career aptitude tests and guidance are integrated at each of the above stages so that 
                                high school students can embark on the college admission process with full clarity of what lies ahead. 
                             </span>
                            )
                        },
                    ]}
                />
            </GridItem>
        </GridContainer>
    </div>
</div>
</div>
:
        <div>

            <div className={classes.sections}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2 className={classes.title}>Services</h2>
                        {/* <h4 className={classes.subtitle} style={{fontWeight:"bold"}}>Comprehensive Package</h4> */}
                        <GridContainer xs={12} sm={12} md={8} lg={12}>
                            <GridItem xs={12} sm={12} md={12} lg={9}>
                                <NavPills
                                    color="rose"
                                    horizontal={{
                                        tabsGrid: { xs: 12, sm: 7, md: 4},
                                        contentGrid: { xs: 12, sm: 6, md: 8 }
                                    }}
                                    tabs={[
                                        {
                                            tabButton: "High School Students",
                                            tabIcon: ArrowForwardIcon,
                                            tabContent: (
                                                <span>
                                                   We believe career exploration is a lifelong process - it can begin as a visualization process as early as 
                                                   for 7th grade students to shortlisting of career streams for 11th/12th graders. 
                                                   Career aptitude tests and guidance are integrated at each of the above stages so that 
                                                   high school students can embark on the college admission process with full clarity of what lies ahead. 
                                                </span>
                                            )
                                        },
                                      


                                    ]}
                                />
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>

         

        </div >
}
        </div>

    )

}