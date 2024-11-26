import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Button } from '@mui/material';
import { bottomCardStyles, startButtonStyle } from '../extendedstyles';
import theme from '../theme';
import { introScenarios } from '../strokeIntroData';
import CourseStatus from './CourseStatus';


interface ScenarioCardProps {
    name: string;
    description: string;
    imageUrl: string;
    status: string;
    url: string;
    allIntroCompleted: boolean;
  }
  
  const ScenarioCard: React.FC<ScenarioCardProps> = ({ name, description, imageUrl, status, url, allIntroCompleted }) => {

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
            <Box className='indexCardBoxContainer'>
            <img src="/stroke-index/assets/E-simulation_white.svg" alt="name icon" style={{ width: '1.5rem', height:'1.5rem'}}/>
              <Typography variant="body2" className='patientName' gutterBottom>
                {name}
              </Typography>           
            </Box>
            <Typography variant="body2" color="text.secondary" className="index-card-description" sx={{marginRight: '1rem'}}>
              {description}
            </Typography>
          </div>
          <div className="cardBottom">
            <hr className='contentSeparator'/>  
            <Box mt={2} sx={bottomCardStyles(theme)} display="flex" alignItems="center">
              <CourseStatus name={status === 'Incomplete' ? 'Incomplete' : 'Completed'} status={status === 'Incomplete' ? 'Incomplete' : 'Completed'} /> 
              <Button variant={status === 'Incomplete' ? 'contained' : 'outlined'} color="primary" sx={startButtonStyle} href={url}  disabled={!allIntroCompleted}>
                {status === 'Incomplete' ? 'Start' : 'Retry'}
              </Button>
            </Box>
          </div>
        </CardContent>
      </Card>
    );
  };

  export default ScenarioCard;
