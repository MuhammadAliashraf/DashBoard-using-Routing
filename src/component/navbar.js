import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import './navbar.css';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import InsightsIcon from '@mui/icons-material/Insights';
import InfoIcon from '@mui/icons-material/Info';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Chart from "../pages/chart"
import Notifications from "../pages/notification"
import Admin from "../pages/admin"
import Typography from '@mui/material/Typography';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const drawerWidth = 240;
export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
          <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                 <InboxIcon/>
              </ListItemIcon>
              <Link className='Link' to="/" >Home</Link>
              </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                 <InboxIcon/>
              </ListItemIcon>
              <Link className='Link' to="admin" >Admin Panel</Link> <ArrowForwardIcon/>
              </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                 <ArrowForwardIcon/>
              </ListItemIcon>
              <Link className='Link' to="component" >Component</Link>
              </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                 <InsightsIcon/>
              </ListItemIcon>
              <Link className='Link' to="chart" >Chart</Link>
              </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
              <ListItemButton>
              <ListItemIcon>
                 <NotificationsIcon/>
              </ListItemIcon>
              <Link className='Link' to="notification" >Notifications</Link>
              </ListItemButton>
          </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link className="Links" to='/' variant="h6" noWrap component="div">
            Admin Panel
          </Link>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
