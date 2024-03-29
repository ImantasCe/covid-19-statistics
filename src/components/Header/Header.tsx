import { AppBar, Container } from "@mui/material";
import NavLink from "../Link/NavLink";
import { RouteKey } from "../../navigation/routes";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container
        maxWidth="md"
        sx={{
          display: "flex",
          alignItems: "center",
          height: "50px",
          justifyContent: "space-between",
        }}
      >
        <NavLink color="inherit" underline="none" to={RouteKey.Index}>
          Home
        </NavLink>
        <NavLink color="inherit" underline="none" to={RouteKey.Countries}>
          Countries
        </NavLink>
      </Container>
    </AppBar>
  );
};

export default Header;
