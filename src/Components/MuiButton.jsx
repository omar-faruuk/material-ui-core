import React, { useState } from 'react';
import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { AlarmAdd, Cancel, Delete, Error, Fingerprint, FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';

const MuiButton = () => {
    const [formats, setFormats] = useState(null)
  
    const handleFormatChanges =(e, updateFormats)=>{
        setFormats(updateFormats)
    }
    return (
        <>
            <Stack direction="row" justifyContent="center" spacing={5} mt={10}>
                <Button variant='text'>text</Button>
                <Button variant='contained'>contained</Button>
                <Button variant='outlined' color='error'>outline</Button>
            </Stack>

            {/* button size */}
            <Stack justifyContent="center" direction="row" spacing={5} m={2}>
                <Button variant='contained' size='small'>small</Button>
                <Button variant='contained' size='medium'>medium</Button>
                <Button variant='contained' color='error' size='large'>large</Button>
            </Stack>

            {/* with icon */}
            <Stack justifyContent="center" direction="row" spacing={5} m={2}>
                <Button variant='contained' startIcon={<SendIcon />}>Send</Button>
                <Button variant='contained' endIcon={<SendIcon />}>Send</Button>
            </Stack>

            {/* icon button */}
            <Stack justifyContent="center" direction="row" spacing={5} m={2}>
                <IconButton color='primary'>
                    <Delete />
                </IconButton>
                <IconButton color='success'>
                    <AlarmAdd />
                </IconButton>
                <IconButton color='error'>
                    <Cancel />
                </IconButton>
                <IconButton color='primary'>
                    <Fingerprint />
                </IconButton>
                <IconButton color='warning'>
                    <Fingerprint />
                </IconButton>
            </Stack>

            {/* button group */}
            <Stack justifyContent="center" direction="row" m={2}>
                <ButtonGroup variant='contained'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Stack>

            <Stack justifyContent="center"  direction="row" m={2}>
                <ButtonGroup orientation='vertical' color='error' variant='contained'>
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Stack>

            {/* toggle button group */}
            <Stack justifyContent="center"  direction="row" m={2}>
                <ToggleButtonGroup color='info' exclusive size="small" value={formats} onChange={handleFormatChanges}>
                    <ToggleButton value="bold"><FormatBold/></ToggleButton>
                    <ToggleButton value="italic"><FormatItalic/></ToggleButton>
                    <ToggleButton value="underline"><FormatUnderlined/></ToggleButton>
                </ToggleButtonGroup>
            </Stack>
        </>
    );
};

export default MuiButton;