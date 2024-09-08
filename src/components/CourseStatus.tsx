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
  let iconSrc;

  switch (status) {
    case 'Completed':
      backgroundColor = '#98D8D5'; 
      iconColor = '#145653'; 
      textColor = '#145653'; 
      iconSrc = BookmarkOn; // Use BookmarkOn icon for Completed status
      break;
    case 'Incomplete':
      backgroundColor = '#FFFFFF'; 
      iconColor = '#666666'; 
      textColor = '#666666'; 
      iconSrc = BookmarkOff; // Use BookmarkOff icon for Incomplete status
      break;
    default:
      backgroundColor = '#FFFFFF'; 
      iconColor = '#666666'; 
      textColor = '#666666'; 
      iconSrc = BookmarkOff; // Default to BookmarkOff icon
  }

  return (
    <Box display="flex" alignItems="center" bgcolor={backgroundColor} p={1} borderRadius={1}>
      <img src={iconSrc} alt="icon" style={{ marginRight: '8px', color: iconColor, width: '16px', height: '16px' }} />
      <Typography variant="h6" style={{ color: textColor, fontSize: '1rem' }}>
        {name}
      </Typography>
    </Box>
  );
};

export default CourseStatus;