import React from 'react';
import { Box, Typography } from '@mui/material';
import certificateIcon from '../assets/stroke/icons/Certificate.svg';
import '../theme.css';
import { completedBox, completedBoxContent, greatWorkText, feelFreeText } from '../extendedstyles';

const CompletionMessage: React.FC = () => {
  return (
    <Box sx={completedBox}>
      <img src={certificateIcon} alt="Certificate icon" className="certificateIconStyle"/>
      <Box sx={completedBoxContent}>
        <Typography variant="h6" sx={greatWorkText}>
          Great work, you completed the four required simulations.
        </Typography>
        <Typography variant="body2" sx={feelFreeText}>
          Feel free to complete additional ones, if you're interested in more practice
        </Typography>
      </Box>
    </Box>
  );
};

export default CompletionMessage; 