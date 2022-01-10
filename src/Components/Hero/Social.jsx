import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Grid, IconButton, Link } from '@mui/material';

const social = [
    { icon: GitHubIcon, url: "" },
    { icon: LinkedInIcon, url: "" },
    { icon: TwitterIcon, url: "" },
]

function Social() {
    return (
        <Grid container direction="column" spacing={1} sm={4}>
            {social.map((items) => {
                return (
                    <Grid item >
                        <Link href={items.url}>
                            <IconButton>
                                < items.icon sx={{fontSize: "35px"}} />
                            </IconButton>
                        </Link>
                    </Grid>
                )
            })}
        </Grid>

    )
}

export default Social

