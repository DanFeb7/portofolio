import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Tooltip,
  Typography,
} from "@mui/material";
import { centeredStyles } from "../Perks/Perks";
import ProjectCard from "./ProjectCard";
import { useEffect } from "react";
import MainTitleAnimation from "../../../gsap/MainTitleAnimation";
import gsap from "gsap";
import { IProjects } from "../../../Types/Types";

const Projects = () => {
  const projectsArray = [
    {
      siteUrl: "https://77movement.com/",
      title: "Youth Hermon Website (2022)",
      img: "https://ucarecdn.com/a650c163-a3af-4dde-b939-dabba040d72f/-/scale_crop/1903x944/",
      description:
        "Utilizing Laravel and MySQL as the database management system, to develop a platform for Youth Hermon members to share their reflections on Bible verses",
    },
    {
      siteUrl: "https://www.unika.ac.id/",
      title: "SCU Website (2021)",
      img: "https://ucarecdn.com/5ebe87ed-fcfb-4130-aa5b-4cd9dc1afdad/-/scale_crop/1903x945/",
      description:
        "Using WordPress Elementor to redesign the SCU university website (unika.ac.id) and crafting dedicated websites for each faculty, including FK, FITL, FAD, FEB, and others.",
    },
  ];

  useEffect(() => {
    MainTitleAnimation(".title3", ".title4");
    if (!projectsArray) return;
    setTimeout(() => {
      for (let i = 0; i < projectsArray.length; i++) {
        gsap.to(`.p${i}`, {
          duration: 0.8,
          transform: "translateX(0%)",
          ease: "easeIn",
          scrollTrigger: {
            trigger: `.p${i}`,
            start: "top 60%",
          },
        });
      }
    }, 100);
  }, []);

  return (
    <Box
      sx={{
        overflowX: "hidden",
      }}
    >
      <Container
        id="ProjectSection"
        maxWidth="lg"
        sx={{
          margin: "0 auto",
          py: "6em",
        }}
      >
        <Grid container>
          <Grid item sx={centeredStyles}>
            <Typography
              className="title3 t25o0"
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
              Successful Projects
            </Typography>
            <Typography
              className="title4 t25o0"
              variant="h2"
              sx={{
                pt: "1.5em",
                maxWidth: "570px",
                fontSize: {
                  xs: ".8em",
                  sm: "1em",
                },
              }}
            >
              No better way to get experience than real-life projects
            </Typography>
          </Grid>
          <Box
            sx={{
              ...centeredStyles,
              mt: "3em",
            }}
          >
            {projectsArray ? (
              projectsArray.map((project: any, index: number) => {
                return (
                  <ProjectCard
                    className={`p${index}`}
                    isReversed={index % 2 === 0 ? true : false}
                    siteUrl={project.siteUrl}
                    repoUrl={project.repoUrl}
                    title={project.title}
                    img={project.img}
                    description={project.description}
                    key={project.title}
                  />
                );
              })
            ) : (
              <Typography
                variant="h1"
                fontSize="1em"
                fontWeight="500"
                color="red"
              >
                There was an error loading the projects.
              </Typography>
            )}
          </Box>
          <Box
            sx={{
              margin: "0 auto",
              mt: "3em",
            }}
          >
            {/* <Tooltip title="More Project Is On My LinkedIn Profile"> */}
            <Button
              className="loadMore"
              variant="contained"
              sx={{
                opacity: 0,
                padding: ".5em 3.5em",
                background: "transparent",
                border: "1px solid",
                color: "#0092ff",
                ":hover": {
                  border: "1px solid transparent",
                },
              }}
            >
              More Project Is On My LinkedIn Profile
            </Button>
            {/* </Tooltip> */}
          </Box>
        </Grid>
      </Container>
      <Divider className="divider" />
    </Box>
  );
};

export default Projects;
