import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { Data } from './Data'
import ProjectCard from './ProjectCard'

function Projects() {
    return (
        <Container maxWidth="lg" id="Projects">
            <Box mt={6} mb={2}>
                <Typography variant='h4'>Projects</Typography>
            </Box>
            <Grid container direction='column' spacing={4} >
                {Data.map((data) => {
                    return (
                        <Grid item>
                            <ProjectCard
                                title={data.title}
                                description={data.description}
                                image={data.imageUrl}
                                Data={data.links}
                                Tag={data.tags}
                            />
                        </Grid>
                    )
                })}
            </Grid>
        </Container>
    )

}
export default Projects
