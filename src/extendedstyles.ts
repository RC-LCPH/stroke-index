import { fontGrid } from "@mui/material/styles/cssUtils";

// Define the sx styles as variables
const tipsBoxStyles = (theme: any) => ({
    backgroundColor: '#F1FBFE',
    borderRadius: '1rem',
    padding: {
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
    },
    height: '60%',
    overflow: 'auto',
    pointerEvents: 'auto',
    marginBottom: '1.5rem', 
    marginTop: '1rem', 
});

const iconStyle = {
    paddingRight: '1rem',
};

const itemBoxStyle = {
    paddingTop: '1rem',
    paddingRight: '1rem',
};

const bottomCardStyles = (theme: any) => ({
    display: 'flex', 
    justifyContent: 'space-between', 
    paddingBottom: '.5rem', 
    paddingRight: '1rem', 
    width: '100%',
});

const introCardsStyle = {
    borderRadius: 1, 
    height: '4rem',
    border: '0.063rem solid', // 1px
    borderColor: '#D9D9D9', 
    boxShadow: 'none',
};

const completionStatusStyle = {
    fontSize: '0.875rem',
    color: '#666666',
    paddingLeft: '1rem',
    paddingTop: '.5rem',
};

const startButtonStyle = {
    borderRadius: '.5rem',
    fontSize: '0.875rem',
    textTransform: 'capitalize',
    width: '4.6rem', 
    height: '2rem',
    minWidth: '4rem',
    borderWidth: '0.125rem',
    marginLeft: 'auto',
    fontFamily: 'Lato, sans-serif',
    fontWeight: 700, 
};

const introButtonStyle = {
    borderRadius: '.5rem',
    fontSize: '0.875rem',
    textTransform: 'capitalize',
    width: '4.6rem', 
    height: '2rem',
    minWidth: '4rem',
    borderWidth: '0.125rem',
    marginLeft: 'auto',
    marginBottom: '-0.5rem',
};

const exitButtonStyle = {
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: 700,
    textTransform: 'capitalize',
    borderWidth: '0.125rem',
};

const completedBox = {
    backgroundColor: '#ECFEF1',
    borderRadius: '0.5rem',
    padding: '1rem',
    display: 'flex',
    alignItems: 'flex-start',
    marginTop: '1rem',
};

const completedBoxContent = { 
    paddingTop: '0.5rem', 
    paddingBottom: '1rem', 
    paddingLeft: '0.5rem', 
}

const greatWorkText = {
    color: '#13772A', 
    fontFamily: 'Lato, sans-serif', 
    fontSize: '1.5rem', 
    fontWeight: 'bold',
}

const feelFreeText = { 
    color: '#1F1F1F', 
    fontFamily: 'Lato, sans-serif', 
    fontSize: '1rem', 
}
// Export the styles
export { tipsBoxStyles, iconStyle, itemBoxStyle, bottomCardStyles, completionStatusStyle, startButtonStyle, exitButtonStyle, introButtonStyle, introCardsStyle, completedBox, completedBoxContent, greatWorkText, feelFreeText };