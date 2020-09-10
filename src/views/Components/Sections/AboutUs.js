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
                                In today's world, a college degree has become a requirement for career advancement in just about every field. Students and working professionals need to constantly learn, unlearn, relearn, reskill and upskill to adapt to and be ready for the rapidly evolving future of education and future of work. At VerifyUni College and Career Consulting we believe that every student, regardless of race, gender or economic background, deserves the opportunity to go to college and choose a career matching with his/her interests, aptitude and skills. To that end, we provide unbiased, ethical guidance and counseling to high school/secondary school/college students who are applying to Universities/Colleges for higher studies, but unfamiliar with the complex college application process. We also provide age-appropriate advice on career selection and career development strategies that are required at every stage of life. We are a team of college counselors and career advisors working together towards that common goal of making choices about education, learning and careers an enjoyable process. We bring with us a unique and broad array of experience in all phases from across the world.
                                </h4>
                            </div>
                        </div>
                    </div>
              

                
            </div>

            
        </div >

    )

}