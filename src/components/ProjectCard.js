import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from '@mui/styles';
import {Link, Routes, Route, useNavigate} from 'react-router-dom';
const useStyles=makeStyles({
  acard:{
    padding:"20px",
    display:"flex",
      margin: "20px",
      float: "left",
      flexWrap:'wrap',
      borderRadius:'15px'
  }
})


const ProjectCard = ({id,title,name,github,link,summary,image} ,{value}) => {
  const navigate = useNavigate();
  const classes=useStyles();
  return (
  
    <>
    <section className={classes.acard} onClick={()=>{ 
      // alert("you clicked number " +`${id}`); 
      navigate(`/Projectpage/${id}`)}}>
      
     <Card sx={{ maxWidth: 300}}>
     <CardMedia
        sx={{ height: 200, width:300 }}
        image={image}
      />
    <CardActionArea>
     
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {id}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
      </CardContent>
    </CardActionArea>
  </Card>
  </section>
    </>
  )
}

export default ProjectCard