import { AppBar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { useContext } from "react";
import HomeIcon from "@mui/icons-material/Home";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { INavbar } from "../../Types/Types";
import { ColorModeContext } from "../../../pages/_app";
import Logo from "../Logo/Logo";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import { useRouter } from "next/router";
import gsap from "gsap";

export const Links = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "About",
    url: "/",
  },
  {
    text: "Skills",
    url: "/",
  },
  {
    text: "Framework",
    // Icon: DarkModeIcon,
    url: "/",
  },
  {
    text: "Projects",
    url: "/",
  },
  {
    text: "Contact",
    url: "/",
  },
];

const Navbar = ({ toggleDrawer, navbarSx }: INavbar) => {
  const colorMode = useContext(ColorModeContext);
  const color = colorMode.mode === "light" ? "black" : "white";
  const router = useRouter();
  return (
    <AppBar
      sx={{
        background: "transparent",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        py: ".45em",
        zIndex: "555",
        backdropFilter: "blur(1px)",
        position: "fixed",
        ...navbarSx,
      }}
      position="static"
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 auto",
        }}
        maxWidth="lg"
      >
        <Logo color={color} toggleDrawer={toggleDrawer} colorMode={colorMode} />
        <Button
          onClick={() =>
            gsap.to(window, {
              duration: 2,
              scrollTo: `#hero`,
            })
          }
          sx={{
            mr: "1em",
            fontWeight: "500",
            ":hover": { color: "#0092ff" },
            color: color,
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          {/* <Typography> */}
          Home
          {/* </Typography> */}
        </Button>
        <Button
          onClick={() =>
            gsap.to(window, {
              duration: 2,
              scrollTo: `#hero`,
            })
          }
          sx={{
            mr: "1em",
            fontWeight: "500",
            ":hover": { color: "#0092ff" },
            color: color,
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          {/* <Typography> */}
          About
          {/* </Typography> */}
        </Button>
        <Button
          onClick={() =>
            gsap.to(window, {
              duration: 2,
              scrollTo: `#skills`,
            })
          }
          sx={{
            mr: "1em",
            fontWeight: "500",
            ":hover": { color: "#0092ff" },
            color: color,
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          {/* <Typography> */}
          Skills
          {/* </Typography> */}
        </Button>
        <Button
          onClick={() =>
            gsap.to(window, {
              duration: 2,
              scrollTo: `#framework`,
            })
          }
          sx={{
            mr: "1em",
            fontWeight: "500",
            ":hover": { color: "#0092ff" },
            color: color,
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          {/* <Typography> */}
          Framework
          {/* </Typography> */}
        </Button>
        <Button
          onClick={() =>
            gsap.to(window, {
              duration: 2,
              scrollTo: `#ProjectSection`,
            })
          }
          sx={{
            mr: "1em",
            fontWeight: "500",
            ":hover": { color: "#0092ff" },
            color: color,
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          {/* <Typography> */}
          Projects
          {/* </Typography> */}
        </Button>
        <Button
          onClick={() =>
            gsap.to(window, {
              duration: 2,
              scrollTo: `#contact`,
            })
          }
          sx={{
            mr: "1em",
            fontWeight: "500",
            ":hover": { color: "#0092ff" },
            color: color,
            display: {
              xs: "none",
              lg: "block",
            },
          }}
        >
          {/* <Typography> */}
          Contact
          {/* </Typography> */}
        </Button>
        <IconButton
          sx={{
            color,
            ":hover": {
              color,
            },
            ":focus": {
              color,
            },
            display: {
              xs: "block",
              lg: "none",
            },
          }}
          onClick={() => toggleDrawer()}
          size="large"
          edge="start"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Container>
    </AppBar>
  );
};
export default Navbar;
