import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Avatar, Container, Grid, Hidden, Link } from '@mui/material';

const drawerWidth = 240;

const Navigation = [
    { name: "About", href: "#About" },
    { name: "Projects", href: "#Projects" },
    { name: "Resume", href: "" }
];

const link = {
    marginRight: "20px"
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

export default function Header() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Container maxWidth="lg">
                    <Toolbar>
                        <Grid container justifyContent="space-between" alignItems="center">
                            <Grid item>
                                <Avatar>P</Avatar>
                            </Grid>
                            <Hidden smDown>
                                <Grid item >
                                    {Navigation.map((items) => {
                                        return (
                                            <Link
                                                sx={link}
                                                href={items.href}
                                                color='textPrimary'
                                                variant='button'
                                                underline='none'
                                            >{items.name}</Link>
                                        )
                                    })}
                                </Grid>
                            </Hidden>
                            <Hidden smUp>
                                <Grid item >
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        edge="end"
                                        onClick={handleDrawerOpen}
                                        sx={{ ...(open && { display: 'none' }) }}
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                    },
                }}
                variant="persistent"
                anchor="right"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        <ChevronRightIcon />
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['About', 'Projects', "Resume"].map((text, index) => (
                        <ListItem button key={text}>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon  /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />
            </Drawer>
        </Box >
    );
}