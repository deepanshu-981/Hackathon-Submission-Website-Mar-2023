import React from 'react'
import All from './Allprojects'
import ProjectCard from './ProjectCard';
import { makeStyles } from '@mui/styles';
const useStyles=makeStyles({
    cards:{
      padding:20,
      display:"flex",
      height: 'auto',
      flexWrap:'wrap',
      cursor:'pointer'
    }
  })
const Allcards = (value,input,order) => {
    const classes=useStyles();
  //  console.log(value.value);
  //  console.log(value.input);
  //  console.log(value.order);
  console.log(All);
    if(value.order==='asc')
    {
      All.sort(function(a,b){
        return a.enddate.localeCompare(b.enddate);
    })
    
    }
    else 
    {
      All.sort(function(a,b){
        return b.enddate.localeCompare(a.enddate);
    })
    
    }
  console.log(All);
     return (

    <section className={classes.cards} >
    {All.map((e)=>{
      
        if(value.value==='all' && e.title.includes(value.input))
    return <ProjectCard {...e}/>
    else {
        if(e.favourite==1 && e.title.includes(value.input))  return <ProjectCard {...e}/>
        else return <></>}
    }

    )}
    </section>
  )

}

export default Allcards