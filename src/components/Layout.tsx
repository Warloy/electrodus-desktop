import { useEffect, useState } from "react";
/* import { useLocation } from "react-router-dom"; Deprecated by the appselector hook */
import { Box, Card } from "@mui/material";
import { NavBar } from "./NavBar"
import { SideBar } from "./SideBar"
import { ILayoutProps } from "../interfaces/Layout.Interface"
import { colors } from "../constants/Colors";
import { useAppSelector } from "../hooks/useRedux";

export function Layout ( { children } : ILayoutProps) {
  /* const location = useLocation(); Deprecated by the appselector hook*/ 
  const [hide, setHide] = useState(false)
  const [boxMargin, setBoxMargin] = useState(0)
  const authUser = useAppSelector(state => state.user.user)
  /* Handles the hidden property of the layout */
  useEffect(()=>{
    setHide(authUser ? false : true)
  }, [authUser])
  /* useEffect(() => {
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
  }, [location]); */

  
  /* Handles the Box margin property of the layout */
  useEffect(()=>{
    hide ? setBoxMargin(0) : setBoxMargin(240)
  }, [hide])

  return (
    <Box sx = {{ position: "relative", display: "flex", width: "100vw", minHeight: "100vh" }}>
      <NavBar hidden={hide}/>
      <SideBar hidden={hide}/>
      <Card
        component="main"
        sx={{
          mt:6.5,
          backgroundColor: colors.secondary,
          minWidth: `calc(100vw - ${boxMargin}px)`,
          maxWidth: `calc(100vw - ${boxMargin}px)`,
          minHeight: "94vh",
          maxHeight:"94vh",
          flexDirection: "column",
          justifyContent: "flex-start",
          boxShadow: 0
        }}
      >
          {children}
      </Card>
    </Box>
  );
}