/*eslint-disable*/
import React from "react";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";


// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const windowsScrollTop = window.pageYOffset;
  var mob = false; 
    if (window.innerWidth<960)
      mob= true;
    

  return (
    <List className={classes.list} >
      {mob?
      <ListItem className={classes.listItem}>

<IconButton style={{marginLeft:"4vw"}} ><Link to="/" > 
        <HomeIcon style={{color:"black", backgroundColor:"white"}}></HomeIcon>
          </Link></IconButton>
      <CustomDropdown
          noLiPadding
          buttonText="College Guidance"
          hoverColor="rose"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
            
          }}
          dropdownList={[
            <Link to="/college-hs" className={classes.dropdownLink}>
              For high school students
            </Link>,
             <Link to="/college-c" className={classes.dropdownLink}>
             For college students
           </Link>, 
          
          ]}
        />
   
        <CustomDropdown
          noLiPadding
          buttonText="Career Guidance"
          hoverColor="rose"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
            
          }}
          dropdownList={[
          
             <Link to="/career" className={classes.dropdownLink}>
             Career Guidance
           </Link>, 
          
          ]}
        />
       

     
     
        
      </ListItem>
      :
      <ListItem >
      <CustomDropdown
          noLiPadding
          buttonText="College Guidance"
          hoverColor="rose"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
            
          }}
          style={{backgroundColor:"black"}}
          dropdownList={[
            <Link to="/college-hs" className={classes.dropdownLink}>
              For high school students
            </Link>,
             <Link to="/college-c" className={classes.dropdownLink}>
             For college students
           </Link>, 
          
          ]}
        />
   
        <CustomDropdown
          noLiPadding
          buttonText="Career Guidance"
          hoverColor="rose"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
            
          }}
          dropdownList={[
          
             <Link to="/career" className={classes.dropdownLink}>
             For high school students
           </Link>, 
            <Link to="/career-c" className={classes.dropdownLink}>
            For college students
          </Link>, 
           <Link to="/career-p" className={classes.dropdownLink}>
           For professionals
         </Link>, 
          
        
          ]}
        />
       

     

        <IconButton ><Link to="/" > 
        <HomeIcon style={{color:"black", backgroundColor:"white"}}></HomeIcon>
          </Link></IconButton>
        
      </ListItem>}
     
    
  
    </List>
  );
}
