// stroke-index/src/components/TipItem.tsx
import React, {ReactNode} from 'react';
import { Box, Typography} from '@mui/material';
import { itemBoxStyle } from '../extendedstyles';
import '../theme.css';

interface TipItemProps {
  iconSrc: string;
  text: ReactNode;
  iconAlt: string;
  iconId: string;
}

//TODO replace this component with the infoItem already used in StrokeLaningPage.tsx 

const TipItem: React.FC<TipItemProps> = ({ iconSrc, text, iconAlt, iconId }) => {
  return (
    <Box display="flex" alignItems="center" sx={itemBoxStyle}>
      <img id={iconId} src={iconSrc} alt={iconAlt} className="topAlignedIcon" />
      <Typography variant="subtitle1" gutterBottom>
        {text}
      </Typography>
    </Box>
  );
};

export default TipItem;