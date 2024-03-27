import { Box, Container, Typography, Divider } from "@mui/material";
import PerkCard from "./PerkCard";
import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import HandymanIcon from "@mui/icons-material/Handyman";
import PeopleIcon from "@mui/icons-material/People";
import BrushIcon from "@mui/icons-material/Brush";
import CodeIcon from "@mui/icons-material/Code";
import PsychologyIcon from "@mui/icons-material/Psychology";
import HttpIcon from "@mui/icons-material/Http";
import DevicesIcon from "@mui/icons-material/Devices";

export const centeredStyles = {
  alignItems: "center",
  textAlign: "center",
  margin: "0 auto",
  width: "100%",
  display: "flex",
  flexDirection: "column",
};

gsap.registerPlugin(ScrollTrigger);

const perksArray = [
  {
    title: "Working as a team",
    Icon: PeopleIcon,
    text: "Collaborating effectively within a team and possessing strong communication skills not only accelerates project completion but also streamlines the process for a smoother and more efficient outcome",
  },
  {
    title: "Project development",
    text: "Crafting a project with a clean architecture not only enhances its readability but also ensures easier development in the future, ultimately elevating the human experience of the end product",
    Icon: CodeIcon,
  },
  {
    title: "Critical thinking",
    Icon: PsychologyIcon,
    text: "Critical thinking is essential for developers, as it fuels continual project enhancements and facilitates the implementation of more effective solutions",
  },
];
const Perks = () => {
  useEffect(() => {
    MainTitleAnimation(".h1", ".h2");
  }, []);

  return (
    <>
      {" "}
      <Container
        maxWidth="lg"
        id="skills"
        sx={{
          margin: "0 auto",
          my: "4em",
        }}
      >
        <Box sx={centeredStyles}>
          <Typography
            className="h1 t25o0"
            variant="h1"
            sx={{
              fontSize: {
                xs: "2.2em",
                sm: "2.5em",
                md: "3em",
              },
            }}
            fontWeight="600"
          >
            Skillset Showcase
          </Typography>
          <Typography
            variant="h2"
            className="secondary h2"
            sx={{
              pt: "1.5em",
              transform: "translateY(15px)",
              opacity: 0,
              maxWidth: "570px",
              fontSize: {
                xs: ".8em",
                sm: "1em",
              },
            }}
          >
            Here are the skills I will utilize as a developer
          </Typography>

          <Box
            sx={{
              mt: "3em",
              display: "flex",
              flexWrap: "wrap",
              gap: "5%",
              justifyContent: {
                xs: "center",
                sm: "space-between",
              },
            }}
          >
            {perksArray.map((perk) => {
              return (
                <PerkCard
                  key={perk.title}
                  title={perk.title}
                  text={perk.text}
                  Icon={perk.Icon}
                />
              );
            })}
          </Box>
        </Box>
      </Container>{" "}
      <Divider />{" "}
    </>
  );
};

export default Perks;
