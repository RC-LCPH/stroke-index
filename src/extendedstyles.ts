
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
};

const exitButtonStyle = {
    borderRadius: '0.5rem',
    fontSize: '0.875rem',
    fontWeight: 700,
    textTransform: 'capitalize',
    borderWidth: '0.125rem',
};

// Export the styles
export { tipsBoxStyles, iconStyle, itemBoxStyle, bottomCardStyles, completionStatusStyle, startButtonStyle, exitButtonStyle };