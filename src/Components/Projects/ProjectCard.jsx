import { Card, CardActions, CardContent, CardMedia, Chip, Hidden, IconButton, Typography } from '@mui/material'
import React from 'react'

function ProjectCard(props) {

    const Img = props.Data
    const tag = props.Tag

    return (
        <Card sx={{ display: "flex" }}>
            <div>
                <CardContent>
                    <Typography variant='h5' paragraph>{props.title}</Typography>
                    <Typography variant='subtitle1' paragraph>{props.description}</Typography>
                    <Hidden smUp>
                        <div>
                            {tag.map((data) => {
                                return (
                                    <Chip label={data} sx={{ marginRight: "5px", marginBottom: "5px" }} />
                                )
                            })}
                        </div>
                    </Hidden>
                </CardContent>
                <CardActions>
                    <div style={{ marginRight: "auto" }}>
                        {Img.map((data) => {
                            return (
                                <IconButton>
                                    <data.icon />
                                </IconButton>
                            )
                        })}
                    </div>
                    <Hidden smDown>
                        <div>
                            {tag.map((data) => {
                                return (
                                    <Chip label={data} sx={{ marginRight: "5px", marginBottom: "5px" }} />
                                )
                            })}
                        </div>
                    </Hidden>
                </CardActions>
            </div>
            <Hidden smDown>
            <CardMedia image={props.image} sx={{ width: "180px" }}></CardMedia>
            </Hidden>

        </Card>
    )
}

export default ProjectCard
