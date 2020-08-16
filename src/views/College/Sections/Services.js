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
                                         tabButton: "Step 1",
                                         tabIcon: ArrowDownward,
                                         tabContent: (
                                            <span>
                                                    <li>Understanding student profile.</li>
                                                    <br />
                                                    <li>Review of High School Profile and Standardized testing.</li>
                                                    <br />
                                                    <li>Assistance with High School course selection, if required.</li>
                                                    <br />
                                                    <li>Suggestions on Extracurricular and Community Service Activities.</li>
                                                </span>
                                         )
                                     },

                                     {
                                        tabButton: "Step 2",
                                        tabIcon: ArrowDownward,
                                        tabContent: (
                                            <span>
                                            <li>Discussing and evaluating student and family’s higher education goals.</li>
                                            <br />
                                            <li>Development of a prospective college list based on the student’s interests and accomplishments.</li>
                                            <br />
                                            <li>Advice on how to maximize ‘demonstrated interest.'</li>
                                        </span>
                                        )
                                    },

                                    {
                                        tabButton: "Step 3",
                                        tabIcon: ArrowDownward,
                                        tabContent: (
                                            <span>
                                            <li>Preparing a timeline, which involves a review of all application materials and deadlines.</li>
                                            <br />
                                            <li>Essay brainstorming, drafting, review and revision.</li>
                                            <br />
                                            <li>Guidance on resume development.</li>
                                        </span>
                                        )
                                    },
                                    {
                                        tabButton: "Step 4",
                                        tabIcon: ArrowDownward,
                                        tabContent: (
                                            <span>
                                            <li>Guidance on Interview strategies.</li>
                                            <br />
                                            <li>Navigating acceptances and college decisions.</li>
                                            <br />
                                            <li>Suggesting strategies for waitlist and deferred admissions.</li>
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


            <div className={classes.sections}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2 className={classes.title} style={{alignSelf:"center", alignContent:"center"}}>Services</h2>
                        <h4 className={classes.subtitle} style={{fontWeight:"bold"}}>Comprehensive Package</h4>
                        <GridContainer xs={12} sm={12} md={8} lg={12}>
                            <GridItem xs={12} sm={12} md={12} lg={9}>
                                <NavPills
                                    color="rose"
                                    horizontal={{
                                        tabsGrid: { xs: 12, sm: 7, md: 6},
                                        contentGrid: { xs: 12, sm: 6, md: 6 }
                                    }}
                                    tabs={[
                                        {
                                            tabButton: "Step 1 - Initial Assessment",
                                            tabIcon: ArrowForwardIcon,
                                            tabContent: (
                                                <span>
                                                    <li>Understanding student profile.</li>
                                                    <br />
                                                    <li>Review of High School Profile and Standardized testing.</li>
                                                    <br />
                                                    <li>Assistance with High School course selection, if required.</li>
                                                    <br />
                                                    <li>Suggestions on Extracurricular and Community Service Activities.</li>
                                                </span>
                                            )
                                        },
                                        {
                                            tabButton: "Step 2 - Guidance of Building a College List",
                                            tabIcon: ArrowForwardIcon,
                                            tabContent: (
                                                <span>
                                                    <li>Discussing and evaluating student and family’s higher education goals.</li>
                                                    <br />
                                                    <li>Development of a prospective college list based on the student’s interests and accomplishments.</li>
                                                    <br />
                                                    <li>Advice on how to maximize ‘demonstrated interest.'</li>
                                                </span>
                                            )
                                        },
                                        {
                                            tabButton: "Step 3 - Guidance on All Aspects of College Application",
                                            tabIcon: ArrowForwardIcon,
                                            tabContent: (
                                                <span>
                                                    <li>Preparing a timeline, which involves a review of all application materials and deadlines.</li>
                                                    <br />
                                                    <li>Essay brainstorming, drafting, review and revision.</li>
                                                    <br />
                                                    <li>Guidance on resume development.</li>
                                                </span>
                                            )
                                        },
                                        {
                                            tabButton: "Step 4 - Guidance on post-College Application",
                                            tabIcon: ArrowForwardIcon,
                                            tabContent: (
                                                <span>
                                                    <li>Guidance on Interview strategies.</li>
                                                    <br />
                                                    <li>Navigating acceptances and college decisions.</li>
                                                    <br />
                                                    <li>Suggesting strategies for waitlist and deferred admissions.</li>
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
}

            <div style={{marginLeft:"12vw"}}>
                <h4 className={classes.subtitle} style={{fontWeight:"bold"}}>Hourly Package</h4>
                <span style={{ fontSize: "16px",fontWeight: "bold", fontFamily:"sans-serif "}}>
                    <li>Basic guidance and information on colleges and admission processes as stated above</li>
                    <br />
                    <li>Help with personal statements/ essays</li>
                    <br />
                 
                </span>

            </div>
            <div style={{marginLeft:"12vw"}}>
            <h4 className={classes.subtitle} style={{fontWeight:"bold", paddingBottom:"5vh"}}>Price upon request</h4>
            </div>


        </div >



    )

}