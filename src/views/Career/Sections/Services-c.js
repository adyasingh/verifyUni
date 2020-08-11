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
                                            tabButton: "College Students",
                                            tabIcon: ArrowDownward,
                                            tabContent: (
                                                <span>
                                                   Career Guidance activities include assisting students in deciding whether to go in for further studies or try to gain work experience. For Higher Education aspirants, the selection of courses needs to be aligned with their ultimate career goal. For those choosing to enter the workforce, we help in shortlisting from a range of options – jobs, internships, industry projects, startups. Additional courses are suggested to build the interdisciplinary skills of students, on a case-by-case basis.
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
                                            tabButton: "College Students",
                                            tabIcon: ArrowForwardIcon,
                                            tabContent: (
                                                <span>
                                                   Career Guidance activities include assisting students in deciding whether to go in for further studies or try to gain work experience. For Higher Education aspirants, the selection of courses needs to be aligned with their ultimate career goal. For those choosing to enter the workforce, we help in shortlisting from a range of options – jobs, internships, industry projects, startups. Additional courses are suggested to build the interdisciplinary skills of students, on a case-by-case basis.
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