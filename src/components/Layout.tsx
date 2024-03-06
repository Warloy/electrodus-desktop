import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Box, Container } from "@mui/material";
import { NavBar } from "./NavBar"
import { SideBar } from "./SideBar"
import { ILayoutProps } from "../interfaces/Layout.Interface"
import { colors } from "../constants/Colors";

export function Layout ( { children } : ILayoutProps) {
  const location = useLocation();
  const [hide, setHide] = useState(false)
  const [boxMargin, setBoxMargin] = useState(0)

  /* Handles the hidden property of the layout */
  useEffect(() => {
    switch (true) {
      case location.pathname.includes("/login"):
        setHide(true);
        return
      case location.pathname.includes("/recover"):
        setHide(true);
        return  
      case location.pathname.includes("/register"):
        setHide(true);
        return
      default:
        setHide(false);
    }
  }, [location]);

  
  /* Handles the Box margin property of the layout */
  useEffect(()=>{
    hide ? setBoxMargin(0) : setBoxMargin(240)
  }, [hide])

  return (
    <Box sx={{ display: "flex", backgroundColor: colors.background }}>
      <NavBar hidden={hide}/>
      <SideBar hidden={hide}/>
      <Container
          component="main"
          sx={{
            backgroundColor: colors.background,
            flexGrow: 1,
            width: `calc(100% - ${boxMargin}px)`,
            maxWidth: `calc(100% - ${boxMargin}px)`,
            height: "100%",
            overflow: "auto",
            flexDirection: "column",
            justifyContent: "flex-start"
          }}
          disableGutters
        >
          {children}
        </Container>
    </Box>
  );
}