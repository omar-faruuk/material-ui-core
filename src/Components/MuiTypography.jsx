import { Typography } from "@mui/material";

const MuiTypography = () => {
    return (
        <div>
            {/* heading */}
            <Typography variant="h1">Heading h1</Typography>
            <Typography variant="h2">Heading h2</Typography>
            <Typography variant="h3">Heading h3</Typography>
            <Typography variant="h4">Heading h4</Typography>
            <Typography variant="h5">Heading h5</Typography>
            <Typography variant="h6" component="h1">Heading h6</Typography>

            {/* subtitle */}
            <Typography variant="subtitle1">Subtitle 1</Typography>
            <Typography variant="subtitle2">Subtitle 2</Typography>
            
            
            <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta maiores ut, tempore vero aliquid impedit asperiores dignissimos ipsa quisquam! Nobis.</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, adipisci enim fuga illo iure tempora. Eum, nisi numquam! Officia, beatae!</Typography>

            
        </div>
    );
};

export default MuiTypography;