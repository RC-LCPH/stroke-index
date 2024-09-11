import React from 'react';
import { Box } from '@mui/material';
import { tipsBoxStyles } from '../extendedstyles'; 
import TipItem from '../components/TipItem';
import { Location, UIElement } from "../tIdConstants";  
import videoIcon from '../assets/stroke/icons/Video.png'; 
import eSimulationIcon from '../assets/stroke/icons/E-simulation.png';


const TipsBox = ({ theme }: { theme: any }) => {
    return (
        <Box sx={tipsBoxStyles(theme)}>
            <Box display="flex" flexDirection="row" justifyContent="center">
            {/* Left Column */}
                <Box display="flex" flexDirection="column" flex={1}>
                <TipItem
                    iconSrc={videoIcon}
                    text="Watch the video tutorial to learn how to use the simulation cases. Get introduced to the navigation and key functionality, and learn what steps you will be going through during the simulation cases."
                    iconAlt="screens icon"
                    iconId={Location.INDEX_PAGE + "AHA" + UIElement.ICON}
                 />
                </Box>
                {/* Right Column */}
                <Box display="flex" flexDirection="column" flex={1}>
                <TipItem
                    iconSrc={eSimulationIcon}
                    text={
                        <ul className= "topAlignedList ">
                          <li>Try the sandbox case to practice using the simulation</li>
                          <li>Feel free to explore all available functionality</li>
                          <li>Try to give a patient handoff and receive feedback</li>
                          <li>Feedback notes errors, but they will not impact final evaluation</li>
                        </ul>
                      }
                    iconAlt="eSimulation icon"
                    iconId={Location.INDEX_PAGE + "AHA" + UIElement.ICON}
                />
                </Box>
            </Box>  
        </Box> 
    );

};

export default TipsBox;