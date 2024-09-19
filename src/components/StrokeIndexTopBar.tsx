import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { default as AHA_logo } from '../assets/stroke/AHA_logo_plain.png';
import { Location, UIElement } from "../tIdConstants"; 
import { exitButtonStyle } from '../extendedstyles';

const StrokeIndexTopBar: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb={5}>
      <Box display="flex" alignItems="center">
        <img
          id={Location.LANDING_PAGE + "AHA" + UIElement.LOGO}
          src={AHA_logo}
          alt="aha logo"
          className="max-w-[20vw] sm:max-w-[10vw] md:max-w-[15vw] mr-6"
        />
        <Typography variant="body2" gutterBottom sx={{ fontSize: '2.125rem', paddingLeft: '1rem', paddingTop: '1rem' }}>
          ESLS Simulations
        </Typography>
      </Box>
    {/*   <Button variant="outlined" color="primary" sx={exitButtonStyle}>
        Exit Exercise
      </Button> */}
    </Box>
  );
};

export default StrokeIndexTopBar;