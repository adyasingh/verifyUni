import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";


import team1 from "assets/img/faces/team_ritu.jpg";
import team2 from "assets/img/faces/team_kindra.jpg";
import team3 from "assets/img/faces/team_barbara.jpg";
import team4 from "assets/img/faces/team_veena.jpg";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title} style={{alignSelf:"left", marginLeft:"12vw",}}>Meet Our Team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team1} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Ritu Gupta  
                <br />
                <small className={classes.smallTitle}> Certified Counsellor</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                I grew up in Malaysia and then moved to India, graduating with a degree in Architecture from the Indian 
                Institute Of Technology. Later, I lived in Singapore and India, training as an educator in the Montessori 
                and Waldorf systems, before relocating to the US where I completed my certification in College Admissions 
                and Career Planning from UC Berkeley. Living and working in Malaysia, Singapore, India and the U.S., while 
                putting two children through school and colleges across countries has given me unique perspective across 
                diverse school curricula and educational systems including the IGCSE, IB and the American high-school 
                programs. I have seen that each student's college application is unique and comes with its own promise and 
                potential. I bring empathy, practical insights and genuine commitment to help each of my students find a 
                college/ university that matches their distinctive background and interests.
                </p>
              </CardBody>
             
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team2} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Kindra Sampson
                <br />
                <small className={classes.smallTitle}> Certified Counsellor</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Prior to completing the UC Berkeley College Admissions Advising program, I’ve had a variety of 
                educational and work related experiences that serve me in my everyday work as a college counselor. 
                After graduating from UC Davis (Summa Cum Laude, Psychology and Rhetoric and Communications), 
                I completed a Masters degree in Counseling Psychology from Santa Clara University.  The education and 
                training as a counselor to teens and their families has given me insight into how to best help parents
                 and students as they face the exciting and often stressful college admissions process and the transition 
                 to adulthood. In addition to counseling, I have experience working in public relations, which honed my 
                 writing and marketing skills and at Stanford University, where I developed my research and writing skills,
                  collaborating in a project that resulted in published scientific research.  As a college counselor I 
                  have worked in both a high school setting and as an independent consultant helping students find their 
                  “best fit” schools all over the U.S.  As a mom who has been through the college application process 
                  with my own children, I know the importance of using humor, empathy and compassion in my work with 
                  students and their parents. 
                </p>
              </CardBody>
          
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team3} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Barbara Harris

                <br />
                <small className={classes.smallTitle}> Certified Counsellor</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                In addition to completing the UC Berkeley College Admissions Advising Program. I received my undergraduate 
                degrees from Pitzer College, (one of the Claremont Colleges). I also hold an MBA in International 
                Management from the Thunderbird School of Global Management (now part of ASU). I spent 20 years working in 
                the corporate world working in Senior Roles in Brand Management, managing brands such as Cover Girl 
                Cosmetics, Nestle Beverages and Dell Computers. I bring this strategic brand management viewpoint in 
                reviewing a student’s file and helping them determine the best way to approach their college admissions 
                process.
                As a stay at home Mom of two daughters I’ve volunteered extensively in the Lafayette School District 
                where I discovered the joy of working with students of all ages. I also recently completed the 
                college search process with my oldest daughter so I’ve had first-hand experience going through the process 
                as a parent. In my spare time I also work at Las Lomas High School in the College and Career Placement 
                office and volunteer as a College Placement advisor for national organizations such as Scholar Match and 
                Matchlighter.  My outside interests include tennis, hiking and being a “college trivia” nerd.


                </p>
              </CardBody>
            
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={team4} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
              Veena Singh

                <br />
                <small className={classes.smallTitle}>Advisor/Mentor </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                I have over 25 years of experience after a Postgraduate Degree in Management from Delhi University, India. 
                I was awarded the Chevening Scholarship to attend Bankers’ Program at London School of Economics and 
                Political Science, UK. I was also awarded a Scholarship by Swedish Institute to attend the Management 
                Program on Leadership and Sustainability in Stockholm and Asia.
                I have worked across Financial Institutions, Non-Bank Finance Companies and Startups in the areas of 
                Corporate Finance, Strategy, Operations and Business Restructurings, travelling extensively across Asia and 
                Europe. I have also worked as a Finance Faculty in a Business School in India where I was Head of Student 
                Affairs and also responsible for organizing placements, internships and short term projects for students.  
                My experience in the Corporate and Education sector equips me to guide, mentor and steer students and 
                working professionals on their admission and career paths.

                </p>
              </CardBody>
            
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
