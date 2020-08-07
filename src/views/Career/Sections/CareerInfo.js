import React from "react";
// plugin that creates slider
import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function CareerInfo() {
    const classes = useStyles();
    return (

        <div>
            
                {/* <div className={classes.sections}> */}
                    <div className={classes.container} style={{paddingTop:"100px"}}>
                        <div className={classes.title}>
                            <h2 className={classes.title}>Career Guidance</h2>
                            <div className={classes.title}>
                                <h4 className={classes.title}>
                                In today’s complex world with a myriad of career choices and advent of new pathways, it 
                                is tough for students, parents and professionals to keep themselves updated on emerging 
                                trends.   Often students get confused in deciding a career path due to lack of clarity of 
                                what each option entails and a wrong career choice can lead to psychological and financial 
                                impact going forward. 
                                </h4>
                            </div>
                        </div>
                    {/* </div> */}
              

                
            </div>

            
        </div >

    )

}