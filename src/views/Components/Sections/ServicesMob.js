import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

import ArrowDownward from '@material-ui/icons/ArrowDownward';
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function Services() {
    const classes = useStyles();
    return (

        <div>

            <div className={classes.sections}>
                <div className={classes.container}>
                    <div className={classes.title}>
                        <h2 className={classes.title}>Services</h2>
                        <h4 className={classes.subtitle} style={{fontWeight:"bold"}}>Comprehensive Package</h4>
                        <GridContainer xs={12} sm={12} md={8} lg={12}>
                            <GridItem xs={12} sm={12} md={12} lg={9}>
                                <NavPills style={{paddingLeft:"0"}}
                                    color="rose"
                                    vertical={{
                                        tabsGrid: { xs: 12, sm: 6, md: 6},
                                        contentGrid: { xs: 12, sm: 6, md: 6 }
                                    }}
                                    tabs={[
                                        {
                                            
                                            tabButton: <div>Step 1</div>,
                                            tabIcon: ArrowDownward,
                                            tabContent: (
                                                <span>
                                                    <h4 style={{fontSize:"20px"}}> Initial Assessment</h4>
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
                                            tabButton: <div>Step 2</div>,
                                            tabIcon: ArrowDownward,
                                            tabContent: (
                                                <span>
                                                     <h4 style={{fontSize:"20px"}}> Guidance of Building a College List</h4>
                                                    <li>Discussing and evaluating student and family’s higher education goals.</li>
                                                    <br />
                                                    <li>Development of a prospective college list based on the student’s interests and accomplishments.</li>
                                                    <br />
                                                    <li>Advice on how to maximize ‘demonstrated interest.'</li>
                                                </span>
                                            )
                                        },
                                        {
                                            tabButton: <div>Step 3</div>,
                                            tabIcon: ArrowDownward,
                                            tabContent: (
                                                <span>
                                                     <h4 style={{fontSize:"20px"}}>Guidance on All Aspects of College Application</h4>
                                                    <li>Preparing a timeline, which involves a review of all application materials and deadlines.</li>
                                                    <br />
                                                    <li>Essay brainstorming, drafting, review and revision.</li>
                                                    <br />
                                                    <li>Guidance on resume development.</li>
                                                </span>
                                            )
                                        },
                                        {
                                            tabButton:<div>Step 4</div>,
                                            tabIcon: ArrowDownward,
                                            tabContent: (
                                                <span>
                                                     <h4 style={{fontSize:"20px"}}>Guidance on post-College Application</h4>
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

            <div style={{marginLeft:"4vw"}}>
                <h4 className={classes.subtitle} style={{fontWeight:"bold"}}>Hourly Package</h4>
                <span style={{ fontSize: "16px",fontWeight: "bold", fontFamily:"Roboto Slab"}}>
                    <li>Basic guidance and information on colleges and admission processes as stated above</li>
                    <br />
                    <li>Help with personal statements/ essays</li>
                    <br />
                 
                </span>

            </div>
            <div style={{marginLeft:"12vw"}}>
            <h4 className={classes.subtitle} style={{fontWeight:"bold"}}>Price upon request</h4>
            </div>


        </div >



    )

}