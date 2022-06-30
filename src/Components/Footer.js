import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Footer() {
    return (
        <Container>
            <Typography variant="body2" color="text.secondary">
                {'Copyright © '}
            </Typography>
        </Container>
    );
}

