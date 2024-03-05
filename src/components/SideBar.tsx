import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, 
  Divider, 
  Drawer,
  List, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Toolbar, 
  Typography } from "@mui/material";
import { colors } from "../constants/Colors";

import { ISideBarProps } from "../interfaces/SideBar.Interface";

/* Icons */
import DashboardIcon from '@mui/icons-material/Dashboard';
import ListAltIcon from '@mui/icons-material/ListAlt';
import TaskIcon from '@mui/icons-material/Task';
import HardwareIcon from '@mui/icons-material/Hardware';
import HomeRepairServiceIcon from '@mui/icons-material/HomeRepairService';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';

export function SideBar( { hidden = false } : ISideBarProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedIndex, setSelectedIndex] = useState(0);

  /* Route checker: Needs to be updated later for optimization */
  useEffect(() => {
    switch (true) {
      case location.pathname.includes("/solicitudes"):
        setSelectedIndex(1);
        return
      case location.pathname.includes("/tickets"):
        setSelectedIndex(2);
        return
      case location.pathname.includes("/servicios"):
        setSelectedIndex(3);
        return
      case location.pathname.includes("/equipos"):
        setSelectedIndex(4);
        return
      case location.pathname.includes("/personal"):
        setSelectedIndex(5);
        return
      case location.pathname.includes("/configuracion"):
        setSelectedIndex(6);
        return
      default:
        setSelectedIndex(0);
    }
  }, [location]);

  return (
    <Box color={colors.primary} flex={1} justifyItems={"flex-start"}>
      {!hidden &&
        <Drawer variant="permanent" open ModalProps={{ keepMounted: true }}>
          <Link
            to={"/"}
            onClick={()=>setSelectedIndex(0)}
          >
            <Toolbar
              variant="dense"
              sx={{
                display: "flex",
                alignItems: "center",
                width: [240],
                backgroundColor: colors.primary
              }}
            >
                  <DashboardIcon 
                    sx={{ width:36, height:36, color: colors.tertiary}}
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
          </Link>
          <Divider sx = {{ backgroundColor: colors.quaternary }}/>
          <Box sx = {{ backgroundColor: colors.primary, height:"100%" }}>
            <List component="nav">
              
              <ListItemButton selected={selectedIndex === 1} 
                onClick={()=>{
                  navigate("/solicitudes", { replace: true });
                  setSelectedIndex(1)
                }}>
                <ListItemIcon>
                  <ListAltIcon sx = {{ color: selectedIndex===1 ? colors.tertiary : colors.quaternary }}/>
                </ListItemIcon>
                <ListItemText primary="Solicitudes" sx = {{ color: selectedIndex===1 ? colors.tertiary : colors.quaternary }}/>
              </ListItemButton>

              <ListItemButton selected={selectedIndex === 2} 
                onClick={()=>{
                  navigate("/tickets", { replace: true });
                  setSelectedIndex(2)
                }}>
                <ListItemIcon>
                  <TaskIcon sx = {{ color: selectedIndex===2 ? colors.tertiary : colors.quaternary }}/>
                </ListItemIcon>
                <ListItemText primary="Tickets" sx = {{ color: selectedIndex===2 ? colors.tertiary : colors.quaternary }}/>
              </ListItemButton>

              <ListItemButton selected={selectedIndex === 3} 
                onClick={()=>{
                  navigate("/servicios", { replace: true });
                  setSelectedIndex(3)
                }}>
                <ListItemIcon>
                  <HardwareIcon sx = {{ color: selectedIndex===3 ? colors.tertiary : colors.quaternary }}/>
                </ListItemIcon>
                <ListItemText primary="Servicios" sx = {{ color: selectedIndex===3 ? colors.tertiary : colors.quaternary }}/>
              </ListItemButton>

              <ListItemButton selected={selectedIndex === 4} 
                onClick={()=>{
                  navigate("/equipos", { replace: true });
                  setSelectedIndex(4)
                }}>
                <ListItemIcon>
                  <HomeRepairServiceIcon sx = {{ color: selectedIndex===4 ? colors.tertiary : colors.quaternary }}/>
                </ListItemIcon>
                <ListItemText primary="Equipos" sx = {{ color: selectedIndex===4 ? colors.tertiary : colors.quaternary }}/>
              </ListItemButton>

              <ListItemButton selected={selectedIndex === 5} 
                onClick={()=>{
                  navigate("/personal", { replace: true });
                  setSelectedIndex(5)
                }}>
                <ListItemIcon>
                  <PersonIcon sx = {{ color: selectedIndex===5 ? colors.tertiary : colors.quaternary }}/>
                </ListItemIcon>
                <ListItemText primary="Personal" sx = {{ color: selectedIndex===5 ? colors.tertiary : colors.quaternary }}/>
              </ListItemButton>

              <ListItemButton selected={selectedIndex === 6} 
                onClick={()=>{
                  navigate("/configuracion", { replace: true });
                  setSelectedIndex(6)
                }}>
                <ListItemIcon>
                  <SettingsIcon sx = {{ color: selectedIndex===6 ? colors.tertiary : colors.quaternary }}/>
                </ListItemIcon>
                <ListItemText primary="Configuración" sx = {{ color: selectedIndex===6 ? colors.tertiary : colors.quaternary }}/>
              </ListItemButton>

            </List>
          </Box>
      </Drawer>
      }
    </Box>
  );
}