import { Box, 
  Divider, 
  Drawer, 
  IconButton, 
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Toolbar, 
  Typography } from "@mui/material";
import { colors } from "../constants/Colors";

import { ISideBarProps } from "../interfaces/SideBar.Interface";

import DashboardIcon from '@mui/icons-material/Dashboard';

export function SideBar( { hidden = false } : ISideBarProps) {

  return (
    <Box color={colors.primary} flex={1} justifyItems={"flex-start"}>
      {!hidden &&
        <Drawer variant="permanent" open ModalProps={{ keepMounted: true }}>
        <Toolbar
          variant="dense"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            justifyItems: "flex-end",
            px: [1],
            width: [240],
            backgroundColor: colors.primary
          }}
        >
          
          <DashboardIcon 
            sx={{ pl:2, width:48, height:48, color: colors.tertiary}}
          />
          <Typography
            component="h1"
            variant="h6"
            noWrap
            fontWeight="bold"
            sx={{ flexGrow: 1, color: colors.tertiary }}
          >
            Electrodus
          </Typography>
        </Toolbar>
        <Divider />
        <List component="nav">
          
        <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Equipos" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Servicios" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Tickets" />
      </ListItemButton>

          <Divider sx={{ my: 1 }} />
        </List>
      </Drawer>
      }
    </Box>
  );
}