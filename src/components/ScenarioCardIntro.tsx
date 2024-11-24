import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { bottomCardStyles, completionStatusStyle, startButtonStyle } from '../extendedstyles';
import theme from '../theme';
import systemIcon from '../assets/stroke/icons/System_icon_teal.svg';
import videoIcon from '../assets/stroke/icons/Video_teal.svg';

interface ScenarioCardIntroProps {
    name: string;
    description: string;
    imageUrl: string;
    status: string;
    cardType: string;
    url: string;
  }
  
  
  const ScenarioCardIntro: React.FC<ScenarioCardIntroProps> = ({ name, description, imageUrl, status, cardType, url }) => {
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
{/*               <Typography variant="body2" gutterBottom sx={completionStatusStyle}>
              {status === 'Incomplete' ? 'Incomplete' : ''}
              </Typography> */}
              <Button variant="outlined" color="primary" sx={startButtonStyle} href={url} disabled={cardType === 'Video'}> 
                {cardType === 'Video' ? 'Play' : 'Start'}
              </Button>
            </Box>
          </div>
        </CardContent>
      </Card>
    );
  };

  export default ScenarioCardIntro;  
  