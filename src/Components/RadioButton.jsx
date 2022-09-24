import { Checkbox, FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Rating, Stack, Switch, Typography } from "@mui/material";
import { useState } from "react";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import styled from "@emotion/styled";
import { Box } from "@mui/system";


export default function RadioButton() {
    const [value, setValue] = useState(null)
    console.log(value)
    const handleSwitch = (e) => {
        setValue(e.target.checked)
    }
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#1A2027',


        textAlign: 'center',

    }));
    return (
        <div>
            <FormControl>
                <FormLabel id="demo-row-radio-buttons-group">Gender</FormLabel>
                <RadioGroup row name="row-radio-buttons-group" value={value} >
                    <FormControlLabel value="male" label="male" control={<Radio />} />
                    <FormControlLabel value="female" label="female" control={<Radio />} />
                </RadioGroup>
            </FormControl>
            <div>
                <Checkbox inputProps={{ 'aria-label': 'controlled' }} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                <Checkbox inputProps={{ 'aria-label': 'controlled' }} icon={<BookmarkBorderIcon />} checkedIcon={<BookmarkIcon />} />
            </div>
            {/* <div>
                <FormControlLabel control={<Switch
                    color="secondary"
                    checked={value}
                    onChange={handleSwitch}
                    inputProps={{ 'aria-label': 'controlled' }}
                />}
                label="dark mode" />
            </div> */}

            <div>
                <Typography variant="h4">Give feedback</Typography>
                <Rating onChange={(e, newValue) => setValue(newValue)} value={value} />
            </div>
            <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
            >
                <Item>Item 1</Item>
                <Item>Item 2</Item>
                <Item>Item 3</Item>
            </Stack>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                <Paper elevation={0} />
                <Paper />
                <Paper elevation={3} />
            </Box>
        </div>
    )
}
