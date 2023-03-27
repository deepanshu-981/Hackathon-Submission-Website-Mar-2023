import React from 'react';
import { makeStyles } from '@material-ui/core';
import { padding } from '@mui/system';
const useStyles = makeStyles({
    bannerimage: {
        marginTop:0,
        display:"flex",
        float:"right",
    }
  });

function Bannerimage() {
  const classes=useStyles();
  return(
        <div className={classes.bannerimage}>
     <img src="../images/Hand holding bulb 3D.png" alt="Logo"  height="250"         width="200"/>
     </div>
     );
}

export default Bannerimage;