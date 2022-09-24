
import { Box, InputAdornment, MenuItem, Stack, TextField } from '@mui/material';
import { useState } from 'react';


const MuiTextField = () => {
  const [names, setNames] = useState([]);
  console.log(names)
  const handleChanges =(e)=>{
    const value =  e.target.value;
    setNames(typeof value === "string" ? value.split(",") : value)
  }
    return (
        <>
        <Stack justifyContent="center" direction="row" spacing={2} m={5}>
          <TextField label="first name" />
          <TextField label="last name" />
          <TextField label="Email" type="email" InputProps={{
            startAdornment: 
            (<InputAdornment position='start'>@</InputAdornment>),
          }}/>
          <TextField label="password" helperText="Don't share this with anyone!" type="password"/>
        </Stack>

        <Box margin="0 auto"  width="200px">
          <TextField SelectProps={{multiple: true}} value={names} onChange={handleChanges} color="error" fullWidth label="select name" select>
            <MenuItem value="omar">Omar faruq</MenuItem>
            <MenuItem value="kamor">Kamor</MenuItem>
            <MenuItem value="asif">Asif</MenuItem>
            
          </TextField>
        </Box>
        </>
    );
};

export default MuiTextField;