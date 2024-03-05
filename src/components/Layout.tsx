import { NavBar } from "./NavBar"
import { SideBar } from "./SideBar"
import { ILayoutProps } from "../interfaces/Layout.Interface"
import { Box } from "@mui/material";

export function Layout ( { hidden = false, children } : ILayoutProps) {
  
  const boxMargin = hidden ? 0 : 240;

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar hidden={hidden}/>
      <SideBar hidden={hidden}/>
      <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            ml: {boxMargin},
            width: `calc(100% - ${boxMargin}px)`,
            height: "100%",
            overflow: "auto",
          }}
        >
          {children}
        </Box>
    </Box>
  );
}