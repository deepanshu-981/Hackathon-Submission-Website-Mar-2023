import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { makeStyles } from "@material-ui/core/styles";
import { Button } from '@mui/material';
import Bannerimage from './Bannerimage';
import { useNavigate } from 'react-router-dom';
const useStyles = makeStyles({
    banner: {
        display:"flex",
        margin:20,
        padding:100,

        color:"white",
      backgroundImage: "url('../images/waves.png')",
      backgroundColor:"#304c5e",
    
    },
  });

const Banner = () => {
    const classes=useStyles();
    const navigate = useNavigate();
  return (
    <>
    
    <Container maxWidth="xl" className={classes.banner }>
    <Bannerimage/>
         <Typography variant="h3">Hackathon Submission</Typography>
        <br />
         <Typography variant="h5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi ut perspiciatis placeat quae ducimus eius possimus explicabo porro corporis deserunt ipsum, deleniti quasi iusto eaque cumque nulla fugit facilis optio</Typography>
        <br />

         <Button variant="contained"  onClick={()=>{ 
      navigate(`/Upload`)}}>Upload Submission</Button>
         
        

        




    </Container>
    
    
    </>
  )
}

export default Banner
