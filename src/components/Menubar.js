import React from 'react';
import Button from '@mui/material/Button';
import Allcards from './Allcards';
import { useState } from 'react';
import TextField from "@mui/material/TextField";
import "../App.css";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


export default function Menubar() {
  const [value, setValue] =useState("all");
  const [isActive1, setIsActive1] = useState(true);
  const [isActive2, setIsActive2] = useState(false);
  
  const [inputText, setInputText] = useState("");
  let inputHandler = (e) => {
    // console.log(e.target.value)
    setInputText(e.target.value);
  };
  
  const [sortOrder, setSortOrder] = useState('asc');

  const handleChangeSelect = (event) => {
    setSortOrder(event.target.value);
  };


  return (
    
    <>
    <Button style={{
          backgroundColor: isActive1 ? '#8df7c6' :''
          
        }} size="large" variant="text" onClick={()=>{setValue('all'); setIsActive1(1);setIsActive2(0); }}>
          All
          </Button>


    <Button style={{
          backgroundColor: isActive2 ? '#8df7c6':'',
          
        }} size="large" variant="text" onClick={()=>{setValue('fav'); setIsActive1(0);setIsActive2(1); }}>Favourite</Button>

<div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          onChange={inputHandler}
          label="Search"
        />
      </div>

      <FormControl sx={{ minWidth: 300 }} className="sortbar">
        <Select
          value={sortOrder}
          onChange={handleChangeSelect}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value={"asc"}>Oldest</MenuItem>
          <MenuItem value={"desc"}>Newest</MenuItem>
          
        </Select>
       
      </FormControl>


    <hr />

    <Allcards value={value} input={inputText} order={sortOrder} />

    
</>

  );
}