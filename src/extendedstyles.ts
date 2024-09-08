
// Define the sx styles as variables
const tipsBoxStyles = (theme: any) => ({
    backgroundColor: '#F1FBFE',
    borderRadius: '16px',
    padding: {
      md: '16px',
      lg: '24px',
      xl: '32px',
    },
    height: '60%',
    overflow: 'auto',
    pointerEvents: 'auto',
    marginBottom: '24px', 
    marginTop: '16px', 
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
    width: '5.75rem',
    minWidth: '4rem',
};

// Export the styles
export { tipsBoxStyles, iconStyle, itemBoxStyle, bottomCardStyles, completionStatusStyle, startButtonStyle };