import React from 'react';
import { Box, Grid, Card, CardContent, Divider, Typography, Button} from '@mui/material';
import { tipsBoxStyles, introButtonStyle  } from '../extendedstyles'; 
import TipItem from './TipItem';
import { RAVI_KUMAR_URL } from '../scenariosUrls';
import { Location, UIElement } from "../tIdConstants";  
import screensIcon from '../assets/stroke/icons/Screens.svg'; 
import piechartIcon from '../assets/stroke/icons/Pie_chart.svg'; 
import eSimulationIcon from '../assets/stroke/icons/E-simulation.svg';
import documentIcon from '../assets/stroke/icons/Document_checked.svg'; 
import videoIcon from '../assets/stroke/icons/Video_48_black.svg'; 
import eSimulationIconBlack from '../assets/stroke/icons/E-simulation_48_black.svg';


const TipsBox = ({ theme }: { theme: any }) => {
    return (
        <Box sx={tipsBoxStyles(theme)}>
            <Box display="flex" flexDirection="row" justifyContent="center">
            {/* Left Column */}
                <Box display="flex" flexDirection="column" flex={1}>
                <TipItem
                    iconSrc={screensIcon}
                    text="Complete four cases of your choice in your preferred order."
                    iconAlt="screens icon"
                    iconId={Location.INDEX_PAGE + "AHA" + UIElement.ICON}
                 />
                <TipItem
                    iconSrc={piechartIcon}
                    text="Achieve at least 70% in Simulation Performance, Stroke Screening Exam, and Handover Report to pass a case."
                    iconAlt="piechart icon"
                    iconId={Location.INDEX_PAGE + "AHA" + UIElement.ICON}
                />
                </Box>
                {/* Right Column */}
                <Box display="flex" flexDirection="column" flex={1}>
                <TipItem
                    iconSrc={eSimulationIcon}
                    text="Feel free to complete additional cases or run a case multiple times."
                    iconAlt="eSimulation icon"
                    iconId={Location.INDEX_PAGE + "AHA" + UIElement.ICON}
                />
                    <TipItem
                    iconSrc={documentIcon}
                    text="Remember to complete the case to save your progress. You cannot close it down midway and resume later."
                    iconAlt="document icon"
                    iconId={Location.INDEX_PAGE + "AHA" + UIElement.ICON}
                />
                </Box>
            </Box>  

            <Divider sx={{ my: 3 }} />
      
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card sx={{ borderRadius: 1, height: '4rem' }} >
                        <CardContent sx={{ paddingTop: '0.5rem'}}>
                            <Box display="flex" justifyContent="space-between" alignItems="center" >
                                <Box display="flex" alignItems="center" sx={{ mb: -1 }}>
                                    <img  src={videoIcon} alt="" className="topAlignedIcon" />
                                    <Typography variant="body2">Watch tutorial video</Typography>
                                </Box>
                                <Button variant="outlined" color="primary" sx={introButtonStyle} href="" disabled={true}> 
                                Play
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                <Card sx={{ borderRadius: 1, height: '4rem' }}>
                    <CardContent sx={{ paddingTop: '0.5rem'}}>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            <Box display="flex" alignItems="center" sx={{ mb: -1 }}>
                                <img  src={eSimulationIconBlack} alt="" className="topAlignedIcon" />
                                <Typography variant="body2">Try out a patient case</Typography>
                            </Box>
                            <Button variant="outlined" color="primary" sx={introButtonStyle} href={RAVI_KUMAR_URL}> 
                            Start
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
                </Grid>
            </Grid>
     
        </Box> 
    );

};

export default TipsBox;