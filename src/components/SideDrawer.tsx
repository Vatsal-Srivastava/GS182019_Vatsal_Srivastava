import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import StoreMallDirectoryOutlinedIcon from '@mui/icons-material/StoreMallDirectoryOutlined';
import CategoryOutlinedIcon from '@mui/icons-material/CategoryOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import InsertChartOutlinedOutlinedIcon from '@mui/icons-material/InsertChartOutlinedOutlined';
import { Icon, ListItemIcon } from '@mui/material';

const drawerWidth = 200;

export default function SideDrawer() {
    const navigate = useNavigate();
    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "white", color: "black", height: "70px" }}>
                <Toolbar>
                    <img src={logo} alt='Gsynergy Logo' height={90} width={180} />
                    <Typography sx={{ flexGrow: 1, textAlign: "center" }} variant="h3" noWrap component="div">
                        Data Viewer App
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                }}
            >
                <Toolbar />
                <Box sx={{ overflow: 'auto' }}>
                    <List>
                        {[
                            { text: "Store", path: "/stores", icon: <StoreMallDirectoryOutlinedIcon fontSize='large'/> },
                            { text: "SKU", path: "/skus", icon: <CategoryOutlinedIcon fontSize='large'/> },
                            { text: "Planning", path: "/planning", icon: <BarChartOutlinedIcon fontSize='large'/> },
                            { text: "Charts", path: "/charts", icon: <InsertChartOutlinedOutlinedIcon fontSize='large'/> },
                        ].map(({ text, path, icon }, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton onClick={() => navigate(path)}>
                                <ListItemIcon>
                {icon}
                                </ListItemIcon>
                                    <ListItemText primary={<Typography variant="h5" sx={{ fontWeight: 500 }}>
                                        {text}
                                    </Typography>} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    );
}
