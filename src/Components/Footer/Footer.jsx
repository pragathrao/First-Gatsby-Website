import { Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'

function Footer() {
    return (
        <Paper sx={{ marginTop: "20px", height: "50px" }}>
            <Container maxWidth="lg" sx={{ height: "100%" }}>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", height: "100%" }}>
                    <Typography fontWeight={800}>Created By Me :)</Typography>
                </Box>

            </Container>
        </Paper>



    )
}

export default Footer
