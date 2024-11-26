import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { bottomCardStyles, startButtonStyle } from '../extendedstyles';
import theme from '../theme';
import systemIcon from '../assets/stroke/icons/System_icon_teal.svg';
import videoIcon from '../assets/stroke/icons/Video_teal.svg';
import CourseStatus  from './CourseStatus';

interface ScenarioCardIntroProps {
    name: string;
    description: string;
    imageUrl: string;
    status: string;
    cardType: string;
    url: string;
    allIntroCompleted: boolean;
    onComplete: (cardType: string) => void;
  }
  
  
  const ScenarioCardIntro: React.FC<ScenarioCardIntroProps> = ({ name, description, imageUrl, status: initialStatus, cardType, url, allIntroCompleted, onComplete }) => {
    const [status, setStatus] = useState(() => {
      const savedStatus = localStorage.getItem(`${name}-status`);
      return savedStatus ? savedStatus : initialStatus;
    });
    // this is to keep the tutorial cards status between sessions
    useEffect(() => {
      localStorage.setItem(`${name}-status`, status);
    }, [status, name]);

    // currently when the card button is clicked the status is set to completed
    const handleButtonClick = (cardType: string, status: string) => {
      window.open(url, '_blank');
      setStatus("Completed"); 
      onComplete(cardType);
    };
    

    return (
      <Card className="index-card">
        <CardMedia
          component="img"
          height="140"
          src="#"
          alt={name}
          sx={{
            content: `url(${imageUrl})`
          }}
        />
        <CardContent className="index-card-content">
          <div className='index-card-container'>
            <Box className='indexCardBoxContainer' sx={{ backgroundColor: '#D4E9F2' }}>
              <img src={cardType === 'Video' ? videoIcon : systemIcon} alt="name icon"/>
              <Typography variant="body2" className='patientNameIntro' gutterBottom>
                {name}
              </Typography>           
            </Box>
            <Typography variant="body2" color="text.secondary" className="index-card-description">
              {description}
            </Typography>
          </div>
          <div className="cardBottom">
            <hr className='contentSeparator'/>  
            <Box mt={2} sx={bottomCardStyles(theme)}>
            <CourseStatus name={status === 'Incomplete' ? 'Incomplete' : 'Completed'} status={status === 'Incomplete' ? 'Incomplete' : 'Completed'} /> 
              <Button variant="outlined" color="primary" sx={startButtonStyle} onClick={() => { handleButtonClick(cardType, status);  }}> 
              {cardType === 'Video' ? 'Play' : (cardType === 'Sandbox' && status === 'Incomplete' ? 'Start' : 'Retry')}
              </Button>
            </Box>
          </div>
        </CardContent>
      </Card>
    );
  };

  export default ScenarioCardIntro;
