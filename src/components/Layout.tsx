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
    <Box sx = {{ display: "flex", minWidth: "100vh", minHeight: "92vh" }}>
      <NavBar hidden={hide}/>
      <SideBar hidden={hide}/>
      <Card
        component="main"
        sx={{
          backgroundColor: colors.background,
          width: `calc(100% - ${boxMargin}px)`,
          maxWidth: `calc(100% - ${boxMargin}px)`,
          maxHeight:"100%",
          height: "100%",
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