import * as React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  bar: {
    backgroundColor:"white",
    height :"100"
  },
  logo:
  {
    marginLeft:200
  }
});

function Navbar() {
const classes=useStyles();
  return (
  
      
      <div  className={classes.bar}>
        <a href="/" className={classes.logo}>
        <img  src="./images/AI Planet Logo.png" alt="bug" height={60} width={100}  />      
        </a> 
      </div>
      
   
  );
}
export default Navbar;