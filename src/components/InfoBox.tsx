import React, { useEffect } from 'react';
import { Alert, Collapse } from '@mui/material';
import { infoBox} from '../extendedstyles';

const InfoBox: React.FC = () => {
    const [open, setOpen] = React.useState(true);

    useEffect(() => {
        setOpen(open);
      }, [open]);

    return (
        <Collapse in={open} >
            <Alert variant="filled" severity="info" sx={infoBox} onClose={() => { setOpen(false);}}>
                "Support for tablets and Chromebooks will be available in early 2025. Currently, our software is supported on Windows (Chrome and Edge) and Mac (Chrome and Safari)."
            </Alert>
        </Collapse>
    );
};

export default InfoBox;