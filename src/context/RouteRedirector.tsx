import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/useRedux";

const RouteGroups = {
  NoAuth: ["/login", "/recover", "/register"]
}

const RouteRedirector = () => {
  const navigate = useNavigate()
  const route = useLocation().pathname
  const user = useAppSelector(state => state.user.user)
  /* If there is no user */
  if (!user) {
    /* If the route does not match any of the NoAuth group */
    if (!RouteGroups.NoAuth.includes(route)){
      navigate("/login")
      return
    }
  } else /* If there is user */ {
    /* If the route is part of the NoAuth group */
    if (RouteGroups.NoAuth.includes(route)){
      navigate("/")
      return
    }
  }
  return
}

export default RouteRedirector