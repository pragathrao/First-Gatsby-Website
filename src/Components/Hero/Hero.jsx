import styled from '@emotion/styled'
import { Box, Button, Container, Grid, Hidden, Paper, Typography } from '@mui/material'
import React from 'react'
import Social from './Social'
import { StaticImage } from 'gatsby-plugin-image'

const HeroPaper = styled(Paper)`
    height: 90vh;
`

const Overlay = {
    backgroundColor: `${(props) => props.backgroundColor}`,
    height: "inherit",
    width: "100%",
    position: "absolute",
    zIndex: `${(props) => props.zIndex}`
}

function Hero() {
    return (
        <div>
            <HeroPaper id="About">
                <StaticImage style={Overlay} src='https://images.unsplash.com/photo-1574610758891-5b809b6e6e2e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1512&q=80' zIndex="1" alt='' />
                <div style={Overlay} backgroundColor="rgba(0,0,0,0.4)" zIndex="2"></div>
                <Container maxWidth="lg" sx={{ height: "100%" }}>
                    <Grid container alignItems="center" justifyContent="space-between" sx={{ height: "100%", position: "relative" }} >
                        <Grid item sm={8} >
                            <Typography variant='h1' fontWeight={800}>Hi! My Name Is Pragath</Typography>
                            <Typography variant='h5' sx={{marginTop: "15px"}}>I make modern Responsive Websites and Mobile Apps. </Typography>
                            <Box mt={4}>
                                <Button variant='outlined' color='secondary' size='large'>Get in Touch</Button>
                            </Box>
                        </Grid>
                        <Hidden smDown>
                            <Grid item  > <Social /> </Grid>
                        </Hidden>
                    </Grid>
                </Container>
            </HeroPaper>
        </div>
    )
}

export default Hero
