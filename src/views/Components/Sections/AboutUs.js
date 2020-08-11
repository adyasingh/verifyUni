import React from "react";
// plugin that creates slider
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function AboutUs() {
    const classes = useStyles();
    return (

        <div>
            
                <div className={classes.sections}>
                    <div className={classes.container}>
                        <div className={classes.title}>
                            <h2 className={classes.title}>Mission Statement</h2>
                            <div className={classes.title}>
                                <h4 className={classes.title}>
                                    In today's world, a college degree has become a requirement for career advancement 
                                    in just about every field. At VerifyUni College and Career Consulting we believe that every student, 
                                    regardless of race, gender or economic background, deserves the opportunity to go to college. 
                                    To that end, we provide unbiased, ethical guidance and counseling to 
                                    high school/secondary school students who are applying to Universities/Colleges, but
                                    unfamiliar with the complex college application process. We are a team of college 
                                    counselors working together towards that common goal. We bring with us a unique and broad 
                                    array of experience in all phases.
                                </h4>
                            </div>
                        </div>
                    </div>
              

                
            </div>

            
        </div >

    )

}