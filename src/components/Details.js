import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';
import Edit from "@mui/icons-material/Edit";
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import DateRangeIcon from '@mui/icons-material/DateRange';
const useStyles = makeStyles({
    banner: {
        
        margin:5,
     paddingBlock:50,
    paddingInlineStart:50,
        color:"white",
      backgroundColor:"#304c5e",
        
    },
    desc:{
        margin:5,
        paddingBlock:20,
       paddingInlineStart:100,
       display:"flex",
       fontSize:18,
    },
    pic:{
        height:"200px",
        width:"200px",
        borderRadius:15,
        display:'inline',
    },
    headerr:{
        display:'flex',
        flexDirection:'row',
        padding:50,
    },
    title:{
        
        padding:70,
    }
    ,para:{
       
        width:'70%',
        float:'left'
    },
    sidecol:{
        width:'25%',
        float:"right",
        display:'flex',
        flexDirection:'column',
        // textAlign:'center'
        
    }
  });
const Details = ({id,title,name,github,link,summary,description,image,startdate,enddate} ) => 
{
    const classes=useStyles();
  return (
    <>
    <Container maxWidth="xl" className={classes.banner }>
    <Stack direction="column" spacing={2} style={{float:"right" ,padding:100}}>
      <Button variant="contained" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" ><Edit/>
        Edit
      </Button>
      </Stack>

    <div className={classes.headerr}>
    <img className={classes.pic} src={image} alt="jj" />
         <Typography className={classes.title} variant="h4">{title}</Typography>

         
         </div>
       

      
         <Typography variant="h5">{summary}</Typography>


       


    </Container>
    
    <Container maxWidth="xl" className={classes.desc }>
    <h4>Description</h4> 
   <p className={classes.para}>
   
       {description}

        </p>

        <p className={classes.sidecol}>
           Hackathon
           <br />
           <br />
          <b>{name}</b>
           <br />
       <div> <DateRangeIcon/>  {startdate} to {enddate}</div> 
           <br />
           <br />
           
           <Button variant="outlined" ><GitHubIcon/>
        Github
      </Button>
      <br />
      <Button variant="outlined" ><LaunchIcon/>
        Other Link
      </Button>
        </p>

        </Container>
    </>
  )
}

export default Details
