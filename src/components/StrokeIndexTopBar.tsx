import React from 'react';
import { Box} from '@mui/material';
import { default as AHA_logo } from '../assets/stroke/AHA_logo.svg';
import ESLS_logo from '../assets/stroke/ESLS.svg';
import GordonCenter_logo from '../assets/stroke/GordonCenter.svg';

const StrokeIndexTopBar: React.FC = () => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb={5}>
      <Box display="flex" alignItems="center">
        <img src={AHA_logo} alt="aha logo"/>
        <Box component="img" src={ESLS_logo} alt="ESLS logo" sx={{ width: '18rem', ml: '1rem', mt: "0.5rem" }} />
      </Box>
      <Box component="img" src={GordonCenter_logo} alt="new image"  />
    </Box>
  );
};

export default StrokeIndexTopBar;