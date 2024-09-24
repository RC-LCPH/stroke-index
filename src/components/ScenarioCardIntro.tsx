import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { bottomCardStyles, completionStatusStyle, startButtonStyle } from '../extendedstyles';
import theme from '../theme';
import systemIcon from '../assets/stroke/icons/System_icon.png';
import videoIcon from '../assets/stroke/icons/VideoWhite.png';

interface ScenarioCardProps {
    name: string;
    description: string;
    imageUrl: string;
    status: string;
    url: string;
  }
  
  
  const ScenarioCard: React.FC<ScenarioCardProps> = ({ name, description, imageUrl, status, url }) => {
    const backgroundColorVideo = status === 'Video' ? '#92702F' : '#25837E';
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
            <Box className='indexCardBoxContainer' sx={{ backgroundColor: backgroundColorVideo }}>
              <img src={status === 'Video' ? videoIcon : systemIcon} alt="name icon"/>
              <Typography variant="body2" className='patientName' gutterBottom>
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
              <Typography variant="body2" gutterBottom sx={completionStatusStyle}>
              {status === 'Incomplete' ? 'Incomplete' : ''}
              </Typography>
              <Button variant="outlined" color="primary" sx={startButtonStyle} href={url} disabled={true}> 
                Start
              </Button>
            </Box>
          </div>
        </CardContent>
      </Card>
    );
  };

  export default ScenarioCard;  
  