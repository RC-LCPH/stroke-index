import React from 'react';
import { Typography, Box } from '@mui/material';
import BookmarkOff from '../assets/stroke/icons/Bookmark_off.png';
import BookmarkOn from '../assets/stroke/icons/Bookmark_on.png';

interface CourseStatusProps {
  name: string;
  status: 'Incomplete' | 'Completed'; 
}

const CourseStatus: React.FC<CourseStatusProps> = ({ name, status }) => {
  let backgroundColor;
  let iconColor;
  let textColor;
  let textWeight;
  let iconSrc;

  switch (status) {
    case 'Completed':
      backgroundColor = '#CCEED2'; 
      iconColor = '#13772A'; 
      textColor = '#13772A'; 
      textWeight = 'bold';
      iconSrc = BookmarkOn; 
      break;
    case 'Incomplete':
      backgroundColor = '#FFFFFF'; 
      iconColor = '#666666'; 
      textColor = '#666666'; 
      textWeight = 'normal';
      iconSrc = BookmarkOff; 
      break;
    default:
      backgroundColor = '#FFFFFF'; 
      iconColor = '#666666'; 
      textColor = '#666666'; 
      textWeight = 'normal';
      iconSrc = BookmarkOff; 
  }

  return (
    <Box display="flex" alignItems="center" justifyContent="center" bgcolor={backgroundColor} p={1} borderRadius={'0.125rem'} width="7rem" height="2rem">
      <img src={iconSrc} alt="icon" style={{ marginRight: '0.25rem', color: iconColor, width: '1rem', height: '1rem' }} /> 
      <Typography variant="body2" style={{ color: textColor, fontWeight: textWeight, fontSize: '0.9rem', marginBottom: '0.15rem' }}>
        {name}
      </Typography>
    </Box>
  );
};

export default CourseStatus;