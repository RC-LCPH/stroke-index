import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Grid, Box, Divider } from '@mui/material';
import theme from './theme';
import './theme.css';
import TipsBox from './components/TipsBoxIndex';
import StrokeIndexTopBar from './components/StrokeIndexTopBar';
import { scenarios } from './strokePatientsData';
import { introScenarios } from './strokeIntroData';
import ScenarioCard from './components/ScenarioCard';
import ScenarioCardIntro from './components/ScenarioCardIntro';
import CompletionMessage from './components/CompletionMessage';
import InfoBox from './components/InfoBox';

const App: React.FC = () => {
  //persist the state of the intro scenarios in local storage to keep the status between sessions
  const [introScenariosState, setIntroScenariosState] = useState(() => {
    const savedScenarios = localStorage.getItem('introScenariosState');
    return savedScenarios ? JSON.parse(savedScenarios) : introScenarios;
  });

  const [allIntroCompleted, setAllIntroCompleted] = useState(() => {
    const savedAllIntroCompleted = localStorage.getItem('allIntroCompleted');
    return savedAllIntroCompleted ? JSON.parse(savedAllIntroCompleted) : false;
  });

  useEffect(() => {
    localStorage.setItem('introScenariosState', JSON.stringify(introScenariosState));
    const allIntroCompleted = introScenariosState.some((scenarioIntro: { cardType: string; status: string }) => scenarioIntro.cardType === 'Sandbox' && scenarioIntro.status === 'Completed') &&
                         introScenariosState.some((scenarioIntro: { cardType: string; status: string }) => scenarioIntro.cardType === 'Video' && scenarioIntro.status === 'Completed');
    setAllIntroCompleted(allIntroCompleted);
    localStorage.setItem('allIntroCompleted', JSON.stringify(allIntroCompleted));
  }, [introScenariosState]);

  const handleIntroCompletion = (cardType: string) => {
    setIntroScenariosState((prevState: typeof introScenarios) => 
      prevState.map(scenarioIntro => 
        scenarioIntro.cardType === cardType ? { ...scenarioIntro, status: 'Completed' } : scenarioIntro
      )
    );
  };

  const completedScenarios = scenarios.filter(scenario => scenario.status === 'Completed');

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply Mui's CssBaseline */}
      <Container>
        <Box my={4}>
          <StrokeIndexTopBar />
          <InfoBox /> 
          {completedScenarios.length >= 4 && <CompletionMessage />}
            <Box>
              <TipsBox theme={theme} />

              <Grid container spacing={4}>
                {introScenariosState.map((scenarioIntroItem: { name: string; cardType: string; status: string; description: string; imageUrl: string; url: string }) => (
                  <Grid item key={scenarioIntroItem.name} xs={12} sm={6} md={4}>
                    <ScenarioCardIntro {...scenarioIntroItem} allIntroCompleted={allIntroCompleted} onComplete={handleIntroCompletion} />
                  </Grid>
                ))}
              </Grid>
              
              <Divider sx={{ my: 3 }} />

              <Grid container spacing={4}>
                {scenarios.map((scenarioItem) => (
                  <Grid item key={scenarioItem.name} xs={12} sm={6} md={4}>
                    <ScenarioCard {...scenarioItem} allIntroCompleted={allIntroCompleted} />
                  </Grid>
                ))}
              </Grid>
            </Box>
     
        </Box>

        <Box component="footer" sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mt: -3, py: 2, }} >
          <p aria-label='Laerdal logo' className='poweredByLaerdal'>
            Powered by Laerdal
          </p>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;