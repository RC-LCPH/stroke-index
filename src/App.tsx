import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, Container, Grid, Box } from '@mui/material';
import theme from './theme';
import TipsBox from './components/TipsBoxIndex';
import StrokeIndexTopBar from './components/StrokeIndexTopBar';
import { scenarios } from './strokePatientsData';
import ScenarioCard from './components/ScenarioCard';
import poweredByLaerdal from './assets/stroke/PoweredByLaerdal.svg';


const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* Apply Mui's CssBaseline */}
      <Container>
        <Box my={4}>
          <StrokeIndexTopBar />

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
     
        </Box>

        <Box component="footer" sx={{display: 'flex', justifyContent: 'flex-start', alignItems: 'center', mt: 4, py: 2, }} >
          <Box component="img" src={poweredByLaerdal} alt="Logo" sx={{ width: '9rem' }} />
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;