import React from 'react'
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

export default function Footer() {
    return (
        <Container style={{ textAlign:'center' }} >
            <Typography variant="body2" color="text.secondary">
                {'Copyright © '} claimed by owners of this website
            </Typography>
        </Container>
    );
}

