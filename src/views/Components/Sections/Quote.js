import React from "react";
// plugin that creates slider
// import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";


import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function Quote() {
    const classes = useStyles();
    return (

        <div>
            
                {/* <div className={classes.sections}> */}
                    <div className={classes.container}>
                        <div className={classes.title}>
                            {/* <h2 className={classes.title}>Is there a secret to Admission?</h2> */}
                            <div className={classes.title}>
                                <h4 className={classes.title} style={{fontStyle:"italic"}}>
                                    "The big secret in college admission is that there is no big secret"
                                    <br></br>
                                        - Fred Hargadon, former dean of admission, Swarthmore, Stanford and Princeton
                                </h4>
                            </div>
                        </div>
                    {/* </div> */}
              

                
            </div>

            
        </div >

    )

}