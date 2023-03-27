import React from 'react'
import Navbar  from '../components/Navbar'
import '../App.css';
import { useState } from 'react';
import {
  Typography,   TextField, Button,  Box
} from "@material-ui/core";
import { useNavigate} from 'react-router-dom';
import All from '../components/Allprojects';
import { Stack } from '@mui/system';
const Upload = () => {
          const [title,setTitle]=useState('');
          const [name , setName] = useState('');
          const [projects,  setProjects]=useState(All);
          const [summary, setSummary]=useState('');
          const [github,setGithub]=useState('');
          const [link,setLink]=useState('');
          const [startdate,setStartDate]=useState('');
          const [enddate,setEndDate]=useState('');
          const [description,setDescription]=useState('');
          const [image,setImage]=useState();
          const navigate = useNavigate();

          const handleTitleChange =(e)=>{
          setTitle(e.target.value);
          }

          const handleSummaryChange =(e)=>{
          setSummary(e.target.value);
          }

          const handleNameChange =(e)=>{
            setName(e.target.value);
            }
            const handleDescChange =(e)=>{
              setDescription(e.target.value);
              }
          const handleGithubChange =(e)=>{
            setGithub(e.target.value);
            }
            

          const handleLinkChange =(e)=>{
            setLink(e.target.value);
            }

            const handleStartDateChange=(e)=>{
              setStartDate(e.target.value);
            }

            const handleEndDateChange=(e)=>{
              setEndDate(e.target.value);
            }
            
            const fileChange=(e)=>{
              setImage(e.target.value);
            }

          const handleSubmit=(e)=>{
           
          let n=projects.length +1;
          const obj={id:n,title,summary,name,github,link,startdate,enddate,description,image};
          setProjects([...projects, obj]);
            console.log(projects);
            e.preventDefault();

            // navigate('/');
          }
	
return (
  <>
  <Navbar/>
 
	<div className="App">
  <Typography variant="h4">New Hackathon Submission</Typography>
	<form onSubmit={(e) => {handleSubmit(e)}}>
  

<br />

<Typography variant="h6">Title</Typography> 
 <TextField
          type="text"
          fullWidth
          style={{ margin:20}}
          variant="outlined"
          value={title}
          onChange ={(e)=> 
            {handleTitleChange(e)}}
        />
<br />


<Typography variant="h6">Summary</Typography> 
 <TextField
          type="text"
          style={{ margin:20}}
          fullWidth
          variant="outlined"
          multiline='true'
          value={summary}
          onChange ={(e)=> 
            {handleSummaryChange(e)}}
        />
<br />
<Typography variant="h6">Description</Typography> 
 <TextField
          type="text"
          style={{ margin:20}}
          fullWidth
          variant="outlined"
          multiline='true'
          value={description}
          inputProps={{
            style: {
              height: "100px",
            },

          }}
          onChange ={(e)=> 
            {handleDescChange(e)}}
        />
<br />
<Typography variant="h6">Hackathon Name</Typography> 
 <TextField
          type="text"
          fullWidth
          style={{ margin:20}}
          variant="outlined"
          value={name}
          onChange ={(e)=> 
            {handleNameChange(e)}}
        />
<br />

<Typography variant="h6">Picture</Typography> 
 <TextField
          type="file"
          
          style={{ margin:20}}
          variant="outlined"
          value={image}
          onChange ={(e)=> 
            {fileChange(e)}}
        />
<br />


<br />


<Stack direction="row">
<Typography variant="h6">Hackathon Start Date</Typography> 
 <TextField
          type="date"
          fullWidth
          style={{ margin:20 , verticalAlign:'middle'}}
          variant="outlined"
          value={startdate}
          onChange ={(e)=> 
            {handleStartDateChange(e)}}
        />


<Typography variant="h6">Hackathon End Date</Typography> 
 <TextField
          type="date"
          fullWidth
          variant="outlined"
          value={enddate}
          style={{ margin:20}}
          onChange ={(e)=> 
            {handleEndDateChange(e)}}
        />
</Stack>



<Stack direction="row">


<Typography variant="h6">Github Repo</Typography> 
 <TextField
          type="text"
          fullWidth
          style={{ margin:20 , verticalAlign:'middle'}}
          variant="outlined"
          value={github}
          onChange ={(e)=> 
            {handleGithubChange(e)}}
        />


<Typography variant="h6">Other Links</Typography> 
 <TextField
          type="text"
          fullWidth
          variant="outlined"
          value={link}
          style={{ margin:20}}
          onChange ={(e)=> 
            {handleLinkChange(e)}}
        />
</Stack>




<br />
<Button variant="contained" type='submit'>
          Upload
        </Button>

	</form>
	</div>
  </>
  )
};

export default Upload;
