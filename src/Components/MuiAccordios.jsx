import { ExpandCircleDown, ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

const MuiAccordios = () => {
    const [expanded, setExpanded] = useState(false);
    const handleChange = (panel) => (e, isExpand)=>{
        setExpanded(isExpand ? panel : false)
    }
    return (
        <Stack alignItems="center" mb={5}>
            <Accordion expanded={expanded === "panel1"} onChange={handleChange("panel1")}>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste aliquid maiores libero est?</Typography> 
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel2"} onChange={handleChange("panel2")}>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste aliquid maiores libero est?</Typography> 
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === "panel3"} onChange={handleChange("panel3")}>
                <AccordionSummary expandIcon={<ExpandMore/>}>
                  <Typography>Accordion 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                   <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt iste aliquid maiores libero est?</Typography> 
                </AccordionDetails>
            </Accordion>
        </Stack>
    );
};

export default MuiAccordios;