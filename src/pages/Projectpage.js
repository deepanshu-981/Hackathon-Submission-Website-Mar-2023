import React from 'react'
import Navbar  from '../components/Navbar'
import All from '../components/Allprojects'
import { useParams } from "react-router-dom";
import ProjectCard from '../components/ProjectCard';
import '../App.css';
import Details from '../components/Details';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  bar: {
    backgroundColor:"white",
    color:"blue",
    height :"100"
  },
  logo:
  {
    marginLeft:200
  }
});
const ProjectPage = () => {
  const {id}=useParams();

  const classes=useStyles();
  return (
    <>
    
    <div  className={classes.bar}>
        <a href="/" className={classes.logo}>
        <img  src="../images/AI Planet Logo.png" alt="bug" height={60} width={100}  />      
        </a> 
      </div>


   <section >
    {All.map((e)=>{
        if(e.id==id)
    return <Details {...e}/>
    })}
    </section>
  
  
    </>
  )
}

export default ProjectPage