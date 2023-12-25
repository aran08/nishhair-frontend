import React from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Switch from '@mui/material/Switch';
import CustomizedSlider from './priceSlider';


function Block1() {

  const [checked, setChecked] = React.useState(true);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  return (
     <div className='w-full h-full'>
        <div className="flex-col pl-10 ">
        <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>AVAILABILITY</Typography>
        </AccordionSummary>
        <div className='flex gap-5 items-center'>
        <Switch
        checked={checked}
        onChange={handleChange}
        inputProps={{ 'aria-label': 'controlled' }}
        />
        in stock
        </div>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>PRICE</Typography>
        </AccordionSummary>
        <div>
        <CustomizedSlider/>
        </div>
      </Accordion>
    </div>
           
     </div>
  )
}

export default Block1