import { Container, Grid, Paper } from '@mui/material'
import React from 'react'

function home() {
    return (
        <Container>

            <Grid container>
                <Grid item sm={8}>
                    <Paper>1</Paper>
                </Grid>
                <Grid item sm={4}>
                    <Paper>2</Paper>
                </Grid>
                <Grid item>
                    <Paper>3</Paper>
                </Grid>

            </Grid>
        </Container>
    )
}

export default home
