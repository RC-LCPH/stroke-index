import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Grid, Box, Tabs, Tab } from '@mui/material';
import theme from './theme';

import TipsBox from './components/TipsBoxIndex';
import TipsBoxIntro from './components/TipsBoxIntro';
import StrokeIndexTopBar from './components/StrokeIndexTopBar';
import { scenarios } from './strokePatientsData';
import { introScenarios } from './strokeIntroData';
import ScenarioCard from './components/ScenarioCard';
import ScenarioCardIntro from './components/ScenarioCardIntro';


const App: React.FC = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply Mui's CssBaseline */}
      <Container>
        <Box my={4}>
          <StrokeIndexTopBar />
          <Tabs value={tabIndex} onChange={handleTabChange} aria-label="simple tabs example" >
            <Tab label="Case overview" />
            <Tab label="Introduction" />
          </Tabs>
          {tabIndex === 0 && (
            <Box>
              <TipsBox theme={theme} />
              <Grid container spacing={4}>
                {scenarios.map((scenarioItem) => (
                  <Grid item key={scenarioItem.name} xs={12} sm={6} md={4}>
                    <ScenarioCard {...scenarioItem} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
          {tabIndex === 1 && (
            <Box>
              {/* Add the content for the Introduction tab here */}
              <TipsBoxIntro theme={theme} />
              <Grid container spacing={4}>
                {introScenarios.map((scenarioItem) => (
                  <Grid item key={scenarioItem.name} xs={12} sm={6} md={4}>
                    <ScenarioCardIntro {...scenarioItem} />
                  </Grid>
                ))}
              </Grid>
            </Box>
          )}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;