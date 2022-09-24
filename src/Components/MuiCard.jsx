import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material';
import React from 'react';

const MuiCard = () => {
    return (
        <Box sx={{display:'flex', width:'100vw', height: '100vh', alignItems: 'center', justifyContent: 'center'}}>
            <Card sx={{maxWidth: 360}}>
                <CardMedia
                 component="img"
                 height="200"
                 image='https://source.unsplash.com/photos/5E5N49RWtbA'
                 alt='unsplash'
                 />
                <CardContent>
                 <Typography variant='h5'>Lorem</Typography>
                 <Typography variant='body2' color="text.secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, veritatis? Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, quidem!</Typography>
                </CardContent>
                <CardActions>
                  <Button>Share</Button>
                  <Button>Learn more</Button>
                </CardActions>
            </Card>
        </Box>
    );
};

export default MuiCard;